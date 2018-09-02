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

const SignupConfirmationError = ({ hostRef }) => {
  return (
    <Container hostRef={hostRef} style={styles.confirmationContainer}>
      <Text tag='h1' style={styles.confirmationHeaderText}>Something went wrong</Text>
      <Text tag='h5'>Something went wrong while trying to confirm your account. Please try again.</Text>
    </Container>
  )
}

const SignupConfirmed = ({ hostRef }) => {
  return (
    <Container hostRef={hostRef} style={styles.confirmationContainer}>
      <Text tag='h1' style={styles.confirmationHeaderText}>Woohoo! You're all set.</Text>
      <Text tag='h5'>Thank you for verifying your account. You can now start adding your addresses.</Text>
      <Container style={styles.buttonContainer}>
        <Button tag={Link} to='/address/new' primary style={styles.submitButton}>Add an Address</Button>
      </Container>
    </Container>
  )
}

const SignupConfirmationExpired = ({ hostRef }) => {
  return (
    <Container hostRef={hostRef} style={styles.confirmationContainer}>
      <Text tag='h1' style={styles.confirmationHeaderText}>Something went wrong</Text>
      <Text tag='h5'>Something went wrong while trying to confirm your account. Please try again.</Text>
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
      isError: false
    }
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
      if (error.response.status === 401) {
        this.setState({ isError: true })
      }
      if (error.response.status === 410) {
        this.setState({ isExpired: true })
      }
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
    return (
      <Container fluid style={styles.mainContainer}>
        <Container style={styles.heroContainer}>
          <Container style={styles.heroLogoContainer}>
            <a href='/'><img src={require('../../assets/images/logo-inverse.png')} /></a>
          </Container>
          <Container style={styles.heroTextContainer}>
            <img className={cx(styles.heroAvatarIconStyle)} src={require('../../assets/images/dog-icon.png')} />
            <Text tag='h3' style={styles.heroText}>You're in, lets set you up.</Text>
          </Container>
        </Container>
        <Container style={styles.bodyContainer}>
          <PoseSignupConfirming pose={this.state.isConfirming ? 'visible' : 'invisible'} />
          <PoseSignupConfirmed pose={this.state.isConfirmed ? 'visible' : 'invisible'} />
          <PoseSignupConfirmError pose={this.state.isError ? 'visible' : 'invisible'} />
          <PoseSignupConfirmExpired pose={this.state.isExpired ? 'visible' : 'invisible'} />
        </Container>
      </Container>
    )
  }
}

SignupConfirmed.propTypes = {
  hostRef: PropTypes.any
}

SignupConfirming.propTypes = {
  hostRef: PropTypes.any
}

SignupConfirmationError.propTypes = {
  hostRef: PropTypes.any
}

SignupConfirmationExpired.propTypes = {
  hostRef: PropTypes.any
}

SignupConfirmation.propTypes = {
  location: PropTypes.any,
  confirmEmailAction: PropTypes.func
}

export default connect(null, { confirmEmailAction })(SignupConfirmation)
