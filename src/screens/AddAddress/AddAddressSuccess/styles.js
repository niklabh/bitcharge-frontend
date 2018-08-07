import { css } from 'react-emotion'
import { colors } from '../../../styles'
import { lighten } from 'polished'

const successContainer = css`
  padding: 0 4em;
  width: 100%;
`

const successHeaderText = css`
  text-align: left;
  font-weight: 600;
  margin-bottom: 2em;
`

const buttonContainer = css`
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 2em;
`

const cancelButton = css`
  background-color: transparent;
  color: ${colors.blackText};
  label: login-cancel-button;

  &:hover {
    color: ${lighten(0.4, colors.blackText)};
  }
`

const styles = {
  successContainer,
  successHeaderText,
  cancelButton,
  buttonContainer
}

export default styles
