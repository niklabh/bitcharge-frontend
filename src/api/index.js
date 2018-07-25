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
        return reject(error.response.data)
      }
    })
  }

  login (userDetails) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.post('/login', userDetails)
        return resolve(response.data)
      } catch (error) {
        return reject(error.response.data)
      }
    })
  }

  getAuthUser () {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.get('/profile')
        return resolve(response.data)
      } catch (error) {
        return reject(error.response.data)
      }
    })
  }
}

export default new API()
