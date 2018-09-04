import React, { Component } from 'react'
import { cx } from 'emotion'
import { Link } from 'react-router-dom'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/Button'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

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
              <img className={cx(styles.heroImage)} src='https://res.cloudinary.com/bitcharge/image/upload/v1536025920/assets/hero_image_2.png' />
            </Container>
          </Container>
          <Container style={styles.currenciesContainer}>
            <Container style={styles.currencyItemContainer}>
              <Text tag='h5' style={styles.currenciesSupportText}>Currently supports</Text>
            </Container>
            <Container style={styles.currencyItemContainer}>
              <img alt='adress-icon' src='https://res.cloudinary.com/bitcharge/image/upload/v1532990277/icons/bitcoin.png' className={cx(styles.addressIconImage)} />
              <Text tag='h6' style={styles.addressIconText}>Bitcoin</Text>
            </Container>
            <Container style={styles.currencyItemContainer}>
              <img alt='adress-icon' src='https://res.cloudinary.com/bitcharge/image/upload/v1532990278/icons/ethereum.png' className={cx(styles.addressIconImage)} />
              <Text tag='h6' style={styles.addressIconText}>Ethereum</Text>
            </Container>
            <Container style={styles.currencyItemContainer}>
              <img alt='adress-icon' src='https://res.cloudinary.com/bitcharge/image/upload/v1532990277/icons/litecoin.png' className={cx(styles.addressIconImage)} />
              <Text tag='h6' style={styles.addressIconText}>Litecoin</Text>
            </Container>
          </Container>
          <Container fluid style={styles.workContainer}>
            <Container style={styles.workHeaderContainer}>
              <Text tag='h1' style={styles.heroHeaderText}>
                How Bitcharge Works
              </Text>
            </Container>
            <Container style={styles.workDetailsContainer}>
              <Container style={styles.workDetailsItemContainer}>
                <Container style={styles.workItemImageContainer}>
                  <img className={cx(styles.workItemImage)} src='https://res.cloudinary.com/bitcharge/image/upload/v1536025918/assets/choose_username.png' />
                </Container>
                <Container style={styles.workItemTextContainer}>
                  <Text tag='h3' style={styles.workItemHeaderText}>
                    Pick a username
                  </Text>
                  <Container style={styles.workItemTextBorder} />
                  <Text tag='h5' style={styles.workItemSubHeaderText}>
                    Get started by picking up a username. Your username will be used to create your public profile. When you share your Bitcharge link, it uses your username as the unique identifier.
                  </Text>
                </Container>
              </Container>
              <Container style={styles.workDetailsItemContainer}>
                <Container style={styles.workItemImageContainer}>
                  <img className={cx(styles.workItemImage)} src='https://res.cloudinary.com/bitcharge/image/upload/v1536025920/assets/setup_profile.png' />
                </Container>
                <Container style={styles.workItemTextContainer}>
                  <Text tag='h3' style={styles.workItemHeaderText}>
                    Build your profile
                  </Text>
                  <Container style={styles.workItemTextBorder} />
                  <Text tag='h5' style={styles.workItemSubHeaderText}>
                    Bitcharge doesn't create new wallets, instead it just works with your existing crypto wallets. All you need to do add the address of your wallet where you want to recieve payments.
                  </Text>
                </Container>
              </Container>
              <Container style={styles.workDetailsItemContainer}>
                <Container style={styles.workItemImageContainer}>
                  <img className={cx(styles.workItemImage)} src='https://res.cloudinary.com/bitcharge/image/upload/v1536025920/assets/share_image.png' />
                </Container>
                <Container style={styles.workItemTextContainer}>
                  <Text tag='h3' style={styles.workItemHeaderText}>
                    Share your link
                  </Text>
                  <Container style={styles.workItemTextBorder} />
                  <Text tag='h5' style={styles.workItemSubHeaderText}>
                    Start using your Bitcharge.co link by sharing it instantly with anyone: friends, customers, or partners. And now you can start accepting crypto from anyone in an instant.
                  </Text>
                </Container>
              </Container>
            </Container>
          </Container>
          <Container style={styles.callActionContainer}>
            <Container style={styles.workHeaderContainer}>
              <Text tag='h2' style={styles.heroHeaderText}>
                Set up your unique Bitcharge.co link today.
              </Text>
            </Container>
            <Container style={styles.callActionButtonContainer}>
              <Button tag={Link} to='/signup' primary style={styles.getStartedButton}>Get Started <i className={`icon ion-md-arrow-round-forward ${styles.getStartedButtonIcon}`} /></Button>
            </Container>
          </Container>
        </Container>
        <Footer />
      </Container>
    )
  }
}

export default Home
