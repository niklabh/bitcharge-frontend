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
`

const editButtonContainer = css`
  justify-content: flex-end;
`

const settingsItemValue = css`
  font-weight: 500;
`

const textInputStyle = css`
  width: 70%;
  margin-left: auto;
  margin-right: -1em;
`

const styles = {
  mainContainer,
  cardContainer,
  loadingContainer,
  settingsHeaderContainer,
  settingsHeaderTextStyle,
  editSettingsButton,
  settingsBodyContainer,
  editButtonContainer,
  editIcon,
  verifiedIcon,
  settingsItemContainer,
  settingsItemValue,
  textInputStyle
}

export default styles
