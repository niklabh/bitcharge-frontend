import { css } from 'react-emotion'
import { colors, typography, breakpoints } from '../../styles'

const mainContainer = css`
  align-items: flex-start;
  font-family: ${typography.primaryFont};
  width: 100%;
`

const inputContainer = css`
  flex-direction: row;
  margin: .5em;
  width: 100%;
  justify-content: flex-start;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`

const inputTextAreaStyle = css`
  min-height: 5em;
`

const inputLabelContainer = css`
  flex: 2;
  margin-right: 1em;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex: none;
  }
`

const inputFieldContainer = css`
  flex: 5;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex: none;
  }
`

const inputBaseStyle = css`
  box-sizing: border-box;
  width: calc(100% - .8em);
  border: 0.5px solid transparent;
  border-radius: .25rem;
  padding: .8em;
  font-family: ${typography.primaryFont};
  font-size: 1.2rem;
  background-color: #F5F8F9;

  &:focus {
    border: 0.5px solid ${colors.defaultBorder};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1em;
  }
`

const inputErrorStyle = css`
  border: 0.5px solid ${colors.errorText};
  transition: all 0.15s ease-out;
`

const labelText = css`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1.6rem;
`

const errorText = css`
  color: ${colors.errorText};
  font-size: .9rem;
  margin-top: 0.4em;
  font-family: inherit;
  transition: all 0.15s ease-out;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: .2em;
  }
`

const styles = {
  mainContainer,
  inputContainer,
  inputLabelContainer,
  inputFieldContainer,
  inputBaseStyle,
  inputTextAreaStyle,
  inputErrorStyle,
  labelText,
  errorText
}

export default styles
