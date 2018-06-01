import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { cx } from 'emotion'

import Container from '../Container'
import Text from '../Text'
import styles from './styles'

class Input extends PureComponent {
  render () {
    const { label, name, error, ...props } = this.props
    let inputStyle = cx(styles.inputBaseStyle)

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
            <input className={inputStyle} name={name} {...props} />
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
  error: PropTypes.string
}

export default Input
