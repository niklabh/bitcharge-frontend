import React from 'react'
import PropTypes from 'prop-types'
import { css, cx, keyframes } from 'emotion'

const Spinner = ({ width, size, color }) => {
  const rotateDelay = keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `

  const ring = css`
    display: inline-block;
    position: relative;
    width: ${`${size}px`};
    height: ${`${size}px`};
  `

  const innerRing1 = css`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${`${size}px`};
    height: ${`${size}px`};
    margin: ${`${width}px`};;
    border: ${`${width}px`} solid ${color};
    border-radius: 50%;
    animation: ${rotateDelay} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  `

  const innerRing2 = css`
    animation-delay: -0.45s;
  `

  const innerRing3 = css`
    animation-delay: -0.3s;
  `

  const innerRing4 = css`
    animation-delay: -0.15s;
  `

  return (
    <div className={cx(ring)}>
      <div className={cx(innerRing1)} />
      <div className={cx(innerRing2)} />
      <div className={cx(innerRing3)} />
      <div className={cx(innerRing4)} />
    </div>
  )
}

Spinner.propTypes = {
  width: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string
}

Spinner.defaultProps = {
  width: 6,
  size: 64,
  color: '#fff'
}

export default Spinner
