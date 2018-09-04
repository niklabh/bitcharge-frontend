import { css } from 'react-emotion'
import { colors, typography, breakpoints } from '../../styles'
import { lighten } from 'polished'

const mainContainer = css`
  background-color: ${colors.background};
`

const logoTextStyle = css`
  font-weight: 500;
`

const bodyContainer = css`
  width: 100%;
  min-height: calc(100vh - 6em);
  align-items: center;
  border-bottom: 1px dashed ${colors.defaultBorder};

  @media (max-width: ${breakpoints.mobile}) {
    padding-bottom: 2em;
    background-color: ${colors.white};
  }
`

const cardContainer = css`
  width: 32em;
  margin-top: 3em;
  margin-bottom: 3em;
  background-color: ${colors.white};
  border-radius: 4px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
  }
`

const loadingContainer = css`
  align-items: center;
  justify-content: center;
  padding: 5em;
`

const cardHeaderContainer = css`
  padding: 2.5em 2em;
  background-color: ${colors.primary};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
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

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.5em;
  }
`

const addressValueText = css`
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
  }
`

const addressContainer = css`
  margin-top: .5em;
  align-items: center;
`

const optionsContainer = css`
  flex-direction: row;
  margin-bottom: 0.6em;
  width: 90%;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
    justify-content: center;
  }
`

const addressActionButton = css`
  padding-left: .5em;
  padding-right: .5em;
  padding-top: .2em;
  padding-bottom: .2em;
  font-size: 1rem;
  color: ${colors.secondary};

  &:last-child {
    padding-right: 0em;
  }
`

const iconButton = css`
  font-size: 1.6em;
  color: ${lighten(0.2, colors.blackText)};
`

const copiedTextStyle = css`
  color: ${colors.primary};
  font-weight: 600;
  padding-top: .3em;
  padding-right: .2em;
  font-size: 1rem;
  transition: all 0.15s ease-out;
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
  addressValueText,
  iconButton,
  copiedTextStyle,
  optionsContainer,
  addressActionButton,
  addressHeaderStyle,
  qrcodeContainer,
  qrcodeImage,
  addNewEmptyButton,
  selectStyle,
  singleValueStyle,
  dropdownItemStyle
}

export default styles
