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

  setErrors = (errors) => {
    let errorObj = {}
    if (errors && Object.keys(errors).length) {
      Object.keys(errors).forEach((error) => {
        errorObj[error] = errors[error].msg
      })
    }

    return errorObj
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

  updateUser = (details) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.put('/profile', details)
        return resolve(response.data)
      } catch (error) {
        return reject(error)
      }
    })
  }

  verifyEmail = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.get('/verify/email')
        return resolve(response.data)
      } catch (error) {
        return reject(error)
      }
    })
  }

  getAuthUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.get('/profile')
        return resolve(response.data)
      } catch (error) {
        return reject(error)
      }
    })
  }

  getAddresses = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.get('/addresses')
        return resolve(response.data)
      } catch (error) {
        return reject(error)
      }
    })
  }

  updateAddress = (addressDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.put(`/addresses/${addressDetails.currency.symbol}`, { address: addressDetails.address })
        return resolve(response.data)
      } catch (error) {
        return reject(error)
      }
    })
  }

  deleteAddress = (address) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.delete(`/addresses/${address.currency.symbol}`)
        return resolve(response.data)
      } catch (error) {
        return reject(error)
      }
    })
  }

  getProfile = (username) => {
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
