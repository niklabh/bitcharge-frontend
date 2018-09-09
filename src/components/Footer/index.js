import React from 'react'
import { Link } from 'react-router-dom'
import Media from 'react-media'

import Container from '../Container'
import Button from '../Button'
import Text from '../Text'

import styles from './styles'
import { breakpoints } from '../../styles'

const Footer = () => {
  return (
    <Container fluid style={styles.mainContainer}>
      <Container style={styles.logoContainer}>
        <Text tag='h6' style={styles.logoTextStyle} unstyled>Bitcharge © 2018</Text>
        <Media query={`(max-width: ${breakpoints.tablet})`}>
          {matches =>
            matches ? (
              <Container style={styles.rightNavContainer}>
                <Button href='https://twitter.com/bitcharge_co' target='_blank' link style={styles.logoutStyle}><i className={`icon ion-logo-twitter`} /></Button>
                <Button href='https://facebook.com/bittcharge' target='_blank' link style={styles.logoutStyle}><i className={`icon ion-logo-facebook`} /></Button>
              </Container>
            ) : (
              null
            )
          }
        </Media>
      </Container>
      <Container style={styles.centerNavContainer}>
        <Button tag={Link} to='/about' link style={styles.linkStyle}>About</Button>
        <Button tag={Link} to='/terms' link style={styles.linkStyle}>Terms</Button>
        <Button tag={Link} to='/privacy' link style={styles.linkStyle}>Privacy</Button>
        <Button href='https://medium.com/bitcharge' target='_blank' link style={styles.linkStyle}>Blog</Button>
      </Container>
      <Media query={`(max-width: ${breakpoints.tablet})`}>
        {matches =>
          !matches ? (
            <Container style={styles.rightNavContainer}>
              <Button href='https://twitter.com/bitcharge_co' target='_blank' link style={styles.logoutStyle}><i className={`icon ion-logo-twitter`} /></Button>
              <Button href='https://facebook.com/bittcharge' target='_blank' link style={styles.logoutStyle}><i className={`icon ion-logo-facebook`} /></Button>
            </Container>
          ) : (
            null
          )
        }
      </Media>
    </Container>
  )
}

export default Footer
