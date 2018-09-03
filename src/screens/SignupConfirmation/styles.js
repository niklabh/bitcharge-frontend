import { css } from 'react-emotion'
import { colors, breakpoints } from '../../styles'

const mainContainer = css`
  background-color: ${colors.white};
  label: signup-cnf-main-cntr;
  flex-direction: row;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    flex: none;
  }
`

const bodyContainer = css`
  flex: 5;
  align-items: center;
  justify-content: center;
  padding: 2em;
  height: 100vh;
  label: signup-cnf-body-cntr;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1em;
    height: auto;
  }
`

const heroLogoContainer = css`
  padding-top: 1em;
`

const logoImageStyle = css`
  width: 150px;
  height: auto;
`

const heroAvatarIconStyle = css`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: .5em;
  border: 2px solid ${colors.white};

  @media (max-width: ${breakpoints.tablet}) {
    width: 125px;
    height: 125px;
  }
`

const heroText = css`
  margin-top: 1em;
  font-weight: 600;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.5em;
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1em;
  }
`

const confirmationHeaderText = css`
  text-align: left;
  font-weight: 600;
  margin-bottom: 2em;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.8em;
    margin-bottom: 1em;
  }
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
  heroAvatarIconStyle,
  heroTextContainer,
  heroFooterContainer,
  heroLogoContainer,
  logoImageStyle,
  LoginLink,
  confirmationContainer,
  confirmationHeaderText,
  buttonContainer,
  submitButton
}

export default styles
