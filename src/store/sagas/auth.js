/* global localStorage */

import { call, put, select, takeLatest } from 'redux-saga/effects'

import API from '../../api'
import { SIGNUP, LOGIN, FETCH_AUTH_USER, FETCH_AUTH_USER_SUCCESS, FETCH_AUTH_USER_ERROR } from '../constants'

const getAuthenticatedState = (state) => {
  return state.auth.isAuthenticated
}

function * signupFlow (action) {
  const { payload } = action

  const token = payload.user.token
  API.setAuthHeader(token)
  localStorage.setItem('JWT_TOKEN', token)

  yield put({ type: SIGNUP, payload })
}

function * loginFlow (action) {
  const { payload } = action

  const token = payload.user.token
  API.setAuthHeader(token)
  localStorage.setItem('JWT_TOKEN', token)

  yield put({ type: LOGIN, payload })
}

function * authProfileFlow () {
  const isAuthenticated = select(getAuthenticatedState)

  if (isAuthenticated) {
    try {
      const data = yield call(API.getAuthUser)
      yield put({ type: FETCH_AUTH_USER_SUCCESS, payload: data.user })
    } catch (e) {
      yield put({
        type: FETCH_AUTH_USER_ERROR,
        payload: {
          isAuthenticated: false
        }
      })
    }
  }
}

function * authFlow () {
  yield takeLatest(SIGNUP, signupFlow)
  yield takeLatest(LOGIN, loginFlow)
  yield takeLatest(FETCH_AUTH_USER, authProfileFlow)
}

export default authFlow
