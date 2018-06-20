import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home'
import Signup from '../Signup'
import Login from '../Login'
import ForgotPassword from '../ForgotPassword'
import Profile from '../Profile'
import Dashboard from '../Dashboard'
import AddAddress from '../AddAddress'

import Container from '../../components/Container'

import styles from './styles'

class Root extends Component {
  render () {
    return (
      <Container fluid fullHeight style={styles.mainContainer}>
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/forgot' component={ForgotPassword} />
          <Route path='/profile' component={Dashboard} />
          <Route path='/address/new' component={AddAddress} />
          <Route path='/:username' component={Profile} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Container>
    )
  }
}

export default Root
