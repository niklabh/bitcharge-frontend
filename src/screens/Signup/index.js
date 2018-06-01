import React, { Component } from 'react'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Input from '../../components/Input'
import Button from '../../components/Button'

import styles from './styles'

class Signup extends Component {
  render () {
    return (
      <Container fluid fullHeight style={styles.mainContainer}>
        <Container fullHeight style={styles.heroContainer}>
          <Text tag='h2'>Let's get you set up.</Text>
        </Container>
        <Container fullHeight style={styles.bodyContainer}>
          <Container style={styles.formContainer}>
            <Input label='Username' error='Invalid username' />
            <Input label='Email' error='Invalid email' />
            <Input label='Password' />
            <Input label='Confirm Password' />
            <Button primary disabled type='submit' style={styles.submitButton}>Submit <i className={`icon ion-md-arrow-round-forward ${styles.submitButtonIcon}`} /></Button>
          </Container>
        </Container>
      </Container>
    )
  }
}

export default Signup
