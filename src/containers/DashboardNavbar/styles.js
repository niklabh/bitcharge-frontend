import { css } from 'react-emotion'
import { colors, breakpoints } from '../../styles'

const mainContainer = css`
  background-color: ${colors.white};
  margin: 0 auto;
  min-height: 4.5em;
  color: ${colors.blackText};
  padding: 0 3em;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.lightGray};

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
  height: 4.5em;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: 4.5em;
  }

  @media (min-width: ${breakpoints.mobile} and max-width: ${breakpoints.tablet}) {
    width: 60%;
    height: 4.5em;
  }
`

const linkStyle = css`
  font-weight: 400;
  padding-top: 1.05em;
  padding-bottom: 1.05em;
  border-radius: 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 1.3em;
    padding-bottom: 1.3em;
    font-size: 1em;
  }
`

const logoutStyle = css`
  font-weight: 400;
  font-size: 1em;

  @media (max-width: ${breakpoints.tablet}) {
    font-weight: 600;
    font-size: 1em;
    margin-right: -.7em;
  }
`

const activeLinkStyle = css`
  border-bottom: 4px solid ${colors.blackText};
`

const logoTextStyle = css`
  font-weight: 600;
`

const logoImageStyle = css`
  width: 150px;
  height: auto;
`

const styles = {
  mainContainer,
  logoContainer,
  centerNavContainer,
  logoTextStyle,
  logoImageStyle,
  linkStyle,
  logoutStyle,
  activeLinkStyle
}

export default styles
