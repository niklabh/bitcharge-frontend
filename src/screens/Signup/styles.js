import { css } from 'react-emotion'
import { colors } from '../../styles'

const mainContainer = css`
  background-color: ${colors.white};
  label: signup-main-cntr;
  flex-direction: row;
`

const heroContainer = css`
  flex: 2;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 2em;
  label: signup-hero-cntr;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${colors.lightGray};
`

const bodyContainer = css`
  flex: 5;
  align-items: center;
  justify-content: center;
  padding: 2em;
  label: signup-body-cntr;
`

const heroTextContainer = css`
  flex: 1;
  padding: 4em;
  label: signup-hero-text-cntr;
  align-items: flex-start;
  justify-content: center;
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

const getStartedButtonIcon = css`
  padding-left: 0.5em;
  label: home-get-started-button-icon;
`

const getStartedButton = css`
  font-size: 1.3em;
  font-weight: 600;
  label: home-get-started-button;
`

const styles = {
  mainContainer,
  bodyContainer,
  heroContainer,
  heroTextContainer,
  heroImageContainer,
  heroHeaderText,
  heroSubHeaderText,
  heroImage,
  getStartedButton,
  getStartedButtonIcon
}

export default styles
