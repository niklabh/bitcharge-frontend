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

const primaryLink = css`
  color: ${colors.primary};

  &:hover: {
    color: ${darken(0.2, colors.primary)};
  }
`

const secondaryLink = css`
  color: ${colors.secondary};

  &:hover: {
    color: ${darken(0.2, colors.secondary)};
  }
`

const errorLink = css`
  color: ${colors.errorText};

  &:hover: {
    color: ${darken(0.2, colors.errorText)};
  }
`

const disabledLink = css`
  color: ${colors.disabled};
  cursor: not-allowed;
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

const error = css`
  background-color: ${colors.errorText};
  color: ${colors.white};
  border-color: ${darken(0.2, colors.errorText)};

  &:hover {
    background-color: ${darken(0.2, colors.errorText)};
    border-color: ${darken(0.3, colors.errorText)}
  }
`

const primaryOutline = css`
    border: 2px solid ${colors.primary};
    color: ${colors.primary};
    background-color: transparent;

    &:hover {
      color: ${colors.white};
      background-color: ${colors.primary};
      border-color: ${colors.primary};
    }
`

const secondaryOutline = css`
  border: 2px solid ${colors.secondary};
  color: ${colors.secondary};
  background-color: transparent;
`

const errorOutline = css`
  border-color: 2px solid ${colors.errorText};
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

const errorActive = css`
  background-color: ${darken(0.2, colors.errorText)};
  border-color: ${darken(0.3, colors.errorText)};
`

const styles = {
  button,
  primary,
  secondary,
  block,
  error,
  disabled,
  link,
  primaryLink,
  secondaryLink,
  errorLink,
  disabledLink,
  primaryOutline,
  secondaryOutline,
  errorOutline,
  primaryActive,
  secondaryActive,
  errorActive
}

export default styles
