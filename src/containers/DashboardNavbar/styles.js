import { css } from 'react-emotion'
import { colors } from '../../styles'

const mainContainer = css`
  background-color: ${colors.white};
  margin: 0 auto;
  height: 4.5em;
  color: ${colors.blackText};
  padding: 0 3em;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.lightGray};
`

const logoContainer = css`

`

const centerNavContainer = css`
  flex-direction: row;
  align-items: center;
  height: 4.5em;
`

const linkStyle = css`
  font-weight: 400;
  padding-top: 1.05em;
  padding-bottom: 1.05em;
  border-radius: 0;
`

const logoutStyle = css`
  font-weight: 400;
  font-size: 1em;
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
