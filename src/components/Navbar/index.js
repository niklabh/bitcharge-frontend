import React from 'react'
import { cx } from 'emotion'
import { Link } from 'react-router-dom'

import Container from '../Container'
import Button from '../Button'

import styles from './styles'

const Navbar = () => {
  return (
    <Container fluid style={styles.mainContainer}>
      <Container>
        <a href='/'><img alt='bitcharge-logo' className={cx(styles.logoImageStyle)} src='https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-secondary.png' /></a>
      </Container>
      <Container>
        <Button tag={Link} link to='/profile' style={styles.profileTextStyle}>My Bitcharge</Button>
      </Container>
    </Container>
  )
}

export default Navbar
