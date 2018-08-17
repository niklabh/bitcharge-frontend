import { css } from 'react-emotion'
import { colors } from '../../styles'

const mainContainer = css`
  width: 100%;
  align-items: center;
  justify-content: center;
`

const cardContainer = css`
  width: 50em;
  margin-top: 3em;
  margin-bottom: 3em;
  background-color: ${colors.white};
  border-radius: 4px;
  padding: 2em 3em;
`

const loadingContainer = css`
  align-items: center;
  justify-content: center;
  padding: 5em;
`

const addressesHeaderContainer = css`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1em;
  border-bottom: .5px dashed ${colors.defaultBorder};
`

const addressesHeaderTextStyle = css`
  font-weight: 600;
`

const addNewAddressButton = css`
  font-weight: 600;
  font-size: 1.3em;
  margin-right: -1.2em;
  color: ${colors.primaryDark};
`

const addNewAddressButtonIcon = css`
  padding-right: 0.4em;
  font-size: 1.1em;
  font-weight: 600;
`

const addressesListContainer = css`
  margin-top: 3em;
`

const addressItemContainer = css`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

const addressIconContainer = css`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const addressIconImage = css`
  width: 40px;
  height: 40px;
  margin-right: 1em;
  border-radius: 20px;
  border: 2px solid ${colors.white};
`

const addressIconText = css`
  font-weight: 600;
  margin-bottom: 0px;
`

const addressTextContainer = css`
  align-items: flex-end;
  justify-content: space-between;
`

const optionsContainer = css`
  flex-direction: row;
`

const addressActionButton = css`
  padding-left: .5em;
  padding-right: .5em;
  font-size: 1rem;
  color: ${colors.secondary};

  &:last-child {
    padding-right: 0em;
  }
`

const styles = {
  mainContainer,
  cardContainer,
  loadingContainer,
  addressesHeaderTextStyle,
  addressesHeaderContainer,
  addNewAddressButton,
  addNewAddressButtonIcon,
  addressItemContainer,
  addressIconContainer,
  addressIconImage,
  addressIconText,
  addressesListContainer,
  addressTextContainer,
  optionsContainer,
  addressActionButton
}

export default styles
