import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { cx } from 'emotion'
import jwtDecode from 'jwt-decode'
import qs from 'qs'

import PasswordForm from './PasswordForm'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/Button'
import API from '../../api'

import styles from './styles'

class ResetPassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isExpired: false,
      isPasswordUpdated: false,
      isError: false,
      token: null,
      noRecoveryToken: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount = () => {
    const query = qs.parse(this.props.location.search.split('?')[1])
    if (!query.recoveryCode) {
      this.setState({ noRecoveryToken: true })
    } else {
      const { exp } = jwtDecode(query.recoveryCode)
      const isExpired = exp * 1000 - Date.now() < 60 * 10

      if (isExpired) {
        this.setState({ isExpired: true })
      } else {
        this.setState({ token: query.recoveryCode })
      }
    }
  }

  async handleSubmit (values, bag) {
    try {
      await API.resetPassword({ ...values, recoveryCode: this.state.token })
      bag.setSubmitting(false)
      this.setState({ isPasswordUpdated: true })
    } catch (error) {
      bag.setSubmitting(false)
      if (error.response.status === 410) {
        this.setState({ isExpired: true })
      } else {
        this.setState({ isError: true })
      }
    }
  }

  handleResubmit = () => {
    this.setState({ isPasswordUpdated: false, isError: false })
  }

  renderNoRecoveryToken = () => {
    return (
      <React.Fragment>
        <Text tag='h1' style={styles.formHeaderText}>Something is wrong with the link.</Text>
        <Text tag='h5' style={styles.formDetailsText}>The link you used to reset the password is incorrect. Please generate a new link by resending the email.</Text>
        <Container style={styles.buttonContainer}>
          <Button
            primary
            tag={Link}
            to='/forgot'
            style={styles.submitButton}
          >
            Resend Email
          </Button>
        </Container>
      </React.Fragment>
    )
  }

  renderExpired = () => {
    return (
      <React.Fragment>
        <Text tag='h1' style={styles.formHeaderText}>Password reset link expired</Text>
        <Text tag='h5' style={styles.formDetailsText}>Your password reset link expired. Please generate a new link by resending the email.</Text>
        <Container style={styles.buttonContainer}>
          <Button
            primary
            tag={Link}
            to='/forgot'
            style={styles.submitButton}
          >
            Resend Email
          </Button>
        </Container>
      </React.Fragment>
    )
  }

  renderUpdateSuccess = () => {
    return (
      <React.Fragment>
        <Text tag='h1' style={styles.formHeaderText}>Your password was updated successfully.</Text>
        <Text tag='h5' style={styles.formDetailsText}>Your password updated successfully. Login now to start using Bitcharge.</Text>
        <Container style={styles.buttonContainer}>
          <Button
            primary
            tag={Link}
            to='/login'
            style={styles.submitButton}
          >
            Login
          </Button>
        </Container>
      </React.Fragment>
    )
  }

  renderUpdateError = () => {
    return (
      <React.Fragment>
        <Text tag='h1' style={styles.formHeaderText}>Something went wrong.</Text>
        <Text tag='h5' style={styles.formDetailsText}>Something went wrong while updating your password. Please try again.</Text>
        <Container style={styles.buttonContainer}>
          <Button
            primary
            style={styles.submitButton}
            onClick={this.handleResubmit}
          >
            Try Again
          </Button>
          <Button tag={Link} to='/forgot' link style={styles.cancelButton}>Resend Email</Button>
        </Container>
      </React.Fragment>
    )
  }

  passwordForm = () => {
    return (
      <React.Fragment>
        <Text tag='h1' style={styles.formHeaderText}>Enter your new password</Text>
        <PasswordForm handleSubmit={this.handleSubmit} />
      </React.Fragment>
    )
  }

  renderBody = () => {
    if (this.state.noRecoveryToken) {
      return this.renderNoRecoveryToken()
    }
    if (this.state.isExpired) {
      return this.renderExpired()
    }

    if (this.state.isPasswordUpdated) {
      return this.renderUpdateSuccess()
    }

    if (this.state.isError) {
      return this.renderUpdateError()
    }

    return this.passwordForm()
  }

  render () {
    if (this.props.isAuthenticated) {
      return (<Redirect to='/profile' />)
    }

    return (
      <Container fluid style={styles.mainContainer}>
        <Helmet>
          <title>Reset Password - Bitcharge</title>
          <meta property='og:title' content={`Reset Password - Bitcharge`} />
          <meta property='og:url' content='https://bitcharge.co/password/reset' />
          <meta itemProp='name' content='Reset Password - Bitcharge' />
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
          {this.renderBody()}
        </Container>
      </Container>
    )
  }
}

ResetPassword.propTypes = {
  isAuthenticated: PropTypes.bool,
  location: PropTypes.any
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(ResetPassword)
