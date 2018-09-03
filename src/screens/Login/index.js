import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { cx } from 'emotion'

import LoginForm from './LoginForm'
import Container from '../../components/Container'
import Text from '../../components/Text'

import API from '../../api'
import { login as loginAction } from '../../store/actions/auth'

import styles from './styles'

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
      console.log(e.response)
      bag.setSubmitting(false)
      bag.setErrors(e.response.data.errors.details.errors.errors)
    }
  }

  render () {
    if (this.props.isAuthenticated) {
      return (<Redirect to='/profile' />)
    }

    return (
      <Container fluid style={styles.mainContainer}>
        <Container style={styles.heroContainer}>
          <Container style={styles.heroLogoContainer}>
            <a href='/'><img alt='bitcharge-logo' className={cx(styles.logoImageStyle)} src='https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png' /></a>
          </Container>
          <Container style={styles.heroTextContainer}>
            <img alt='login-avatar' className={cx(styles.signupAvatarIconStyle)} src='https://res.cloudinary.com/bitcharge/image/upload/v1535940306/dog-avatar.png' />
            <Text tag='h3' style={styles.heroText}>Welcome back.</Text>
          </Container>
          <Container style={styles.heroFooterContainer}>
            <Text tag='h6'>Don't have an account. <Link to='/signup' className={cx(styles.SignupLink)}>Signup</Link></Text>
          </Container>
        </Container>
        <Container style={styles.bodyContainer}>
          <LoginForm onSubmit={this.handleSubmit} />
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
