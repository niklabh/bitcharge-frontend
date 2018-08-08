import {
  SIGNUP,
  LOGIN,
  LOGOUT,
  FETCH_AUTH_USER,
  CONFIRM_EMAIL
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

const logout = () => {
  return {
    type: LOGOUT
  }
}

const getAuthUser = () => {
  console.log('called get auth user action')
  return {
    type: FETCH_AUTH_USER
  }
}

const confirmEmail = (success) => {
  return {
    type: CONFIRM_EMAIL,
    payload: {
      success
    }
  }
}

export {
  signup,
  login,
  logout,
  getAuthUser,
  confirmEmail
}
