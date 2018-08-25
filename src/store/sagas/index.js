import { fork } from 'redux-saga/effects'

import authFlow from './auth'
import addressFlow from './address'

function * rootSaga () {
  yield fork(authFlow)
  yield fork(addressFlow)
}

export default rootSaga
