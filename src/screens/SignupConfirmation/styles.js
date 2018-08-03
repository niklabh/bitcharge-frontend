import { css } from 'react-emotion'
import { colors } from '../../styles'

const mainContainer = css`
background-color: ${colors.white};
label: signup-cnf-main-cntr;
flex-direction: row;
`

const heroContainer = css`
  flex: 2;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 0 2em;
  label: signup-cnf-hero-cntr;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.lightGray};
`

const bodyContainer = css`
  flex: 5;
  align-items: center;
  justify-content: center;
  padding: 2em;
  label: signup-cnf-body-cntr;
`

const heroLogoContainer = css`
  padding-top: 1em;
`

const heroText = css`
  margin-top: 1em;
  font-weight: 600;
`

const heroTextContainer = css`
  flex: 1;
  padding: 1em;
  label: signup-hero-text-cntr;
  align-items: center;
  justify-content: center;
`

const heroFooterContainer = css`
  margin-bottom: 1em;
`

const LoginLink = css`
  font-weight: 600;
  display: inline-block;
  text-decoration: none;
  color: ${colors.white};
  padding: .3em;
  border-radius: .1em;
  label: signup-login-link;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.primary};
  }
`

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
  mainContainer,
  heroContainer,
  bodyContainer,
  heroText,
  heroTextContainer,
  heroFooterContainer,
  heroLogoContainer,
  LoginLink,
  confirmationContainer,
  confirmationHeaderText,
  buttonContainer,
  submitButton
}

export default styles
