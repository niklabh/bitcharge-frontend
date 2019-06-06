import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { cx } from 'emotion'
import { UserSession, AppConfig } from 'blockstack'

import LoginForm from './LoginForm'
import Container from '../../components/Container'
import Text from '../../components/Text'

import API from '../../api'
import { login as loginAction } from '../../store/actions/auth'

import styles from './styles'

const appConfig = new AppConfig(['email'], process.env.NODE_ENV === 'production' ? 'https://bitcharge.co' : 'http://localhost:3000')
const userSession = new UserSession({ appConfig: appConfig })

class Login extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit (values, bag) {
    try {
      const data = await API.login(values)
      bag.setSubmitting(false)
      this.props.loginAction(data.user)
      this.props.history.push('/profile')
    } catch (e) {
      bag.setSubmitting(false)
      bag.setErrors(e.response.data.errors.details.errors.errors)
    }
  }

  handleBlockStackLogin () {
    userSession.redirectToSignIn()
  }

  render () {
    if (this.props.isAuthenticated) {
      return (<Redirect to='/profile' />)
    }

    return (
      <Container fluid style={styles.mainContainer}>
        <Helmet>
          <title>Login - Bitcharge</title>
          <meta property='og:title' content={`Login - Bitcharge`} />
          <meta property='og:url' content='https://bitcharge.co/login' />
          <meta itemProp='name' content='Login - Bitcharge' />
        </Helmet>
        <Container style={styles.heroContainer}>
          <Container style={styles.heroLogoContainer}>
            <a href='/'><img alt='bitcharge-logo' className={cx(styles.logoImageStyle)} src='https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png' /></a>
          </Container>
          <Container style={styles.heroTextContainer}>
            <img alt='login-avatar' className={cx(styles.signupAvatarIconStyle)} src='https://res.cloudinary.com/bitcharge/image/upload/v1535940305/panda-avatar.png' />
            <Text tag='h3' style={styles.heroText}>Welcome back.</Text>
          </Container>
          <Container style={styles.heroFooterContainer}>
            <Text tag='h6'>Don't have an account. <Link to='/signup' className={cx(styles.SignupLink)}>Signup</Link></Text>
          </Container>
        </Container>
        <Container style={styles.bodyContainer}>
          <LoginForm onSubmit={this.handleSubmit} onBlockStackLogin={this.handleBlockStackLogin} />
        </Container>
      </Container>
    )
  }
}

Login.propTypes = {
  loginAction: PropTypes.func,
  history: PropTypes.any,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, { loginAction })(Login)
