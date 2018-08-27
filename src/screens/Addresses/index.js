import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AddressItem from './AddressItem'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Spinner from '../../components/Spinner'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import AddAddressForm from '../AddAddress/AddressForm'

import API from '../../api'
import { addAddress, updateAddress, deleteAddress } from '../../store/actions/address'

import { colors } from '../../styles'
import styles from './styles'

class Addresses extends Component {
  constructor (props) {
    super(props)

    this.handleAddressSubmit = this.handleAddressSubmit.bind(this)
  }
  state = {
    addNewAddressModal: false,
    isAddAddressSuccess: false
  }

  openAddNewAddressModal = () => {
    this.setState({ addNewAddressModal: true })
  }

  closeAddNewAddressModal = () => {
    this.setState({ addNewAddressModal: false })
  }

  async handleAddressSubmit (values, bag) {
    const addressDetails = {
      currency: values.currency.symbol,
      address: values.address
    }
    try {
      const data = await API.addAddress(addressDetails)
      bag.setSubmitting(false)
      this.setState({ isAddAddressSuccess: true })
      this.props.addAddress(data.address)
      this.closeAddNewAddressModal()
    } catch (e) {
      console.log(e)
      bag.setSubmitting(false)
    }
  }

  _renderUserAddresses = (addresses) => {
    const addressList = Object.keys(addresses).map(address => addresses[address])
    return (
      <Container style={styles.addressesContainer}>
        <Container style={styles.addressesHeaderContainer}>
          <Text tag='h4' style={styles.addressesHeaderTextStyle}>My Addresses</Text>
          <Button onClick={this.openAddNewAddressModal} style={styles.addNewAddressButton} link>Add new</Button>
          {this._renderAddAddressModal()}
        </Container>
        <Container style={styles.addressesListContainer}>
          {addressList.length && addressList.map(address => (<AddressItem key={address.address} address={address} deleteAddress={this.props.deleteAddress} />))}
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

  _renderAddAddressModal = () => {
    return (
      <Modal label='Add New Address' style={styles.addAddressModalStyle} isOpen={this.state.addNewAddressModal} handleClose={this.closeAddNewAddressModal}>
        <Text tag='h4' style={styles.addAddressModalHeaderStyle}>Add a new address</Text>
        <AddAddressForm onSubmit={this.handleAddressSubmit} onCancel={this.closeAddNewAddressModal} />
      </Modal>
    )
  }

  _renderEmpty = () => {
    return (
      <Container style={styles.loadingContainer}>
        <Text tag='h3'>You haven't added any addresses.</Text>
        <Button primary style={styles.addNewEmptyButton} onClick={this.openAddNewAddressModal}>Add New Address</Button>
        {this._renderAddAddressModal()}
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

    if (!Object.keys(addresses) || Object.keys(addresses).length === 0) {
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
  addresses: PropTypes.object,
  deleteAddress: PropTypes.func,
  addAddress: PropTypes.func,
  updateAddress: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.bool
}

const mapStateToProps = (state) => ({
  addresses: state.addresses.addressList,
  isLoading: state.addresses.isLoading,
  error: state.addresses.isError
})

export default connect(mapStateToProps, { addAddress, updateAddress, deleteAddress })(Addresses)
