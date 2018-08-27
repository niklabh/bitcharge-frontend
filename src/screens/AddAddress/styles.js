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

const heroTextContainer = css`
  flex: 1;
  padding: 1em;
  label: signup-hero-text-cntr;
  align-items: center;
  justify-content: center;
`

const heroLogoContainer = css`
  padding-top: 1em;
`

const addressAvatarIconStyle = css`
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

const bodyContainer = css`
  flex: 5;
  align-items: center;
  justify-content: center;
  padding: 6em;
  label: signup-body-cntr;
`

const styles = {
  mainContainer,
  heroContainer,
  heroLogoContainer,
  addressAvatarIconStyle,
  heroTextContainer,
  heroText,
  bodyContainer
}

export default styles
