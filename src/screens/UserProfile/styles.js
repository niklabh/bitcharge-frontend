import { css } from 'react-emotion'
import { colors, breakpoints } from '../../styles'
import { lighten } from 'polished'

const mainContainer = css`
  width: 100%;
  align-items: center;
  justify-content: center;
`

const cardContainer = css`
  width: 45em;
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

const avatarContainer = css`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const editImageContainer = css`
  display: block;
  position: relative;
`

const avatarIconStyle = css`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  display: inline-block;
  border: 2px solid ${colors.white};
`

const inputStyle = css`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`

const editImageIconContainer = css`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  border: 1px solid white;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 2px;
  right: 2px;
  background: ${colors.blackText};
  transition: all 0.15s ease-out;

  &:hover {
    background-color: ${lighten(0.2, colors.blackText)};
  }
`

const headerTextContainer = css`
  padding-top: 1.5em;
  text-align: center;
`

const headerNameTextStyle = css`
  font-weight: 500;
`

const headerUsernameTextStyle = css`
  color: ${colors.lightText};
`

const editAvatarOptionsContainer = css`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 0.6em;
`

const detailsContainer = css`
  margin-top: 2em;
`

const profileHeaderContainer = css`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2em;
  border-bottom: .5px dashed ${colors.defaultBorder};
`

const profileHeaderTextStyle = css`
  font-weight: 600;
  margin-bottom: -0.4em;
`

const editProfileButton = css`
  font-weight: 600;
  font-size: 1em;
`

const editIcon = css`
  margin-left: 0.75em;
`

const verifiedIcon = css`
  margin-left: 0.3em;
`

const spinnerIcon = css`
  margin-left: 0.2em;
`

const styles = {
  mainContainer,
  cardContainer,
  loadingContainer,
  avatarContainer,
  editImageContainer,
  avatarIconStyle,
  inputStyle,
  headerTextContainer,
  headerNameTextStyle,
  editAvatarOptionsContainer,
  headerUsernameTextStyle,
  editImageIconContainer,
  detailsContainer,
  profileHeaderContainer,
  profileHeaderTextStyle,
  editProfileButton,
  editIcon,
  verifiedIcon,
  spinnerIcon
}

export default styles
