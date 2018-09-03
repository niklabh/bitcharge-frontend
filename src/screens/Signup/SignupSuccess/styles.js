import { css } from 'react-emotion'
import { breakpoints } from '../../../styles'

const successContainer = css`
  padding: 0 4em;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0;
  }
`

const successHeaderText = css`
  text-align: left;
  font-weight: 600;
  margin-bottom: 2em;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.5em;
    margin-top: 1em;
    margin-bottom: 1em;
  }
`

const successInfoText = css`
@media (max-width: ${breakpoints.tablet}) {
  font-size: 1em;
  margin-bottom: 1em;
}
`

const styles = {
  successContainer,
  successHeaderText,
  successInfoText
}

export default styles
