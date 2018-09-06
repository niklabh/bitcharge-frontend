import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import Root from './screens/Root'
import store from './store'

const App = ({ routes, initialData, initialDataError }) => {
  return (
    <Provider store={store}>
      <Root routes={routes} initialData={initialData} initialDataError={initialDataError} />
    </Provider>
  )
}

App.propTypes = {
  routes: PropTypes.array,
  initialData: PropTypes.object,
  initialDataError: PropTypes.object
}

export default App
