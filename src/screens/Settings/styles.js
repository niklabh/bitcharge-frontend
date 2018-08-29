import { css } from 'react-emotion'
import { colors } from '../../styles'
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
`

const loadingContainer = css`
  align-items: center;
  justify-content: center;
  padding: 5em;
`

const styles = {
  mainContainer,
  cardContainer,
  loadingContainer
}

export default styles
