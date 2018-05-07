import React, { Component } from 'react'
import { cx } from 'emotion'

import Container from '../components/Container'
import Text from '../components/Text'
import Navbar from '../components/Navbar'

import styles from './styles'

class Root extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dropdownToggle: false
    }

    this.onDropdownPress = this.onDropdownPress.bind(this)
  }

  onDropdownPress () {
    console.log(this.state)
    this.setState({ dropdownToggle: !this.state.dropdownToggle })
  }

  render () {
    return (
      <Container fluid fullHeight style={styles.mainContainer}>
        <Navbar />
        <Container fluid style={styles.bodyContainer}>
          <Container style={styles.cardContainer}>
            <Container style={styles.cardHeaderContainer}>
              <Container style={styles.avatarContainer}>
                <img className={cx(styles.avatarIconStyle)} src={require('../assets/images/Panda-icon.png')} />
              </Container>
              <Container style={styles.headerTextContainer}>
                <Text tag='h5' unstyled style={styles.headerTextStyle}>Awesome Panda</Text>
                <Text tag='h6' unstyled style={styles.headerTextStyle}>You know me.</Text>
              </Container>
            </Container>
            <Container style={styles.cardBodyContainer}>
              <Container fluid onClick={this.onDropdownPress} style={cx(styles.coinDropdownContainer, {[styles.dropdownContainerActive]: this.state.dropdownToggle})}>
                <Text tag='h5' unstyled>Choose currency</Text>
                <ul className={cx(styles.coinDropdown, {[styles.dropdownActive]: this.state.dropdownToggle})}>
                  <li className={cx(styles.dropdownItem)}><Text tag='h5' unstyled>Bitcoin</Text></li>
                  <li className={cx(styles.dropdownItem)}><Text tag='h5' unstyled>Ethereum</Text></li>
                  <li className={cx(styles.dropdownItem)}><Text tag='h5' unstyled>Litecoin</Text></li>
                </ul>
              </Container>
              <Container fluid style={styles.bodyDataContainer}>
                <Container style={styles.addressContainer}>
                  <Text tag='h5' style={styles.addressHeaderStyle}>Wallet Address</Text>
                  <Text tag='h6'>0x26f28f5E9fCe0E2a04346e801BC0EF6Df8C13e6d</Text>
                </Container>
                <Container style={styles.qrcodeContainer}>
                  <img src='https://raw.githubusercontent.com/zpao/qrcode.react/HEAD/qrcode.png' className={cx(styles.qrcodeImage)} />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    )
  }
}

export default Root
