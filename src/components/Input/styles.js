import { css } from 'react-emotion'
import { colors, typography } from '../../styles'

const mainContainer = css`
  align-items: flex-start;
  font-family: ${typography.primaryFont};
  width: 100%;
`

const inputContainer = css`
  flex-direction: row;
  margin: 1em;
  width: 100%;
  justify-content: flex-start;
`

const inputLabelContainer = css`
  flex: 2;
  margin-right: 1em;
  align-items: flex-start;
  justify-content: center;
`

const inputFieldContainer = css`
  flex: 7;
  align-items: flex-start;
  justify-content: center;
`

const inputBaseStyle = css`
  width: 100%;
  border: 0.5px solid transparent;
  border-radius: .25rem;
  padding: .8em;
  font-family: ${typography.primaryFont};
  font-size: 1.2rem;
  background-color: #F5F8F9;

  &:focus {
    border: 0.5px solid ${colors.defaultBorder};
  }
`

const inputErrorStyle = css`
  border: 0.5px solid ${colors.errorText};
`

const labelText = css`
  font-size: 1rem;
  margin-bottom: 1.6rem;
`

const errorText = css`
  color: ${colors.errorText};
  font-size: 1rem;
  margin-top: 0.6em;
  font-family: inherit;
`

const styles = {
  mainContainer,
  inputContainer,
  inputLabelContainer,
  inputFieldContainer,
  inputBaseStyle,
  inputErrorStyle,
  labelText,
  errorText
}

export default styles
