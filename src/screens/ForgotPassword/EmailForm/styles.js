import { css } from 'react-emotion'
import { colors, breakpoints } from '../../../styles'
import { lighten } from 'polished'

const formContainer = css`
  padding: 0 4em;
  width: 80%;
  label: forgot-password-body-form-cntr;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0;
    width: 100%;
  }
`

const buttonContainer = css`
  flex-direction: row;
  justify-content: center;
  padding-top: 1em;
  label: forgot-password-body-form-cntr-btn-cntr;
`

const submitButtonIcon = css`
  padding-left: 0.5em;
  label: forgot-password-body-form-cntr-btn;
`

const submitButton = css`
  font-size: 1.3em;
  margin-right: 1em;
  label: signup-submit-button;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1em;
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1em;
  }
`

const styles = {
  formContainer,
  buttonContainer,
  submitButton,
  submitButtonIcon,
  cancelButton,
  spinnerIcon
}

export default styles
