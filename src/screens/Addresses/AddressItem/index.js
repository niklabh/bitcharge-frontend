import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { cx } from 'emotion'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Container from '../../../components/Container'
import Text from '../../../components/Text'
import Button from '../../../components/Button'
import Modal from '../../../components/Modal'

import styles from './styles'

class AddressItem extends Component {
  state = {
    copiedAddress: false,
    deleteAddressModal: false
  }

  onCopyAddress = () => {
    this.setState({ copied: true })
    setInterval(() => {
      this.setState({ copied: false })
    }, 3000)
  }

  onDeleteAddress = () => {
    this.setState({ deleteAddressModal: true })
  }

  handleDeleteAddress = () => {
    this.props.deleteAddress(this.props.address)
    this.closeDeleteAddressModal()
  }

  closeDeleteAddressModal = () => {
    this.setState({ deleteAddressModal: false })
  }

  renderDeleteModal = () => {
    return (
      <Modal label='Delete Address' style={styles.deleteAddressModalStyle} isOpen={this.state.deleteAddressModal} handleClose={this.closeDeleteAddressModal}>
        <Text tag='h5' style={styles.deleteAddressHeaderStyle}>Are you sure you want to delete this address?</Text>
        <Container style={styles.deleteAddressModalbuttonContainer}>
          <Button error link onClick={this.handleDeleteAddress}>Delete</Button>
          <Button link onClick={this.closeDeleteAddressModal}>Cancel</Button>
        </Container>
      </Modal>
    )
  }

  render () {
    const { address } = this.props
    return (
      <Container style={styles.addressItemContainer}>
        {this.renderDeleteModal()}
        <Container style={styles.addressIconContainer}>
          <img src={address.currency.icon} className={cx(styles.addressIconImage)} />
          <Text tag='h5' style={styles.addressIconText}>{address.currency.name}</Text>
        </Container>
        <Container style={styles.addressTextContainer}>
          <Text tag='h6' unstyled>{address.address}</Text>
          <Container style={styles.optionsContainer}>
            <CopyToClipboard text={address.address} onCopy={this.onCopyAddress}>
              {this.state.copied
                ? <Text tag='h6' style={styles.copiedTextStyle}>Copied!</Text>
                : <Button onClick={this.addNewAddress} style={styles.addressActionButton} link>Copy</Button>
              }
            </CopyToClipboard>
            <Button onClick={this.addNewAddress} style={styles.addressActionButton} link>Edit</Button>
            <Button onClick={this.onDeleteAddress} style={styles.addressActionButton} link>Delete</Button>
          </Container>
        </Container>
      </Container>
    )
  }
}

AddressItem.propTypes = {
  address: PropTypes.object,
  deleteAddress: PropTypes.func
}

export default AddressItem
