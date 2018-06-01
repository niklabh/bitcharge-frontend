import React, { Component } from 'react'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Input from '../../components/Input'

import styles from './styles'

class Signup extends Component {
  render () {
    return (
      <Container fluid fullHeight style={styles.mainContainer}>
        <Container fullHeight style={styles.heroContainer}>
          <Text tag='h2'>Let's get you set up.</Text>
        </Container>
        <Container fullHeight style={styles.bodyContainer}>
          <Input label='Username' />
          <Input label='Email' />
          <Input label='Password' />
          <Input label='Confirm Password' />
        </Container>
      </Container>
    )
  }
}

export default Signup
