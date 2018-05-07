import { css } from 'react-emotion'
import { colors } from '../../styles'

const mainContainer = css`
  background-color: ${colors.white};
  height: 4.5em;
  color: ${colors.blackText};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const logoTextStyle = css`
  font-weight: 600;
`

const styles = {
  mainContainer,
  logoTextStyle
}

export default styles
