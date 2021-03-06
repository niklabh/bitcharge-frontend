import { css } from 'react-emotion'
import { colors, breakpoints } from '../../styles'

const modalContainer = css`
  display: flex;
  flex-direction: column;
  padding: 2em;
  margin-top: 10%;
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.25);
  transition: all 300ms ease-out;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 0;
  }
`

const overlayContainer = css`
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: ${breakpoints.mobile}) {
    align-items: center;
  }

`

const styles = {
  modalContainer,
  overlayContainer
}

export default styles
