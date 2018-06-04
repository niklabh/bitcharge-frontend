import { css } from 'react-emotion'
import { colors, typography } from '../../styles'

import { darken, lighten } from 'polished'

const disabled = css`
  background-color: ${colors.disabled};
  border-color: ${colors.defaultBorder};
  color: ${colors.white};
`

const link = css`
background-color: transparent;
color: ${colors.blackText};

&:hover {
  color: ${lighten(0.4, colors.blackText)};
}
`

const button = css`
  display: inline-block;
  font-weight: 600;
  font-family: ${typography.primaryFont};
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  user-select: none;
  border: 1px solid transparent;
  padding: .7rem 2rem;
  font-size: 1.2rem;
  line-height: 1.5;
  border-radius: .25em;
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
  disabled,
  link,
  primaryOutline,
  secondaryOutline,
  primaryActive,
  secondaryActive
}

export default styles
