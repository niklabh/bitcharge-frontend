/* global localStorage */

import { call, put, select, takeLatest } from 'redux-saga/effects'

import API from '../../api'
import {
  SIGNUP,
  SIGNUP_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  FETCH_AUTH_USER,
  FETCH_AUTH_USER_SUCCESS,
  FETCH_AUTH_USER_ERROR,
  CONFIRM_EMAIL
} from '../constants'

const getAuthenticatedState = (state) => {
  return state.auth.isAuthenticated
}

const setToken = (token) => {
  API.setAuthHeader(token)
  localStorage.setItem('JWT_TOKEN', token)
}

function * signupFlow (action) {
  const { payload } = action

  setToken(payload.user.token)

  yield put({ type: SIGNUP_SUCCESS, payload })
}

function * loginFlow (action) {
  const { payload } = action

  setToken(payload.user.token)

  yield put({ type: LOGIN_SUCCESS, payload })
}

function * authProfileFlow () {
  const isAuthenticated = select(getAuthenticatedState)

  if (isAuthenticated) {
    try {
      const data = yield call(API.getAuthUser)
      console.log(data)
      yield put({ type: FETCH_AUTH_USER_SUCCESS, payload: { user: data } })
    } catch (e) {
      console.log('data in saga', e)
      yield put({
        type: FETCH_AUTH_USER_ERROR,
        payload: {
          isAuthenticated: false
        }
      })
    }
  }
}

function * confirmEmailFlow (action) {
  const { payload } = action

  if (payload.success) {
    yield put({ type: FETCH_AUTH_USER })
  }
}

function * authFlow () {
  yield takeLatest(SIGNUP, signupFlow)
  yield takeLatest(LOGIN, loginFlow)
  yield takeLatest(FETCH_AUTH_USER, authProfileFlow)
  yield takeLatest(CONFIRM_EMAIL, confirmEmailFlow)
}

export default authFlow
