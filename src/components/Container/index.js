import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles'

const Container = ({ content, fullHeight, fluid, style, children, hostRef, ...props }) => {
  let containerStyle = `${styles.base}`

  if (content) {
    containerStyle = `${containerStyle} ${styles.content}`
  }

  if (fullHeight) {
    containerStyle = `${containerStyle} ${styles.fullHeight}`
  }

  if (fluid) {
    containerStyle = `${containerStyle} ${styles.fluid}`
  }

  if (style) {
    containerStyle = `${containerStyle} ${style}`
  }

  return (
    <div className={containerStyle} ref={hostRef || null} {...props}>
      {children}
    </div>
  )
}

Container.propTypes = {
  content: PropTypes.bool,
  fullHeight: PropTypes.bool,
  fluid: PropTypes.bool,
  hostRef: PropTypes.any,
  style: PropTypes.any,
  children: PropTypes.any
}

export default Container
