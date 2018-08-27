import { css } from 'react-emotion'
import { colors, typography } from '../../styles'

const mainContainer = css`
  background-color: ${colors.background};
`

const logoTextStyle = css`
  font-weight: 500;
`

const bodyContainer = css`
  width: 100%;
  align-items: center;
  justify-content: center;
`

const cardContainer = css`
  width: 32em;
  margin-top: 3em;
  margin-bottom: 3em;
  background-color: ${colors.white};
  border-radius: 4px;
`

const loadingContainer = css`
  align-items: center;
  justify-content: center;
  padding: 5em;
`

const cardHeaderContainer = css`
  height: 13em;
  background-color: ${colors.primary};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  align-items: center;
  justify-content: center;
`

const avatarContainer = css`
  align-items: center;
  justify-content: center;
`

const avatarIconStyle = css`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 2px solid ${colors.white};
`

const headerTextContainer = css`
  padding-top: .8em;
  text-align: center;
  color: ${colors.white};
`

const headerTextStyle = css`
  font-weight: 600;
  margin-bottom: .2em;
`

const headerSubTextStyle = css`
  font-weight: 400;
`

const cardBodyContainer = css`
  align-items: center;
`

const bodyDataContainer = css`
  align-items: center;
  padding: 1em;
`

const addressContainer = css`
  margin-top: .5em;
  align-items: center;
`

const addNewEmptyButton = css`
  margin-top: 2em;
`

const addressHeaderStyle = css`
`

const qrcodeContainer = css`
  padding: 1.2em;
  align-items: center;
  justify-content: center;
`

const qrcodeImage = css`
  width: 10em;
  height: 10em;
`

const selectStyle = {
  boxSizing: 'border-box',
  width: '100%',
  borderRadius: 0,
  border: 0,
  borderBottom: `1px solid ${colors.background}`,
  padding: '0.8em',
  fontFamily: typography.primaryFont,
  fontSize: '1.2rem',
  backgroundColor: colors.white,
  '&:hover': {
    border: 0,
    borderBottom: `1px solid ${colors.background}`
  }
}

const dropdownItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '0.8em',
  maxWidth: '100%',
  transition: 'background 0.3s ease-out',
  '&:hover': {
    backgroundColor: colors.primary,
    color: colors.white
  },
  '&:active': {
    backgroundColor: colors.primary,
    color: colors.white
  }
}

const singleValueStyle = {
  display: 'flex',
  alignItems: 'center'
}

const styles = {
  mainContainer,
  logoTextStyle,
  bodyContainer,
  cardContainer,
  loadingContainer,
  cardHeaderContainer,
  cardBodyContainer,
  avatarContainer,
  avatarIconStyle,
  headerTextContainer,
  headerTextStyle,
  headerSubTextStyle,
  bodyDataContainer,
  addressContainer,
  addressHeaderStyle,
  qrcodeContainer,
  qrcodeImage,
  addNewEmptyButton,
  selectStyle,
  singleValueStyle,
  dropdownItemStyle
}

export default styles
