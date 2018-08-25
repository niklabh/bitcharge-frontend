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
  margin-top: 1em;
`

const styles = {
  mainContainer,
  cardContainer,
  loadingContainer,
  addressesHeaderTextStyle,
  addressesHeaderContainer,
  addNewAddressButton,
  addNewAddressButtonIcon,
  addressesListContainer
}

export default styles
