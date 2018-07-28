/* global localStorage */
import jwtDecode from 'jwt-decode'

import API from '../../api'
import { SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGOUT, FETCH_AUTH_USER, FETCH_AUTH_USER_ERROR } from '../constants'

const initialState = {
  isAuthenticated: false,
  user: null
}

const getInitialState = () => {
  try {
    const token = localStorage.getItem('JWT_TOKEN')
    const { exp } = jwtDecode(token)

    // Check if token is expired (It should be more than an hour)
    const isExpired = exp * 1000 - Date.now() < 60 * 1000

    if (isExpired) {
      return initialState
    } else {
      API.setAuthHeader(token)
      return { ...initialState, isAuthenticated: true }
    }
  } catch (e) {
    return initialState
  }
}

const auth = (state = getInitialState(), action) => {
  const { type, payload } = action

  switch (type) {
    case SIGNUP_SUCCESS:
      return { ...state, ...payload }

    case LOGIN_SUCCESS:
      return { ...state, ...payload }

    case FETCH_AUTH_USER:
      return { ...state, ...payload }

    case FETCH_AUTH_USER_ERROR:
      return { ...state, ...payload }

    case LOGOUT:
      return { ...initialState }

    default:
      return state
  }
}

export default auth
