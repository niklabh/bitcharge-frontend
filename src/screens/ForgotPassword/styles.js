import { css } from 'react-emotion'
import { colors, breakpoints } from '../../styles'

const mainContainer = css`
  background-color: ${colors.white};
  label: signup-main-cntr;
  flex-direction: row;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    flex: none;
  }
`

const bodyContainer = css`
  flex: 5;
  align-items: center;
  justify-content: center;
  padding: 3em 2em;
  height: 100vh;
  label: signup-body-cntr;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2em 1em;
    height: auto;
  }
`

const formContainer = css`
  padding: 0 4em;
  width: 80%;
  label: signup-body-form-cntr;
`

const formHeaderText = css`
  text-align: left;
  font-weight: 600;
  margin-bottom: 2em;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 1em;
    font-size: 1.8em;
  }

`

const heroLogoContainer = css`
  padding-top: 1em;
`

const logoImageStyle = css`
  width: 150px;
  height: auto;
`

const signupAvatarIconStyle = css`
  width: 150px;
  height: 150px;
  border-radius: 75px;
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
    margin-top: .5em;
    font-size: 1.5em;
  }
`

const heroTextContainer = css`
  flex: 1;
  padding: 1em;
  label: signup-hero-text-cntr;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1em;
    height: auto;
  }
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
  formContainer,
  heroContainer,
  heroLogoContainer,
  logoImageStyle,
  heroTextContainer,
  heroText,
  heroFooterContainer,
  signupAvatarIconStyle,
  heroImageContainer,
  heroHeaderText,
  heroSubHeaderText,
  heroImage,
  SignupLink,
  formHeaderText
}

export default styles
