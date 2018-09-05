import React, { Component } from 'react'
import { cx } from 'emotion'
import { Link } from 'react-router-dom'
import Media from 'react-media'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import { ScrollToTopOnMount } from '../../components/Scroll'

import styles from './styles'
import { breakpoints } from '../../styles'

class Privacy extends Component {
  render () {
    return (
      <Container fluid fullHeight style={styles.mainContainer}>
        <ScrollToTopOnMount />
        <Navbar />
        <Container fluid style={styles.bodyContainer}>
          <Container fluid style={styles.headerContainer}>
            <Text tag='h1' style={styles.headerTextStyle}>Privacy Policy</Text>
            <Media query={`(max-width: ${breakpoints.tablet})`}>
              {matches => matches ? <Container style={styles.workItemTextBorder} /> : null}
            </Media>
          </Container>
          <Container style={styles.detailsContainer}>
            <Container style={styles.sectionContainer}>
              <Text style={styles.bodyText}>
                Bitcharge is a platform for people and businesses to accept support from their audience and share exclusive content. At Bitcharge, your privacy is important to us, and we want you to feel confident that your personal information is secure when using our products and our platform.
                <br /><br />The services are provided by Droidsize Inc. (parent company and hereinafter referred to as “Bitcharge”). It is Bitcharge’s policy to respect your privacy regarding any information we may collect while operating our website.
              </Text>
              <Text tag='h4' style={styles.sectionHeader}>
                Website Visitors
              </Text>
              <Text style={styles.bodyText}>
                Like most website operators, Bitcharge collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Bitcharge's purpose in collecting non-personally identifying information is to better understand how Bitcharge's visitors use its website. From time to time, Bitcharge may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website. Bitcharge also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users on <Link to='/' className={`${cx(styles.linkText)}`}>Bitcharge.com</Link>.
              </Text>
            </Container>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                Gathering of Personally-Identifying Information
              </Text>
              <Text style={styles.bodyText}>
                Certain visitors to Bitcharge's websites choose to interact with Bitcharge in ways that require Bitcharge to gather personally-identifying information. The amount and type of information that Bitcharge gathers depends on the nature of the interaction. For example, we ask visitors who sign up at <Link to='/' className={`${cx(styles.linkText)}`}>Bitcharge.com</Link> to provide a username and email address. In each case, Bitcharge collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor's interaction with Bitcharge. Bitcharge does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.
              </Text>
            </Container>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                Aggregated Statistics
              </Text>
              <Text style={styles.bodyText}>
                Bitcharge may collect statistics about the behavior of visitors to its websites. Bitcharge may display this information publicly or provide it to others. However, Bitcharge does not disclose personally-identifying information other than as described below.
              </Text>
            </Container>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                Protection of Certain Personally-Identifying Information
              </Text>
              <Text style={styles.bodyText}>
                Bitcharge discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on Bitcharge's behalf or to provide services available at Bitcharge's websites, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using Bitcharge's websites, you consent to the transfer of such information to them. Bitcharge will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, Bitcharge discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when Bitcharge believes in good faith that disclosure is reasonably necessary to protect the property or rights of Bitcharge, third parties or the public at large. If you are a registered user of an Bitcharge website and have supplied your email address, Bitcharge may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what's going on with Bitcharge and our products. If you send us a request (for example via email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. Bitcharge takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.
              </Text>
            </Container>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                Cookies
              </Text>
              <Text style={styles.bodyText}>
                A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. For more information, visit <a className={`${cx(styles.linkText)}`} href='http://www.allaboutcookies.org/'>All About Cookies</a>.
                <br /><br />Bitcharge uses cookies to help Bitcharge identify and track visitors, their usage of Bitcharge website, and their website access preferences. Some cookies expire after a certain amount of time, or upon logging out (session cookies), others remain on your computer or terminal device for a longer period (persistent cookies). Our Site uses first party cookies (cookies set directly by Anchor) as well as third party cookies, as described below
                <br /><br />Strictly Necessary Cookies: Used to provide Users with the Services available through our Site and to use some of their features, such as the ability to log-in and access to secure areas. These cookies are served by Anchor and are essential for using and navigating the Site. Without these cookies, basic functions of our Site would not work. Because these cookies are strictly necessary to deliver the Site and the Services, you cannot refuse them.
                <br /><br />Analytics/Performance: Used to better understand the behavior of the Users on our Site and improve our Site accordingly, for example by making sure Users are finding what they need easily. The Site uses Google Analytics, a web analytics service provided by Google Inc. (“Google”). The information collected by Google (including your IP address) will be transmitted to and stored by Google on servers in the United States (Google is certified to the Privacy Shield for data transfers). How long a Google Analytics cookie remains on your computer or device depends on what it is and what it is used for. Some Google Analytics cookies expire at the end of your browser session, whilst others can remain for up to two years. You can prevent your data from being collected by Google Analytics on our Site by downloading and installing the <a className={`${cx(styles.linkText)}`} href='https://tools.google.com/dlpage/gaoptout?hl=en'>Google Analytics Opt-out Browser Add-on</a> for your current web browser. For more information on Google Analytics privacy practices, read here.
                <br /><br />Bitcharge visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Bitcharge's websites, with the drawback that certain features of Bitcharge's websites may not function properly without the aid of cookies.
              </Text>
            </Container>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                International Users
              </Text>
              <Text style={styles.bodyText}>
                Bitcharge is based in India and the some of its servers are based in the United States. If you are accessing our Services from the European Union or other regions with laws governing data collection and use, please note that your Personal Data will be transmitted to our servers in India and the United States and the data may be transmitted to our service providers supporting our business operations (described above). India and United States may have data protection laws less stringent than or otherwise different from the laws in effect in the country in which you are located. Where we transfer your Personal Data out of the EU we will take steps to ensure that your Personal Data receives an adequate level of protection where it is processed and your rights continue to be protected (GDPR).
                <br /><br />By providing your information to the Services you agree to the transfer of your information to India and the United States and processing globally in accordance with this Privacy Policy.
              </Text>
            </Container>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                Privacy Policy Changes
              </Text>
              <Text style={styles.bodyText}>
                Although most changes are likely to be minor, Bitcharge may change its Privacy Policy from time to time, and in Bitcharge's sole discretion. Bitcharge encourages visitors to frequently check this page for any changes to its Privacy Policy. If you have a <Link to='/' className={`${cx(styles.linkText)}`}>Bitcharge.com</Link> account, you might also receive an alert informing you of these changes. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.
              </Text>
            </Container>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                Other Terms and Conditions
              </Text>
              <Text style={styles.bodyText}>
                Your access to and use of the Bitcharge is subject to any additional terms applicable to such Services that may be posted on the Terms from time to time, including without limitation, Bitcharge’s Terms of Use available at <Link to='/terms' className={`${cx(styles.linkText)}`}>https://www.bitcharge.co/terms</Link>.
              </Text>
            </Container>
            <Container style={styles.sectionContainer}>
              <Text tag='h4' style={styles.sectionHeader}>
                Contact Us
              </Text>
              <Text style={styles.bodyText}>
                Please feel free to contact us if you have any questions about Bitcharge’s Privacy Policy or the information practices. You may contact us by sending an email to <a className={`${cx(styles.linkText)}`} href='mailto:support@bitcharge.co'>support@bitcharge.co</a>
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
