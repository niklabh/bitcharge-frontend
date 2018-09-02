import React, { PureComponent } from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select/lib/Async'
import PropTypes from 'prop-types'
import { cx } from 'emotion'

import Container from '../Container'
import Text from '../Text'
import styles from './styles'

class Input extends PureComponent {
  constructor (props) {
    super(props)

    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleSelectBlur = this.handleSelectBlur.bind(this)
  }

  handleSelectChange = function (value) {
    this.props.onChange(this.props.name, value)
  }

  handleSelectBlur = function () {
    this.props.onBlur(this.props.name, true)
  }

  render () {
    const { label, name, noErrorText, type, error, placeholder, inputStyle, inputContainerStyle, ...props } = this.props
    let innerInputStyle = cx(styles.inputBaseStyle)
    let mainContainerStyle = cx(styles.mainContainer)

    let innerInputContainerStyle = cx(styles.inputContainer)

    if (inputStyle) {
      innerInputContainerStyle = `${innerInputContainerStyle} ${inputStyle}`
    }

    if (inputContainerStyle) {
      mainContainerStyle = cx(mainContainerStyle, inputContainerStyle)
    }

    let Tag = 'input'

    if (type === 'select') {
      Tag = Select
    }
    if (type === 'async-select') {
      Tag = AsyncSelect
    }

    if (type === 'textarea') {
      Tag = 'textarea'
      innerInputStyle = cx(innerInputStyle, styles.inputTextAreaStyle)
    }

    if (error) {
      innerInputStyle = cx(innerInputStyle, styles.inputErrorStyle)
    }
    return (
      <Container style={mainContainerStyle}>
        <Container style={innerInputContainerStyle}>
          {
            label && <Container style={styles.inputLabelContainer}>
              <Text style={styles.labelText}>{label}</Text>
            </Container>
          }
          <Container style={styles.inputFieldContainer}>
            {
              (type === 'select' || type === 'async-select')
                ? <Tag name={name} placeholder={placeholder || label || null} {...props} onChange={this.handleSelectChange} onBlur={this.handleSelectBlur} />
                : <Tag className={innerInputStyle} name={name} placeholder={placeholder || label || null} type={type} {...props} />
            }
            {!noErrorText && <Text style={styles.errorText}>{error || <span>&nbsp;</span>}</Text>}
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
  type: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  inputStyle: PropTypes.any,
  noErrorText: PropTypes.bool,
  inputContainerStyle: PropTypes.any
}

export default Input
