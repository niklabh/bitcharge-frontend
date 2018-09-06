import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Container from '../../../components/Container'
import Text from '../../../components/Text'
import Button from '../../../components/Button'

import styles from './styles'

const AddAddressSuccess = ({ hostRef, onAddNewAddress }) => {
  return (
    <Container hostRef={hostRef} style={styles.successContainer}>
      <Text tag='h1' style={styles.successHeaderText}>Address added successfully.</Text>
      <Text tag='h5'>Your address was added successfully, would you like to add another address. You can access all you addresses in your dashboard too.</Text>
      <Container style={styles.buttonContainer}>
        <Button onClick={onAddNewAddress} primary style={styles.submitButton}>Add Address</Button>
        <Button tag={Link} to='/profile' link style={styles.cancelButton}>Skip</Button>
      </Container>
    </Container>
  )
}

AddAddressSuccess.propTypes = {
  hostRef: PropTypes.any,
  onAddNewAddress: PropTypes.func
}

export default AddAddressSuccess
