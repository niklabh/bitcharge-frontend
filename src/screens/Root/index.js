import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from '../Home'
import Signup from '../Signup'
import Login from '../Login'
import ForgotPassword from '../ForgotPassword'
import Profile from '../Profile'
import Dashboard from '../Dashboard'
import AddAddress from '../AddAddress'

import Container from '../../components/Container'
import PrivateRoute from '../../containers/PrivateRoute'
import { getAuthUser } from '../../store/actions/auth'

import styles from './styles'

class Root extends Component {
  componentDidMount () {
    this.props.getAuthUser()
  }
  render () {
    return (
      <Container fluid fullHeight style={styles.mainContainer}>
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/forgot' component={ForgotPassword} />
          <PrivateRoute path='/profile' component={Dashboard} />
          <PrivateRoute path='/address/new' component={AddAddress} />
          <Route path='/:username' component={Profile} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Container>
    )
  }
}

Root.propTypes = {
  getAuthUser: PropTypes.func
}

export default withRouter(connect(null, { getAuthUser })(Root))
