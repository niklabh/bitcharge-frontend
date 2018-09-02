import React, { Component } from 'react'
import { cx } from 'emotion'
import posed from 'react-pose'

import Container from '../../components/Container'
import Text from '../../components/Text'
import AddressForm from './AddressForm'
import AddAddressSuccess from './AddAddressSuccess'

import API from '../../api'

import styles from './styles'

class AddAddress extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isAddAddressSuccess: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onAddNewAddress = this.onAddNewAddress.bind(this)
  }

  async handleSubmit (values, bag) {
    const addressDetails = {
      currency: values.currency.symbol,
      address: values.address
    }
    try {
      const data = await API.addAddress(addressDetails)
      bag.setSubmitting(false)
      this.setState({ isAddAddressSuccess: true })
    } catch (e) {
      console.log(e)
      bag.setSubmitting(false)
    }
  }

  onAddNewAddress () {
    this.setState({ isAddAddressSuccess: false })
  }

  render () {
    const PoseAddressForm = posed(AddressForm)({
      visible: { opacity: 1 },
      invisible: { opacity: 0, display: 'none' }
    })

    const PoseAddAddressSuccess = posed(AddAddressSuccess)({
      visible: { opacity: 1 },
      invisible: { opacity: 0, display: 'none' }
    })

    return (
      <Container fluid style={styles.mainContainer}>
        <Container style={styles.heroContainer}>
          <Container style={styles.heroLogoContainer}>
            <a href='/'><img className={cx(styles.logoImageStyle)} src='https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png' /></a>
          </Container>
          <Container style={styles.heroTextContainer}>
            <img className={cx(styles.addressAvatarIconStyle)} src={require('../../assets/images/dog-icon.png')} />
            <Text tag='h3' style={styles.heroText}>Add your addresses</Text>
          </Container>
        </Container>
        <Container style={styles.bodyContainer}>
          <PoseAddressForm pose={this.state.isAddAddressSuccess ? 'invisible' : 'visible'} onSubmit={this.handleSubmit} />
          <PoseAddAddressSuccess pose={this.state.isAddAddressSuccess ? 'visible' : 'invisible'} onAddNewAddress={this.onAddNewAddress} />
        </Container>
      </Container>
    )
  }
}

export default AddAddress
