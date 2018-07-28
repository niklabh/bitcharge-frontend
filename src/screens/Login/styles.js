import { css } from 'react-emotion'
import { colors } from '../../styles'

const mainContainer = css`
  background-color: ${colors.white};
  label: signup-main-cntr;
  flex-direction: row;
`

const heroContainer = css`
  flex: 2;
  background-color: ${colors.secondary};
  color: ${colors.white};
  padding: 0 2em;
  label: signup-hero-cntr;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.lightGray};
`

const bodyContainer = css`
  flex: 5;
  align-items: center;
  justify-content: center;
  padding: 2em;
  label: signup-body-cntr;
`

const heroLogoContainer = css`
  padding-top: 1em;
`

const signupAvatarIconStyle = css`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: .5em;
  border: 2px solid ${colors.white};
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

const heroImageContainer = css`
  flex: 1;
  padding: 4em 4em 4em 2em;
  align-items: center;
  justify-content: center;
  label: signup-hero-image-cntr;
`

const heroHeaderText = css`
  font-weight: 500;
  margin-bottom: 1em;
  label: home-hero-header-text;
`

const heroSubHeaderText = css`
  line-height: 1.5em;
  font-weight: 400;
  margin-bottom: 1.5em;
  label: home-hero-header-subtext;
`

const heroImage = css`
  max-width: 100%;
  height: auto;
  label: home-hero-image;
`

const submitButton = css`
  font-size: 1.3em;
  margin-right: 1em;
  label: signup-submit-button;
`

const SignupLink = css`
  font-weight: 600;
  display: inline-block;
  text-decoration: none;
  color: ${colors.white};
  padding: .3em;
  border-radius: .1em;
  label: login-signup-link;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.secondary};
  }
`

const styles = {
  mainContainer,
  bodyContainer,
  heroContainer,
  heroLogoContainer,
  heroTextContainer,
  heroText,
  heroFooterContainer,
  signupAvatarIconStyle,
  heroImageContainer,
  heroHeaderText,
  heroSubHeaderText,
  heroImage,
  submitButton,
  SignupLink
}

export default styles
