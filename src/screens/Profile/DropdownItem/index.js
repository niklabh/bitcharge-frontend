import React from 'react'
import PropTypes from 'prop-types'
import { components } from 'react-select'
import { cx } from 'emotion'

import Text from '../../../components/Text'

import styles from './styles'

const DropdownItem = (props) => {
  const { isDisabled, data } = props
  return (
    !isDisabled ? (
      <components.Option {...props}>
        <img src={data.currency.icon} className={cx(styles.dropdownItemImage)} /><Text tag='h5' unstyled>{data.currency.name}</Text>
      </components.Option>
    ) : null
  )
}

DropdownItem.propTypes = {
  isDisabled: PropTypes.boolean,
  data: PropTypes.obj
}

export default DropdownItem
