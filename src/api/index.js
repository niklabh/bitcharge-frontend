import axios from 'axios'

const PUBLIC_URI = process.env.NODE_ENV === 'production'
  ? process.env.PUBLIC_URL
  : 'http://localhost:8080'

class API {
  constructor () {
    this.axios = axios.create({
      baseURL: `${PUBLIC_URI}/api`
    })

    this.getAuthUser = this.getAuthUser.bind(this)
    this.confirmEmail = this.confirmEmail.bind(this)
    this.getCurrencies = this.getCurrencies.bind(this)
  }

  setAuthHeader (token) {
    this.axios.defaults.headers.common['Authorization'] = `bearer ${token}`
  }

  removeAuthHeader () {
    delete this.axios.defaults.headers.common['Authorization']
  }

  signup (userDetails) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.post('/signup', userDetails)
        return resolve(response.data)
      } catch (error) {
        return reject(error)
      }
    })
  }

  confirmEmail (code) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.post(`/confirm`, { confirmationCode: code })
        return resolve(response)
      } catch (error) {
        return reject(error)
      }
    })
  }

  login (userDetails) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.post('/login', userDetails)
        return resolve(response.data)
      } catch (error) {
        return reject(error)
      }
    })
  }

  AddAddress () {
  }

  getCurrencies () {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.get('/currencies')
        return resolve(response.data)
      } catch (error) {
        return reject(error)
      }
    })
  }

  getAuthUser () {
    console.log('get axios user')
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.get('/profile')
        return resolve(response.data)
      } catch (error) {
        return reject(error)
      }
    })
  }
}

export default new API()
