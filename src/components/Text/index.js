import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles'

const Text = ({ tag, children, unstyled, style, ...props }) => {
  let textStyle = `${styles.base}`
  let Tag = 'p'

  if (tag) {
    textStyle = `${textStyle} ${styles[tag]}`
    Tag = tag
  }

  if (unstyled) {
    textStyle = `${textStyle} ${styles.unstyledText}`
  }

  if (style) {
    textStyle = `${textStyle} ${style}`
  }

  return (
    <Tag className={textStyle}>{children}</Tag>
  )
}

Text.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  style: PropTypes.any,
  children: PropTypes.any.isRequired,
  unstyled: PropTypes.bool
}

export default Text
