import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { cx } from 'emotion'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Spinner from '../../components/Spinner'
import Button from '../../components/Button'

import { colors } from '../../styles'
import styles from './styles'

const AddressItem = ({ address }) => {
  return (
    <Container style={styles.addressItemContainer}>
      <Container style={styles.addressIconContainer}>
        <img src={address.currency.icon} className={cx(styles.addressIconImage)} />
        <Text tag='h5' style={styles.addressIconText}>{address.currency.name}</Text>
      </Container>
      <Container style={styles.addressTextContainer}>
        <Text tag='h6' unstyled>{address.address}</Text>
        <Container style={styles.optionsContainer}>
          <Button onClick={this.addNewAddress} style={styles.addressActionButton} link>Copy</Button>
          <Button onClick={this.addNewAddress} style={styles.addressActionButton} link>Edit</Button>
          <Button onClick={this.addNewAddress} style={styles.addressActionButton} link>Delete</Button>
        </Container>
      </Container>
    </Container>
  )
}

class Addresses extends Component {
  addNewAddress = () => {
    console.log('onClick')
  }
  _renderUserAddresses = (addresses) => {
    const addressList = Object.keys(addresses).map(address => addresses[address])
    return (
      <Container style={styles.addressesContainer}>
        <Container style={styles.addressesHeaderContainer}>
          <Text tag='h4' style={styles.addressesHeaderTextStyle}>My Addresses</Text>
          <Button onClick={this.addNewAddress} style={styles.addNewAddressButton} link>Add new</Button>
        </Container>
        <Container style={styles.addressesListContainer}>
          {addressList.length && addressList.map(address => (<AddressItem address={address} />))}
        </Container>
      </Container>
    )
  }

  _renderLoading = () => {
    return (
      <Container style={styles.loadingContainer}>
        <Spinner size={50} width={7} color={colors.lightText} />
      </Container>
    )
  }

  _renderError = () => {
    return (
      <Container style={styles.loadingContainer}>
        <Text tag='h3'>Something went wrong. Try reloading the page</Text>
      </Container>
    )
  }

  _renderEmpty = () => {
    return (
      <Container style={styles.loadingContainer}>
        <Text tag='h3'>You haven't added any addresses.</Text>
      </Container>
    )
  }

  _renderCurrentState = () => {
    const { isLoading, error, addresses } = this.props
    console.log(isLoading, error, addresses)
    if (isLoading) {
      return this._renderLoading()
    }
    if (error) {
      return this._renderError()
    }

    if (!Object.keys(addresses)) {
      return this._renderEmpty()
    }

    return this._renderUserAddresses(this.props.addresses)
  }

  render () {
    return (
      <Container fluid style={styles.mainContainer}>
        <Container style={styles.cardContainer}>
          {this._renderCurrentState()}
        </Container>
      </Container>
    )
  }
}

Addresses.propTypes = {
  addresses: PropTypes.object
}

const mapStateToProps = (state) => ({
  addresses: state.addresses.addressList,
  isLoading: state.addresses.isLoading,
  error: state.addresses.isError
})

export default connect(mapStateToProps)(Addresses)
