import { css } from 'react-emotion'
import { colors, breakpoints } from '../../styles'

const mainContainer = css`
  width: 100%;
  min-height: calc(100vh - 4.5em);
  align-items: center;
  border-bottom: 1px solid ${colors.lightGray};
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

const settingsHeaderContainer = css`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1em;
  border-bottom: .5px dashed ${colors.defaultBorder};
`

const settingsHeaderTextStyle = css`
  font-weight: 600;
  margin-bottom: -0.4em;
`

const editSettingsButton = css`
  font-weight: 600;
  font-size: 1em;
`

const editIcon = css`
  margin-left: 0.75em;
`

const verifiedIcon = css`
  margin-left: 0.3em;
`

const settingsBodyContainer = css`
  margin-top: 1em;
`

const settingsItemContainer = css`
  padding: 2em 0 2em 0;
  border-bottom: .5px dotted ${colors.defaultBorder};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1em 0;
  }
`

const editButtonContainer = css`
  justify-content: flex-end;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`

const settingsItemValue = css`
  font-weight: 500;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1em;
  }
`

const settingsItemLabel = css`
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1em;
}
`

const textInputStyle = css`
  width: 70%;
  margin-left: auto;
  margin-right: -1em;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-right: 0;
  }
`

const editAddressSaveButton = css`
@media (max-width: ${breakpoints.tablet}) {
  font-size: 1em;
}
`

const editAddressCancelButton = css`
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1em;
  }
`

const styles = {
  mainContainer,
  cardContainer,
  loadingContainer,
  settingsHeaderContainer,
  settingsHeaderTextStyle,
  editSettingsButton,
  editAddressSaveButton,
  editAddressCancelButton,
  settingsBodyContainer,
  editButtonContainer,
  editIcon,
  verifiedIcon,
  settingsItemContainer,
  settingsItemLabel,
  settingsItemValue,
  textInputStyle
}

export default styles
