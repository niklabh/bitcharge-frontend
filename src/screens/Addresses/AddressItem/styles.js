import { css } from 'react-emotion'
import { colors } from '../../../styles'

const addressItemContainer = css`
  padding: 1.6em 0 1em 0;
  border-bottom: .5px dotted ${colors.defaultBorder};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  &:last-child {
    border-bottom: 0;
  }
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
  font-weight: 500;
  margin-bottom: 0px;
`

const addressTextContainer = css`
  align-items: flex-end;
  justify-content: space-between;
`

const addressInputContainer = css`
  align-items: flex-end;
  width: 70%;
  justify-content: space-between;
`

const addressInputStyle = css`
  align-self: flex-end;
  margin: 0;
  margin-right: -0.6em;
  font-size: 1em;
`
const optionsContainer = css`
  flex-direction: row;
  margin-top: 0.6em;
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

const editAddressCancelButton = css`
  color: ${colors.blackText};
`

const editAddressSaveButton = css`
  font-size: 1rem;
  margin-right: 1em;
`

const copiedTextStyle = css`
  color: ${colors.primary};
  font-weight: 600;
  padding-top: .9em;
  padding-right: .2em;
  font-size: 1rem;
  transition: all 0.15s ease-out;
`

const deleteAddressModalStyle = css`
  padding: 3em 3em 2em 3em;
`

const deleteAddressModalbuttonContainer = css`
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 1.8em;
  margin-right: -1.2em;
`

const styles = {
  addressItemContainer,
  addressIconContainer,
  addressIconImage,
  addressIconText,
  addressTextContainer,
  addressInputContainer,
  addressInputStyle,
  optionsContainer,
  addressActionButton,
  editAddressSaveButton,
  editAddressCancelButton,
  copiedTextStyle,
  deleteAddressModalStyle,
  deleteAddressModalbuttonContainer
}

export default styles
