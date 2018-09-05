import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import Home from '../Home'
import Privacy from '../Privacy'
import Terms from '../Terms'

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
        <Helmet>
          <meta property='og:title' content='Bitcharge' />
          <meta property='og:site_name' content='Bitcharge' />
          <meta property='og:type' content='website' />
          <meta property='og:description' content='The easiest way to accept crypto payments.' />
          <meta property='og:image' content='https://res.cloudinary.com/bitcharge/image/upload/v1536051435/assets/bitcharge-social-graph.png' />
          <meta property='og:image:alt' content='Bitcharge' />
          <meta property='og:url' content='https://bitcharge.co' />

          <meta property='fb:app_id' content='1928411100786366' />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@bitcharge_co' />
          <meta name='twitter:creator' content='@bitcharge_co' />
        </Helmet>
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/confirm' component={SignupConfirmation} />
          <Route path='/forgot' component={ForgotPassword} />
          <PrivateRoute path='/profile' component={Dashboard} />
          <PrivateRoute path='/address/new' component={AddAddress} />
          <Route path='/privacy' component={Privacy} />
          <Route path='/terms' component={Terms} />
          <Route exact path='/' component={Home} />
          <Route path='/:username' component={Profile} />
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
