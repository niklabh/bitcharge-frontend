import { css } from 'react-emotion'

const confirmationContainer = css`
  padding: 0 4em;
  width: 100%;
`

const confirmationHeaderText = css`
  text-align: left;
  font-weight: 600;
  margin-bottom: 2em;
`

const buttonContainer = css`
  margin-top: 1em;
  flex-direction: row;
  justify-content: left;
  padding-top: 1em;
`

const submitButton = css`
  font-size: 1.3em;
  label: signup-confirm-submit-button;
`

const styles = {
  confirmationContainer,
  confirmationHeaderText,
  buttonContainer,
  submitButton
}

export default styles
