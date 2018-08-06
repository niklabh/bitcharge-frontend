import { css } from 'react-emotion'
import { colors, typography } from '../../../styles'
import { lighten } from 'polished'

const formContainer = css`
  padding: 0 4em;
  width: 100%;
  label: login-body-form-cntr;
`

const buttonContainer = css`
  flex-direction: row;
  justify-content: center;
  padding-top: 1em;
  margin-left: 1.6em;
`

const submitButtonIcon = css`
  padding-left: 0.5em;
  label: login-submit-button-icon;
`

const spinnerIcon = css`
  margin-left: 0.2em;
`

const cancelButton = css`
  background-color: transparent;
  color: ${colors.blackText};
  label: login-cancel-button;

  &:hover {
    color: ${lighten(0.4, colors.blackText)};
  }
`

const selectStyle = {
  boxSizing: 'border-box',
  width: 'calc(100% - .8em)',
  border: '0.5px solid transparent',
  borderRadius: '.25rem',
  padding: '.5em',
  fontFamily: typography.primaryFont,
  fontSize: '1.2rem',
  backgroundColor: '#F5F8F9'
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
  },
  '&:last-child': {
    borderBottom: `1px solid ${colors.background}`
  }
}

const dropdownItemImage = css`
  margin-right: 1em;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 1px solid ${colors.white};
`

const styles = {
  formContainer,
  buttonContainer,
  submitButtonIcon,
  spinnerIcon,
  cancelButton,
  selectStyle,
  dropdownItemStyle,
  dropdownItemImage
}

export default styles
