import { css } from 'react-emotion'
import { colors, breakpoints } from '../../styles'
import { lighten } from 'polished'

const mainContainer = css`
  background-color: ${colors.white};
  margin: 0 auto;
  min-height: 4.5em;
  color: ${colors.blackText};
  padding: 1em 3em;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 1em;
    padding-right: 1em;
    flex-direction: column;
    padding-top: 1em;
  }
`

const logoContainer = css`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    border-bottom: 1px solid ${colors.lightGray};
    padding-bottom: 1em;
  }
`

const centerNavContainer = css`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: .5em 0;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    flex-wrap: wrap;
  }

  @media (min-width: ${breakpoints.mobile} and max-width: ${breakpoints.tablet}) {
    width: 60%;
  }
`

const rightNavContainer = css`
  flex-direction: row;
`

const linkStyle = css`
  font-weight: 500;
  font-size: 1em;
  border-radius: 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 1em;
    padding-right: 1em;
    font-size: 1em;
  }
`

const logoutStyle = css`
  font-size: 1.8em;
  padding-top: 0;
  padding-bottom: 0;
  color: ${lighten(0.3, colors.blackText)};

  @media (max-width: ${breakpoints.tablet}) {
    font-weight: 600;
    padding-top: 0;
    padding-bottom: 0;
    font-size: 1.4em;
    margin-right: -.7em;
  }
`

const logoTextStyle = css`
  font-weight: 600;
`

const logoImageStyle = css`
  width: 150px;
  height: auto;

  @media (max-width: ${breakpoints.tablet}) {
    width: 120px;
    height: auto;
  }
`

const styles = {
  mainContainer,
  logoContainer,
  centerNavContainer,
  logoTextStyle,
  logoImageStyle,
  linkStyle,
  logoutStyle,
  rightNavContainer
}

export default styles
