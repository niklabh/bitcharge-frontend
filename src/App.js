import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import Root from './screens/Root'
import store from './store'

import './styles/App.css'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Root />
        </Router>
      </Provider>
    )
  }
}

export default App
