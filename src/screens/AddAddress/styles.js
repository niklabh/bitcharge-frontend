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

const heroLogoContainer = css`
  padding-top: 1em;
`

const logoImageStyle = css`
  width: 150px;
  height: auto;
`

const addressAvatarIconStyle = css`
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
`

const bodyContainer = css`
  flex: 5;
  align-items: center;
  justify-content: center;
  padding: 6em;
  height: 100vh;
  label: signup-body-cntr;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1em;
    height: auto;
  }
`

const styles = {
  mainContainer,
  heroContainer,
  heroLogoContainer,
  addressAvatarIconStyle,
  heroTextContainer,
  heroText,
  logoImageStyle,
  bodyContainer
}

export default styles
