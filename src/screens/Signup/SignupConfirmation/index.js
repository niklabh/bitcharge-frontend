import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import posed from 'react-pose'

import Container from '../../../components/Container'
import Text from '../../../components/Text'
import Button from '../../../components/Button'

import API from '../../../api'

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
        <Button tag={Link} to='/forgot' primary style={styles.submitButton}>Add an Address</Button>
      </Container>
    </Container>
  )
}

class SignupConfirmation extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isConfirmed: true,
      isConfirming: false,
      isError: false
    }
  }

  async componentDidMount () {
    try {
      const data = await API.confirmEmail(this.props.confirmationCode)
      this.setState({ isConfirming: false, isConfirmed: true })
    } catch (error) {
      if (error.response.status === 401) {
        this.setState({ isConfirming: false, isError: true })
      }
    }
  }

  render () {
    const PoseSignupConfirming = posed(SignupConfirming)({
      visible: { opacity: 1 },
      invisible: { opacity: 0, height: '0%' }
    })

    const PoseSignupConfirmed = posed(SignupConfirmed)({
      visible: { opacity: 1 },
      invisible: { opacity: 0, height: '0%' }
    })

    const PoseSignupConfirmError = posed(SignupConfirmationError)({
      visible: { opacity: 1 },
      invisible: { opacity: 0, height: '0%' }
    })
    return (
      <React.Fragment>
        <PoseSignupConfirming pose={this.state.isConfirming ? 'visible' : 'invisible'} />
        <PoseSignupConfirmed pose={!this.state.isConfirming && this.state.isConfirmed ? 'visible' : 'invisible'} />
        <PoseSignupConfirmError pose={!this.state.isConfirming && this.state.isError ? 'visible' : 'invisible'} />
      </React.Fragment>
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

SignupConfirmation.propTypes = {
  confirmationCode: PropTypes.string
}

export default SignupConfirmation
