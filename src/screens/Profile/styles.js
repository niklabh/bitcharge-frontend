import { css } from 'react-emotion'
import { colors } from '../../styles'

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

const cardBodyContainer = css`
  align-items: center;
`

const coinDropdownContainer = css`
  position: relative;
  padding: 1.2em;
  cursor: pointer;
  outline: none;
  border-bottom: 1px solid ${colors.background};

  &::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 1em;
    top: 50%;
    margin-top: -3px;
    border-width: 6px 6px 0 6px;
    border-style: solid;
    border-color: grey transparent;
  }
`

const coinDropdown = css`
  position: absolute;
  top: 100%;
  left: 0px;
  right: 0px;
  background-color: ${colors.white};
  transition: all 0.3s ease-out;
  list-style: none;
  opacity: 0;
  pointer-events: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`

const dropdownContainerActive = css`
  &::after {
     border-width: 0 6px 6px 6px;
  }
`

const dropdownActive = css`
  opacity: 1;
  pointer-events: auto;
`

const dropdownItem = css`
  display: flex;
  align-items: center;
  padding: 1em;
  transition: background 0.3s ease-out;

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
  }

  &:last-child {
    border-bottom: 1px solid ${colors.background};
  }
`

const dropdownSelectedItem = css`
  flex-direction: row;
  align-items: center;
`

const dropdownItemImage = css`
  margin-right: 1em;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 1px solid ${colors.white};
`

const bodyDataContainer = css`
  align-items: center;
  padding: 1em;
`

const addressContainer = css`
  margin-top: .5em;
  align-items: center;
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

const styles = {
  mainContainer,
  logoTextStyle,
  bodyContainer,
  cardContainer,
  cardHeaderContainer,
  cardBodyContainer,
  avatarContainer,
  avatarIconStyle,
  headerTextContainer,
  coinDropdownContainer,
  coinDropdown,
  dropdownContainerActive,
  dropdownActive,
  dropdownItem,
  dropdownSelectedItem,
  dropdownItemImage,
  bodyDataContainer,
  addressContainer,
  addressHeaderStyle,
  qrcodeContainer,
  qrcodeImage
}

export default styles
