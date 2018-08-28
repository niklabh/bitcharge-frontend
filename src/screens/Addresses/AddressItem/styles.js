import { css } from 'react-emotion'
import { colors } from '../../../styles'

const addressItemContainer = css`
  padding: 2em 0 1em 0;
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
  optionsContainer,
  addressActionButton,
  copiedTextStyle,
  deleteAddressModalStyle,
  deleteAddressModalbuttonContainer
}

export default styles
