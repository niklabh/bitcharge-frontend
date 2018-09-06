import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { cx } from 'emotion'
import { Formik } from 'formik'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import * as Yup from 'yup'

import Container from '../../../components/Container'
import Text from '../../../components/Text'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Modal from '../../../components/Modal'

import API from '../../../api'

import styles from './styles'

const validationSchema = Yup.object().shape({
  address: Yup.string()
    .min(30)
    .required('Address is required')
})

const EditAddressForm = ({ onSubmit, onCancel, address }) => {
  return (
    <Formik
      initialValues={{ address: address }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      render={({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched,
        isValid,
        isSubmitting
      }) => {
        return (
          <Container style={styles.addressInputContainer}>
            <Input
              name='address'
              noErrorText
              inputStyle={styles.addressInputStyle}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              error={touched.address && errors.address}
            />
            <Container style={styles.optionsContainer}>
              <Button
                primary
                disabled={!isValid || isSubmitting}
                onClick={handleSubmit}
                style={styles.editAddressSaveButton}
                type='submit'
              >
                Save
              </Button>
              <Button
                onClick={onCancel}
                style={cx(styles.addressActionButton, styles.editAddressCancelButton)}
                link
              >
                Cancel
              </Button>
            </Container>
          </Container>
        )
      }} />
  )
}

class AddressItem extends Component {
  constructor (props) {
    super(props)

    this.onEditSubmit = this.onEditSubmit.bind(this)
  }
  state = {
    copiedAddress: false,
    deleteAddressModal: false,
    isEditing: false
  }

  onCopyAddress = () => {
    this.setState({ copied: true })
    setInterval(() => {
      this.setState({ copied: false })
    }, 3000)
  }

  onEdit = () => {
    this.setState({ isEditing: true })
  }

  async onEditSubmit (values, bag) {
    const addressDetails = { ...this.props.address, address: values.address }
    try {
      const data = await API.updateAddress(addressDetails)
      bag.setSubmitting(false)
      this.props.deleteAddress(this.props.address, { local: true })
      this.props.editAddress(data.address)
      this.setState({ isEditing: false })
    } catch (e) {
      bag.setSubmitting(false)
      bag.setErrors(API.setErrors(e.response.data.errors.details.errors))
    }
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

  onCancelEdit = () => {
    this.setState({ isEditing: false })
  }

  renderAddressText = () => {
    const { address } = this.props
    return (
      <Container style={styles.addressTextContainer}>
        <Text tag='h6' style={styles.addressTextStyle} unstyled>{address.address}</Text>
        <Container style={styles.optionsContainer}>
          <CopyToClipboard text={address.address} onCopy={this.onCopyAddress}>
            {this.state.copied
              ? <Text tag='h6' style={styles.copiedTextStyle}>Copied!</Text>
              : <Button onClick={this.addNewAddress} style={styles.addressActionButton} link>Copy</Button>
            }
          </CopyToClipboard>
          <Button onClick={this.onEdit} style={styles.addressActionButton} link>Edit</Button>
          <Button onClick={this.onDeleteAddress} style={styles.addressActionButton} link>Delete</Button>
        </Container>
      </Container>
    )
  }

  render () {
    const { address } = this.props
    return (
      <Container style={styles.addressItemContainer}>
        {this.renderDeleteModal()}
        <Container style={styles.addressIconContainer}>
          <img alt='adress-icon' src={address.currency.icon} className={cx(styles.addressIconImage)} />
          <Text tag='h5' style={styles.addressIconText}>{address.currency.name}</Text>
        </Container>
        {this.state.isEditing ? <EditAddressForm onSubmit={this.onEditSubmit} onCancel={this.onCancelEdit} address={this.props.address.address} /> : this.renderAddressText()}
      </Container>
    )
  }
}

EditAddressForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  address: PropTypes.string
}

AddressItem.propTypes = {
  address: PropTypes.object,
  editAddress: PropTypes.func,
  deleteAddress: PropTypes.func
}

export default AddressItem
