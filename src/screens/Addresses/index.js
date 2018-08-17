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
    return (
      <Container style={styles.addressesContainer}>
        <Container style={styles.addressesHeaderContainer}>
          <Text tag='h4' style={styles.addressesHeaderTextStyle}>My Addresses</Text>
          <Button onClick={this.addNewAddress} style={styles.addNewAddressButton} link>Add new</Button>
        </Container>
        <Container style={styles.addressesListContainer}>
          {addresses.length && addresses.map(address => (<AddressItem address={address} />))}
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

  render () {
    return (
      <Container fluid style={styles.mainContainer}>
        <Container style={styles.cardContainer}>
          {this.props.addresses ? this._renderUserAddresses(this.props.addresses) : this._renderLoading()}
        </Container>
      </Container>
    )
  }
}

Addresses.propTypes = {
  addresses: PropTypes.array
}

const mapStateToProps = (state) => ({
  addresses: state.auth.user && state.auth.user.addresses ? state.auth.user.addresses : null
})

export default connect(mapStateToProps)(Addresses)
