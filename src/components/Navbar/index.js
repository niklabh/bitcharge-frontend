import React from 'react'

import Container from '../Container'
import Text from '../Text'

import styles from './styles'

const Navbar = () => {
  return (
    <Container fluid content style={styles.mainContainer}>
      <Container>
        <a href='/'><img src={require('../../assets/images/Logo.png')} /></a>
      </Container>
      <Container>
        <Text tag='h6' unstyled>My Bitcharge</Text>
      </Container>
    </Container>
  )
}

export default Navbar
