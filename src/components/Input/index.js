import React, { PureComponent } from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select/lib/Async'
import PropTypes from 'prop-types'
import { cx } from 'emotion'

import Container from '../Container'
import Text from '../Text'
import styles from './styles'

class Input extends PureComponent {
  render () {
    const { label, name, type, error, placeholder, ...props } = this.props
    let inputStyle = cx(styles.inputBaseStyle)
    let Tag = 'input'

    if (type === 'select') {
      Tag = Select
    }
    if (type === 'async-select') {
      Tag = AsyncSelect
    }
    if (error) {
      inputStyle = cx(inputStyle, styles.inputErrorStyle)
    }
    return (
      <Container style={styles.mainContainer}>
        <Container style={styles.inputContainer}>
          {
            label && <Container style={styles.inputLabelContainer}>
              <Text style={styles.labelText}>{label}</Text>
            </Container>
          }
          <Container style={styles.inputFieldContainer}>
            {
              (type === 'select' || type === 'async-select')
                ? <Tag name={name} placeholder={placeholder || label || null} {...props} />
                : <Tag className={inputStyle} name={name} placeholder={placeholder || label || null} {...props} />
            }
            <Text style={styles.errorText}>{error || <span>&nbsp;</span>}</Text>
          </Container>
        </Container>
      </Container>
    )
  }
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
}

export default Input
