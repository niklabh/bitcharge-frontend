import { combineReducers } from 'redux'

import auth from './auth'
import addresses from './address'

const App = combineReducers({
  auth,
  addresses
})

export default App
