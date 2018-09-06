import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { cx } from 'emotion'

import EmailForm from './EmailForm'
import Container from '../../components/Container'
import Text from '../../components/Text'

import styles from './styles'

class ForgotPassword extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit (values, bag) {
    try {
      bag.setSubmitting(false)
      this.props.history.push('/profile')
    } catch (e) {
      bag.setSubmitting(false)
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
            <img alt='forgot-password-avatar' className={cx(styles.signupAvatarIconStyle)} src='https://res.cloudinary.com/bitcharge/image/upload/v1535940360/cat-avatar.png' />
            <Text tag='h3' style={styles.heroText}>Forgot Password</Text>
          </Container>
        </Container>
        <Container style={styles.bodyContainer}>
          <Text tag='h1' style={styles.formHeaderText}>We have your back.</Text>
          <EmailForm onSubmit={this.handleSubmit} />
        </Container>
      </Container>
    )
  }
}

ForgotPassword.propTypes = {
  history: PropTypes.any,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(ForgotPassword)
