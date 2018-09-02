import { css } from 'react-emotion'
import { colors, breakpoints } from '../../styles'

const mainContainer = css`
  background-color: ${colors.white};
  height: 4.5em;
  padding-left: 3em;
  padding-right: 3em;
  color: ${colors.blackText};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    padding-left: 1em;
    padding-right: 1em;
  }
`

const logoTextStyle = css`
  font-weight: 600;
`

const profileTextStyle = css`
  font-weight: 400;
  font-size: 1em;

  @media (max-width: ${breakpoints.mobile}) {
    margin-right: -1em;
  }
`

const logoImageStyle = css`
  width: 150px;
  height: auto;
`

const styles = {
  mainContainer,
  logoTextStyle,
  logoImageStyle,
  profileTextStyle
}

export default styles
