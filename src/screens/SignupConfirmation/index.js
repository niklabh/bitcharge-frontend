import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import posed from 'react-pose'
import { cx } from 'emotion'
import qs from 'qs'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/Button'

import { confirmEmail as confirmEmailAction } from '../../store/actions/auth'
import API from '../../api'

import styles from './styles'

const SignupConfirming = ({ hostRef }) => {
  return (
    <Container hostRef={hostRef} style={styles.confirmationContainer}>
      <Text tag='h1' style={styles.confirmationHeaderText}>We are confirming your email...</Text>
    </Container>
  )
}

const SignupConfirmationError = ({ hostRef, isAuthenticated, handleVerify, resentVerification }) => {
  return (
    <Container hostRef={hostRef} style={styles.confirmationContainer}>
      <Text tag='h1' style={styles.confirmationHeaderText}>Something went wrong</Text>
      <Text tag='h5'>Something went wrong while verifying your email. {isAuthenticated
        ? `Try resending the verification email`
        : `Login to resend the verification email.`}</Text>
      <Container style={styles.buttonContainer}>
        {isAuthenticated
          ? <Button tag={Link} to='/address/new' primary style={styles.submitButton}>Resend Verifcation</Button>
          : <Button tag={Link} to='/login' primary style={styles.submitButton}>Login Now</Button>
        }
        {isAuthenticated && <Button tag={Link} to='/profile' link style={styles.cancelButton}>Skip</Button>}
      </Container>
      {(resentVerification.action && resentVerification.success) && <Text tag='h5' style={styles.resentVerificationText}>Verification mail sent successfully.</Text> }
    </Container>
  )
}

const SignupConfirmed = ({ hostRef, isAuthenticated }) => {
  return (
    <Container hostRef={hostRef} style={styles.confirmationContainer}>
      <Text tag='h1' style={styles.confirmationHeaderText}>Woohoo! You're all set.</Text>
      <Text tag='h5' style={styles.confirmationInfoText}>Thank you for verifying your account. {isAuthenticated
        ? `You can now start adding your addresses.`
        : `You need to login to start adding your addresses.`}
      </Text>
      <Container style={styles.buttonContainer}>
        {isAuthenticated
          ? <Button tag={Link} to='/address/new' primary style={styles.submitButton}>Add an Address</Button>
          : <Button tag={Link} to='/login' primary style={styles.submitButton}>Login Now</Button>
        }
        {isAuthenticated && <Button tag={Link} to='/profile' link style={styles.cancelButton}>Skip</Button>}
      </Container>
    </Container>
  )
}

const SignupConfirmationExpired = ({ hostRef, isAuthenticated, handleVerify, resentVerification }) => {
  const { action, success, error } = resentVerification
  return (
    <Container hostRef={hostRef} style={styles.confirmationContainer}>
      <Text tag='h1' style={styles.confirmationHeaderText}>Something went wrong</Text>
      <Text tag='h5'>Your verification email is expired. {isAuthenticated
        ? `Try resending the verification email`
        : `Login to resend the verification email.`}</Text>
      <Container style={styles.buttonContainer}>
        {isAuthenticated
          ? <Button onClick={handleVerify} primary style={styles.submitButton} disabled={(action && !(success || error))}>Resend Verifcation</Button>
          : <Button tag={Link} to='/login' primary style={styles.submitButton}>Login Now</Button>
        }
      </Container>
      {(action && success) && <Text tag='h5' style={styles.resentVerificationText}>Verification mail sent successfully.</Text> }
    </Container>
  )
}

class SignupConfirmation extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isConfirmed: false,
      isConfirming: false,
      isExpired: false,
      isError: false,
      resentVerification: false,
      resentVerificationSuccess: false,
      resentVerificationError: false
    }

    this.resendVerificationMail = this.resendVerificationMail.bind(this)
  }

  async componentDidMount () {
    const query = qs.parse(this.props.location.search.split('?')[1])
    try {
      const response = await API.confirmEmail(query.confirmationCode)
      this.setState({ isConfirming: false })
      if (response) {
        this.setState({ isConfirmed: true })
        this.props.confirmEmailAction(true)
      }
    } catch (error) {
      this.setState({ isConfirming: false })
      if (error.response.status === 410) {
        this.setState({ isExpired: true })
      }
      this.setState({ isError: true })
    }
  }

  async resendVerificationMail () {
    try {
      await API.verifyEmail()
      this.setState({ resentVerification: true })
    } catch (e) {
      this.setState({ resentVerification: true, resentVerificationError: true })
    }
  }

  render () {
    const PoseSignupConfirming = posed(SignupConfirming)({
      visible: { opacity: 1 },
      invisible: { opacity: 0, display: 'none' }
    })

    const PoseSignupConfirmed = posed(SignupConfirmed)({
      visible: { opacity: 1 },
      invisible: { opacity: 0, display: 'none' }
    })

    const PoseSignupConfirmError = posed(SignupConfirmationError)({
      visible: { opacity: 1 },
      invisible: { opacity: 0, display: 'none' }
    })

    const PoseSignupConfirmExpired = posed(SignupConfirmationExpired)({
      visible: { opacity: 1 },
      invisible: { opacity: 0, display: 'none' }
    })

    const resentVerification = {
      action: true,
      success: this.state.resentVerificationSuccess,
      error: this.state.resentVerificationError
    }
    return (
      <Container fluid style={styles.mainContainer}>
        <Container style={styles.heroContainer}>
          <Container style={styles.heroLogoContainer}>
            <a href='/'><img alt='bitcharge-logo' className={cx(styles.logoImageStyle)} src='https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png' /></a>
          </Container>
          <Container style={styles.heroTextContainer}>
            <img className={cx(styles.heroAvatarIconStyle)} alt='signup-confirmation-avatar' src='https://res.cloudinary.com/bitcharge/image/upload/v1535940306/fox-avatar.png' />
            <Text tag='h3' style={styles.heroText}>You're almost there.</Text>
          </Container>
          { !this.props.isAuthenticated && (
            <Container style={styles.heroFooterContainer}>
              <Text tag='h6'>Already have an account. <Link to='/login' className={cx(styles.LoginLink)}>Login</Link></Text>
            </Container>
          )
          }
        </Container>
        <Container style={styles.bodyContainer}>
          <PoseSignupConfirming pose={this.state.isConfirming ? 'visible' : 'invisible'} />
          <PoseSignupConfirmed pose={this.state.isConfirmed ? 'visible' : 'invisible'} isAuthenticated={this.props.isAuthenticated} />
          <PoseSignupConfirmError pose={this.state.isError ? 'visible' : 'invisible'} isAuthenticated={this.props.isAuthenticated} handleVerify={this.resendVerificationMail} resentVerification={resentVerification} />
          <PoseSignupConfirmExpired pose={this.state.isExpired ? 'visible' : 'invisible'} isAuthenticated={this.props.isAuthenticated} handleVerify={this.resendVerificationMail} resentVerification={resentVerification} />
        </Container>
      </Container>
    )
  }
}

SignupConfirmed.propTypes = {
  hostRef: PropTypes.any,
  isAuthenticated: PropTypes.bool
}

SignupConfirming.propTypes = {
  hostRef: PropTypes.any
}

SignupConfirmationError.propTypes = {
  hostRef: PropTypes.any,
  isAuthenticated: PropTypes.bool,
  handleVerify: PropTypes.func,
  resentVerification: PropTypes.func
}

SignupConfirmationExpired.propTypes = {
  hostRef: PropTypes.any,
  isAuthenticated: PropTypes.bool,
  handleVerify: PropTypes.func,
  resentVerification: PropTypes.func
}

SignupConfirmation.propTypes = {
  location: PropTypes.any,
  confirmEmailAction: PropTypes.func,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { confirmEmailAction })(SignupConfirmation)
