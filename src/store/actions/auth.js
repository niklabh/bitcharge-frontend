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

const getAuthUser = (user = null) => {
  return {
    type: FETCH_AUTH_USER,
    payload: {
      user
    }
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
