import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { cx } from 'emotion'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Container from '../../../components/Container'
import Text from '../../../components/Text'
import Button from '../../../components/Button'

import styles from './styles'

class AddressItem extends Component {
  state = {
    copiedAddress: false
  }

  onCopyAddress = () => {
    this.setState({ copied: true })
    setInterval(() => {
      this.setState({ copied: false })
    }, 3000)
  }

  render () {
    const { address } = this.props
    return (
      <Container style={styles.addressItemContainer}>
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
            <Button onClick={this.addNewAddress} style={styles.addressActionButton} link>Delete</Button>
          </Container>
        </Container>
      </Container>
    )
  }
}

AddressItem.propTypes = {
  address: PropTypes.object
}

export default AddressItem
