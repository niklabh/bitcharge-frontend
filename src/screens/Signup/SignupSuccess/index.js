import React from 'react'
import PropTypes from 'prop-types'

import Container from '../../../components/Container'
import Text from '../../../components/Text'

import styles from './styles'

const SignupSuccess = ({ hostRef }) => {
  return (
    <Container hostRef={hostRef} style={styles.successContainer}>
      <Text tag='h1' style={styles.successHeaderText}>Thank you for signing up.</Text>
      <Text tag='h5'>We've sent you a verification link on your email. Please click verify in the email to continue.</Text>
    </Container>
  )
}

SignupSuccess.propTypes = {
  hostRef: PropTypes.any
}

export default SignupSuccess
