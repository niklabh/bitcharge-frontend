import axios from 'axios'

const PUBLIC_URI = process.env.NODE_ENV === 'production'
  ? process.env.PUBLIC_URL
  : 'http://localhost:8080'

class API {
  constructor () {
    this.axios = axios.create({
      baseURL: `${PUBLIC_URI}/api`
    })
  }

  setAuthHeader = (token) => {
    this.axios.defaults.headers.common['Authorization'] = `bearer ${token}`
  }

  removeAuthHeader = () => {
    delete this.axios.defaults.headers.common['Authorization']
  }

  signup = (userDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.post('/signup', userDetails)
        return resolve(response.data)
      } catch (error) {
        return reject(error)
      }
    })
  }

  confirmEmail = (code) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.post(`/confirm`, { confirmationCode: code })
        return resolve(response)
      } catch (error) {
        return reject(error)
      }
    })
  }

  login = (userDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.post('/login', userDetails)
        return resolve(response.data)
      } catch (error) {
        return reject(error)
      }
    })
  }

  addAddress = (addressDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.post('/addresses', addressDetails)
        return resolve(response.data)
      } catch (error) {
        return reject(error)
      }
    })
  }

  getCurrencies = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.get('/currencies')
        return resolve(response.data)
      } catch (error) {
        return reject(error)
      }
    })
  }

  getAuthUser = () => {
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

  getProfile = (username) => {
    console.log(username)

    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.get(`${username}`)
        return resolve(response.data)
      } catch (e) {
        return reject(e)
      }
    })
  }
}

export default new API()
