import React from 'react'

import Container from '../Container'
import Text from '../Text'

import styles from './styles'

const Navbar = () => {
  return (
    <Container fluid content style={styles.mainContainer}>
      <Container>
        <Text tag='h5' style={styles.logoTextStyle} unstyled>Bitcharge</Text>
      </Container>
      <Container>
        <Text tag='h5' unstyled>My Bitcharge</Text>
      </Container>
    </Container>
  )
}

export default Navbar
