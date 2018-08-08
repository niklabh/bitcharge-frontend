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
import SignupConfirmation from '../SignupConfirmation'

import Container from '../../components/Container'
import PrivateRoute from '../../containers/PrivateRoute'
import { getAuthUser } from '../../store/actions/auth'

import styles from './styles'

class Root extends Component {
  componentDidMount () {
    if (this.props.isAuthenticated) {
      this.props.getAuthUser()
    }
  }
  render () {
    return (
      <Container fluid fullHeight style={styles.mainContainer}>
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/confirm' component={SignupConfirmation} />
          <Route path='/forgot' component={ForgotPassword} />
          <PrivateRoute path='/profile' component={Dashboard} />
          <Route path='/:username' component={Profile} />
          <PrivateRoute path='/address/new' component={AddAddress} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

Root.propTypes = {
  isAuthenticated: PropTypes.bool,
  getAuthUser: PropTypes.func
}

export default withRouter(connect(mapStateToProps, { getAuthUser })(Root))
