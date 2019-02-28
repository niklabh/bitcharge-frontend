import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { cx } from 'emotion'

import EmailForm from './EmailForm'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/Button'
import API from '../../api'

import styles from './styles'

class ForgotPassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isEmailSubmit: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit (values, bag) {
    try {
      await API.forgotPassword(values)
      bag.setSubmitting(false)
      this.setState({ isEmailSubmit: true })
    } catch (e) {
      bag.setSubmitting(false)
    }
  }

  handleResendEmail = () => {
    this.setState({ isEmailSubmit: false })
  }

  sendEmailSuccess = () => {
    return (
      <React.Fragment>
        <Text tag='h1' style={styles.formHeaderText}>Email sent successfully.</Text>
        <Text tag='h5' style={styles.formDetailsText}>Reset password instructions have been sent to your email address. Please click on the link to reset your password.</Text>
        <Container style={styles.buttonContainer}>
          <Button
            primary
            style={styles.submitButton}
            onClick={this.handleResendEmail}
          >
            Try Again
          </Button>
        </Container>
      </React.Fragment>
    )
  }

  sendEmailForm = () => {
    return (
      <React.Fragment>
        <Text tag='h1' style={styles.formHeaderText}>We have your back.</Text>
        <EmailForm handleSubmit={this.handleSubmit} />
      </React.Fragment>
    )
  }

  render () {
    if (this.props.isAuthenticated) {
      return (<Redirect to='/profile' />)
    }

    return (
      <Container fluid style={styles.mainContainer}>
        <Helmet>
          <title>Forgot Password - Bitcharge</title>
          <meta property='og:title' content={`Forgot Password - Bitcharge`} />
          <meta property='og:url' content='https://bitcharge.co/forgot' />
          <meta itemProp='name' content='Forgot Password - Bitcharge' />
        </Helmet>
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
          {this.state.isEmailSubmit ? this.sendEmailSuccess() : this.sendEmailForm()}
        </Container>
      </Container>
    )
  }
}

ForgotPassword.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(ForgotPassword)
