import { css } from 'react-emotion'
import { colors } from '../../../styles'
import { lighten } from 'polished'

const formContainer = css`
  padding: 0 4em;
  width: 100%;
  label: login-body-form-cntr;
`

const buttonContainer = css`
  flex-direction: row;
  justify-content: center;
  padding-top: 1em;
  margin-left: 1.6em;
`

const submitButtonIcon = css`
  padding-left: 0.5em;
  label: login-submit-button-icon;
`

const spinnerIcon = css`
  margin-left: 0.2em;
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
  formContainer,
  buttonContainer,
  submitButtonIcon,
  spinnerIcon,
  cancelButton
}

export default styles
