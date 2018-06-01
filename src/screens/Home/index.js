import React, { Component } from 'react'
import { cx } from 'emotion'
import { Link } from 'react-router-dom'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/Button'
import Navbar from '../../components/Navbar'

import styles from './styles'

class Home extends Component {
  render () {
    return (
      <Container fluid fullHeight>
        <Navbar />
        <Container fluid style={styles.bodyContainer}>
          <Container fluid style={styles.heroContainer}>
            <Container style={styles.heroTextContainer}>
              <Text tag='h1' style={styles.heroHeaderText}>
                The easiest way to accept crypto payments.
              </Text>
              <Text tag='h5' style={styles.heroSubHeaderText}>
                Pick a username, create a link and get paid in your favorite cryptocurrency. It can't get any easier than that.
              </Text>
              <Button tag={Link} to='/signup' primary style={styles.getStartedButton}>Get Started <i className={`icon ion-md-arrow-round-forward ${styles.getStartedButtonIcon}`} /></Button>
            </Container>
            <Container style={styles.heroImageContainer}>
              <img className={cx(styles.heroImage)} src='http://brucira.com/images/banner-image2x.png' />
            </Container>
          </Container>
        </Container>
      </Container>
    )
  }
}

export default Home
