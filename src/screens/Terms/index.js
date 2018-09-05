import React, { Component } from 'react'
import { cx } from 'emotion'
import { Link } from 'react-router-dom'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { ScrollToTopOnMount } from '../../components/Scroll'

import styles from './styles'

class Privacy extends Component {
  render () {
    return (
      <Container fluid fullHeight style={styles.mainContainer}>
        <ScrollToTopOnMount />
        <Navbar />
        <Container fluid style={styles.bodyContainer}>
          <Container fluid style={styles.headerContainer}>
            <Text tag='h1' style={styles.headerTextStyle}>Terms of Use</Text>
          </Container>
          <Container style={styles.detailsContainer}>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                Welcome to Bitcharge!
              </Text>
              <Text style={styles.bodyText}>
                By using Bitcharge, you are allowing to be bound by our website’s Terms and Conditions, all relevant laws and regulations, and you are liable to agree with any applicable local laws. These are Bitcharge’s terms of use and apply to all users of this website and mobile applications.
                <br /><br />‘We’, ‘our’ or ‘us’ refers to Bitcharge. You will be forbidden from using this site if you do not agree with any of these terms. Copyright and trademark law protects all materials used on this website.
                <br /><br />You also agree to our <Link to='/' className={`${cx(styles.linkText)}`}>privacy policy</Link>. We are not accountable for the quality, timing or legitimacy of content. We may make changes to these terms: if these changes are substantial and affect your privileges unfavourably, we will let you know by announcing the details on the site or via email before the changes come into effect.
                <br /><br />If you continue to use Bitcharge after any modifications to the terms, it will indicate that you have accepted the revised terms.
              </Text>
            </Container>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                Use License
              </Text>
              <Text style={styles.bodyText}>
                You are liable for all the activity on your profile. We can terminate your account if we find any breach in terms.
                <br /><br />You should not break any law or prompt others to break the law.
                <br />We reserve the right to force forfeiture of any username under circumstances that we deem necessary.
                <br />Do not vex or bully others, or support violence or hatred towards others.
                <br />Do not share others’ personal information or differently abuse it. Users with access to their Bitcharge personal information should not use it for anything irrelevant to Bitcharge.
                <br />Do not post messages that are false or differently misleading.
                <br />Do not generate an account to stop others from using the name or to trade the name.
                <br />Do not modify or copy the materials on this website. You can only utilise the materials for any commercial purpose, or for any public display.
                <br />Do not attempt to decompile or modify engineer any software included on Bitcharge site.
                <br />You are not supposed to spam others and cannot use Bitcharge to host or distribute, malicious or destructive software.
                <br />Do not use the public details of a user or a business found on Bitcharge for anything illegal or malicious.
                <br />This license will automatically terminate if you infringe any of these restrictions and may be terminated by Bitcharge at any time.
              </Text>
            </Container>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                Indemnity
              </Text>
              <Text style={styles.bodyText}>
                You have to reimburse us for all damages and liabilities, including legal fees, which may result from these terms or relate to your use of Bitcharge. We maintain the right to exclusive control over the defense of a claim included in this clause. If we exercise this right, then you have to assist us in our defense. Your responsibility to indemnify under this clause also refers to our affiliates, officers, directors, agents, employees, and third-party service providers.
              </Text>
            </Container>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                Disclaimer
              </Text>
              <Text style={styles.bodyText}>
                Bitcharge is presented “as is” and without warranty of any sort. Any warranty of merchantability, fitness for a specific purpose, non-infringement, and any other warranty is eliminated to the greatest extent as authorised by law. Besides, Bitcharge does not warrant or present any representations concerning the correctness, possible results, or authenticity of the use of the elements on its Internet web site or otherwise compared to such materials or on any sites associated with this site.
                <br /><br />Bitcharge does not take responsibility for the accuracy or precision of user-generated content. Bitcharge does not directly or indirectly endorse or support any word or claim made by any of its users.
              </Text>
            </Container>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                Limitations
              </Text>
              <Text style={styles.bodyText}>
                Bitcharge is not accountable to you for any concomitant, consequential or vindictive damages resulting out of these terms, or attempted use or your use of Bitcharge. We will not be responsible for any damages arising out of the inability to use the materials on Bitcharge's site even if Bitcharge representative has been informed orally or in writing of the occurrence of such damage. For this clause “we” and “our” is established to include our members, officers, agents, directors, employees, and third-party service providers.
              </Text>
            </Container>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                Revisions and Errata
              </Text>
              <Text style={styles.bodyText}>
                Bitcharge website may contain elements which comprise of technical, typographical, or sometimes photographic errors. We do not guarantee that any of the contents on our site are genuine, comprehensive, or contemporary.
                <br /><br />Bitcharge can make changes to the materials received on its website at any time without notification. However, we do not make any commitment to refresh the contents.
              </Text>
            </Container>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                Links
              </Text>
              <Text style={styles.bodyText}>
                Bitcharge has not studied all of the sites associated with its Internet web site and is not liable for the elements of any such linked site. The addition of any link does not indicate approval by Bitcharge site. Handling of any such linked web site is at the user's own risk.
              </Text>
            </Container>
          </Container>
        </Container>
        <Footer />
      </Container>
    )
  }
}

export default Privacy
