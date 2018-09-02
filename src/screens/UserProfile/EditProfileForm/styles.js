import { css } from 'react-emotion'
import { colors } from '../../../styles'

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
`

const formItemLabel = css`
  margin-right: 2em;
  font-weight: 500;
`

const formButtonContainer = css`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.6em;
`

const formButtonStyle = css`
  font-weight: 600;
  font-size: 1em;
`

const textInputStyle = css`
  margin-left: auto;
  margin-right: -1em;
`

const inputContainerStyle = css`
  width: 70%;
`

const styles = {
  formBodyContainer,
  formItemContainer,
  formButtonContainer,
  formItemLabel,
  textInputStyle,
  formButtonStyle,
  inputContainerStyle
}

export default styles
