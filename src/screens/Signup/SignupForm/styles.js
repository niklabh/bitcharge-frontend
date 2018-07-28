import { css } from 'react-emotion'
import { colors } from '../../../styles'
import { lighten } from 'polished'

const formContainer = css`
  padding: 0 4em;
  width: 100%;
  label: signup-body-form-cntr;
`

const buttonContainer = css`
  flex-direction: row;
  justify-content: center;
  padding-top: 1em;
`

const submitButtonIcon = css`
  padding-left: 0.5em;
  label: signup-submit-button-icon;
`

const submitButton = css`
  font-size: 1.3em;
  margin-right: 1em;
  label: signup-submit-button;
`

const spinnerIcon = css`
  margin-left: 0.2em;
`

const cancelButton = css`
  background-color: transparent;
  color: ${colors.blackText};
  label: signup-cancel-button;

  &:hover {
    color: ${lighten(0.4, colors.blackText)};
  }
`

const styles = {
  formContainer,
  buttonContainer,
  submitButtonIcon,
  submitButton,
  cancelButton,
  spinnerIcon
}

export default styles
