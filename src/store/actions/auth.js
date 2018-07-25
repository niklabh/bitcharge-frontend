import {
  SIGNUP,
  LOGIN,
  FETCH_AUTH_USER
} from '../constants'

const signup = (user) => {
  return {
    type: SIGNUP,
    payload: {
      isAuthenticated: true,
      user
    }
  }
}

const login = (user) => {
  return {
    type: LOGIN,
    payload: {
      isAuthenticated: true,
      user
    }
  }
}

const getAuthUser = () => {
  console.log('called get auth user action')
  return {
    type: FETCH_AUTH_USER
  }
}

export {
  signup,
  login,
  getAuthUser
}
