import React, { Component } from 'react'
import { cx } from 'emotion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Media from 'react-media'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import { ScrollToTopOnMount } from '../../components/Scroll'

import styles from './styles'
import { breakpoints } from '../../styles'

class About extends Component {
  render () {
    return (
      <Container fluid fullHeight style={styles.mainContainer}>
        <Helmet>
          <title>About - Bitcharge</title>
          <meta property='og:title' content={`About - Bitcharge`} />
          <meta property='og:url' content='https://bitcharge.co/about' />
          <meta itemProp='name' content='About - Bitcharge' />
        </Helmet>
        <ScrollToTopOnMount />
        <Navbar />
        <Container fluid style={styles.bodyContainer}>
          <Container fluid style={styles.headerContainer}>
            <Text tag='h1' style={styles.headerTextStyle}>About Bitcharge</Text>
            <Media query={`(max-width: ${breakpoints.tablet})`}>
              {matches => matches ? <Container style={styles.workItemTextBorder} /> : null}
            </Media>
          </Container>
          <Container style={styles.detailsContainer}>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                What is Bitcharge ?
              </Text>
              <Text style={styles.bodyText}>
                Bitcharge is a platform for freelancers, businesses and just regular people to accept payments and donations in their favourite cryptocurrency. You can get started by signing up on <Link to='/' className={`${cx(styles.linkText)}`}>Bitcharge.com</Link> with a username and creating a profile.
              </Text>
            </Container>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                How does it work ?
              </Text>
              <Text style={styles.bodyText}>
                When you signup with Bitcharge, you get a public link that you can share with the world. You can add multiple currencies to your profile and never worry about forgetting or finding your addresses. You can edit your addresses anytime, making sure people from whom you would like to receive a payment always have your active crypto address.
              </Text>
            </Container>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                I don't see my favourite cryptocurrency ?
              </Text>
              <Text style={styles.bodyText}>
                We are really sorry about that. We are working hard to get every cryptocurrency on our platform. If you want us to add a particular cryptocurrency, send us an email at <a className={`${cx(styles.linkText)}`} href='mailto:support@bitcharge.co'>support@bitcharge.co</a> and we would be more than happy to include it in our list.
              </Text>
            </Container>
          </Container>
        </Container>
        <Footer />
      </Container>
    )
  }
}

export default About
