import React from 'react'

import Container from '../Container'
import Text from '../Text'

import styles from './styles'

const Navbar = () => {
  return (
    <Container fluid content style={styles.mainContainer}>
      <Container>
        <Text tag='h6' style={styles.logoTextStyle}>Bitcharge</Text>
      </Container>
      <Container>
        <Text tag='h6'>My Bitcharge</Text>
      </Container>
    </Container>
  )
}

export default Navbar
