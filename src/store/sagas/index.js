import { fork } from 'redux-saga/effects'

import authFlow from './auth'

function * rootSaga () {
  yield fork(authFlow)
}

export default rootSaga
