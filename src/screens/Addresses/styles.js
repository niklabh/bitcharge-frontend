import { css } from 'react-emotion'
import { colors, breakpoints } from '../../styles'

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

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin: 0;
    border-radius: 0;
    padding: 1.5em;
  }
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
  margin-bottom: -0.4em;
`

const addNewAddressButton = css`
  font-weight: 600;
  font-size: 1em;

  @media (max-width: ${breakpoints.mobile}) {
    padding-left: .8em;
    padding-right: .8em;
  }
`

const addNewAddressButtonIcon = css`
  padding-right: 0.4em;
  font-size: 1.1em;
  font-weight: 600;
`

const addressesListContainer = css`
  margin-top: 1em;
`

const addAddressModalStyle = css`
  width: 45%;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`

const addAddressModalHeaderStyle = css`
  text-align: center;
  font-weight: 600;
  margin-top: 1em;
  margin-bottom: 2em;
`

const addNewEmptyButton = css`
  margin-top: 2em;
`

const addIcon = css`
  margin-left: 0.3em;
`

const styles = {
  mainContainer,
  cardContainer,
  loadingContainer,
  addressesHeaderTextStyle,
  addressesHeaderContainer,
  addNewAddressButton,
  addNewAddressButtonIcon,
  addressesListContainer,
  addNewEmptyButton,
  addAddressModalStyle,
  addAddressModalHeaderStyle,
  addIcon
}

export default styles
