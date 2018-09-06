import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Root from './screens/Root'
import store from './store'

import './styles/App.css'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

export default App
