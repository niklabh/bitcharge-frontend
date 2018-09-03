import { css } from 'react-emotion'
import { colors, breakpoints } from '../../../styles'

const formBodyContainer = css`
  margin-top: 1em;
`

const formItemContainer = css`
  padding: 2em 0 2em 0;
  border-bottom: .5px dotted ${colors.defaultBorder};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1em 0;
  }
`

const formItemLabel = css`
  margin-right: 2em;
  font-weight: 500;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1em;
}

`

const formButtonContainer = css`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.6em;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    padding: 1em 0;
  }
`

const formButtonStyle = css`
  font-weight: 600;
  font-size: 1em;
`

const textInputStyle = css`
  margin-left: auto;
  margin-right: -1em;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;
  }
`

const inputContainerStyle = css`
  width: 70%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`

const spinnerIcon = css`
  margin-left: 0.2em;
`

const styles = {
  formBodyContainer,
  formItemContainer,
  formButtonContainer,
  formItemLabel,
  textInputStyle,
  formButtonStyle,
  inputContainerStyle,
  spinnerIcon
}

export default styles
