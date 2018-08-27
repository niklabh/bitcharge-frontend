import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import { cx } from 'emotion'

import styles from './styles'

const Modal = ({ isOpen, label, handleClose, style, children }) => {
  const modalStyle = style ? cx(styles.modalContainer, style) : cx(styles.modalContainer)

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={label}
      onRequestClose={handleClose}
      className={modalStyle}
      overlayClassName={cx(styles.overlayContainer)}
    >
      {children}
    </ReactModal>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string,
  style: PropTypes.any,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.any
}

export default Modal
