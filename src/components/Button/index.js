import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles'

class Button extends Component {
  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick (e) {
    if (this.props.disabled) {
      e.preventDefault()
      return
    }
    console.log('on click pressed ')
    if (this.props.onClick) {
      this.props.onClick(e)
    }
  }

  render () {
    let {
      primary,
      secondary,
      active,
      error,
      link,
      block,
      style,
      outline,
      disabled,
      tag: Tag,
      ...attributes
    } = this.props

    let buttonStyle = `${styles.button}`

    if (primary) {
      buttonStyle = `${buttonStyle} ${styles.primary}`

      if (outline) {
        buttonStyle = `${buttonStyle} ${styles.primaryOutline}`
      }

      if (active) {
        buttonStyle = `${buttonStyle} ${styles.primaryActive}`
      }
    }

    if (secondary) {
      buttonStyle = `${buttonStyle} ${styles.secondary}`

      if (outline) {
        buttonStyle = `${buttonStyle} ${styles.secondaryOutline}`
      }

      if (active) {
        buttonStyle = `${buttonStyle} ${styles.secondaryActive}`
      }
    }

    if (error) {
      buttonStyle = `${buttonStyle} ${styles.error}`

      if (outline) {
        buttonStyle = `${buttonStyle} ${style.errorOutline}`
      }

      if (active) {
        buttonStyle = `${buttonStyle} ${styles.errorActive}`
      }
    }

    if (disabled) {
      buttonStyle = `${styles.button} ${styles.disabled}`
    }

    if (link) {
      buttonStyle = `${styles.button} ${styles.link}`

      if (error) {
        buttonStyle = `${buttonStyle} ${styles.errorLink}`
      }
    }

    if (attributes.href && Tag === 'button') {
      Tag = 'a'
    }

    if (block) {
      buttonStyle = `${buttonStyle} ${styles.block}`
    }

    if (style) {
      buttonStyle = `${buttonStyle} ${style}`
    }

    return (
      <Tag
        type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}
        {...attributes}
        className={buttonStyle}
        onClick={this.onClick}
      />
    )
  }
}

Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  error: PropTypes.bool,
  link: PropTypes.bool,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ]),
  onClick: PropTypes.func,
  children: PropTypes.node,
  style: PropTypes.any
}

Button.defaultProps = {
  tag: 'button',
  primary: true,
  disabled: false
}

export default Button
