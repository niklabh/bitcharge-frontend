import { call, put, takeLatest } from 'redux-saga/effects'

import API from '../../api'
import {
  FETCH_ADDRESSES,
  FETCH_ADDRESSES_LOADING,
  FETCH_ADDRESSES_SUCCESS,
  FETCH_ADDRESSES_ERROR,
  ADD_ADDRESS,
  ADD_ADDRESS_SUCCESS,
  UPDATE_ADDRESS,
  UPDATE_ADDRESS_SUCCESS,
  DELETE_ADDRESS,
  DELETE_ADDRESS_SUCCESS,
  DELETE_ADDRESS_ERROR
} from '../constants'

function * fetchAddressesFlow (action) {
  try {
    yield put({ type: FETCH_ADDRESSES_LOADING })
    const addresses = yield call(API.getAddresses)
    yield put({
      type: FETCH_ADDRESSES_SUCCESS,
      payload: { ...addresses }
    })
  } catch (e) {
    console.log(e)
    yield put({
      type: FETCH_ADDRESSES_ERROR
    })
  }
}

function * addAddressFlow (action) {
  const { payload } = action

  yield put({
    type: ADD_ADDRESS_SUCCESS,
    payload
  })
}

function * updateAddressFlow (action) {
  const { payload } = action

  yield put({
    type: UPDATE_ADDRESS_SUCCESS,
    payload
  })
}

function * deleteAddressFlow (action) {
  const { payload } = action

  if (payload.params && payload.params.local) {
    yield put({
      type: DELETE_ADDRESS_SUCCESS,
      payload
    })
  } else {
    try {
      const response = yield call(API.deleteAddress, payload.address)
      console.log(response)

      yield put({
        type: DELETE_ADDRESS_SUCCESS,
        payload
      })
    } catch (e) {
      yield put({
        type: DELETE_ADDRESS_ERROR
      })
    }
  }
}

function * addressFlow () {
  yield takeLatest(FETCH_ADDRESSES, fetchAddressesFlow)
  yield takeLatest(ADD_ADDRESS, addAddressFlow)
  yield takeLatest(UPDATE_ADDRESS, updateAddressFlow)
  yield takeLatest(DELETE_ADDRESS, deleteAddressFlow)
}

export default addressFlow
