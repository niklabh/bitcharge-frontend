import React from 'react'
import PropTypes from 'prop-types'
import { components } from 'react-select'
import { cx } from 'emotion'

import Text from '../../../components/Text'

import styles from './styles'

const SingleValue = (props) => {
  const { data } = props
  return (
    <components.SingleValue {...props}>
      <img alt='selected-icon' src={data.currency.icon} className={cx(styles.selectedItemImage)} /><Text tag='h5' unstyled>{data.currency.name}</Text>
    </components.SingleValue>
  )
}

SingleValue.propTypes = {
  data: PropTypes.any
}

export default SingleValue
