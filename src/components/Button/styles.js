import { css } from 'react-emotion'
import { colors } from '../../styles'

import { darken, lighten } from 'polished'

const disabled = css`

`

const button = css`
  display: inline-block;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  user-select: none;
  border: 1px solid transparent;
  padding: .8rem 2rem;
  font-size: 1.2rem;
  line-height: 1.5;
  border-radius: .25rem;
  cursor: pointer;
  text-transform: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:hover {
    text-decoration: none;
  }

  &:not(:disabled):not(${disabled}) {
    cursor: pointer;
  }
`
const block = css`
  display: block;
  width: 100%;
`

const primary = css`
  background-color: ${colors.primary};
  color: ${colors.white};
  border-color: ${colors.primary};

  &:hover {
    background-color: ${darken(0.2, colors.primary)};
    border-color: ${darken(0.2, colors.primary)};
  }
`

const secondary = css`
  background-color: ${colors.secondary};
  color: ${colors.white};
  border-color: ${colors.secondary};

  &:hover {
    background-color: ${darken(0.2, colors.secondary)};
    border-color: ${darken(0.3, colors.secondary)};
  }
`

const primaryOutline = css`
    border-color: ${colors.primary};
    color: ${colors.primary}
    background-color: transparent;
`

const secondaryOutline = css`
  border-color: ${colors.secondary};
  color: ${colors.secondary};
  background-color: transparent;
`

const primaryDisabled = css`
background-color: ${lighten(0.2, colors.primary)};
border-color: ${lighten(0.3, colors.primary)};
`

const secondaryDisabled = css`
background-color: ${lighten(0.2, colors.secondary)};
border-color: ${lighten(0.3, colors.secondary)};
`

const primaryActive = css`
  background-color: ${darken(0.2, colors.primary)};
  border-color: ${darken(0.3, colors.primary)};
`

const secondaryActive = css`
  background-color: ${darken(0.2, colors.secondary)};
  border-color: ${darken(0.3, colors.secondary)};
`

const styles = {
  button,
  primary,
  secondary,
  block,
  primaryOutline,
  secondaryOutline,
  primaryDisabled,
  secondaryDisabled,
  primaryActive,
  secondaryActive
}

export default styles
