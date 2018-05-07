import { css } from 'react-emotion'
import { typography } from '../../styles'

const base = css`
  margin-bottom: .5rem;
  font-weight: 400;
  line-height: 1.2;
  font-family: inherit;
  font-size: 1rem;
`
const h1 = css`
  font-size: ${typography.h1};
`

const h2 = css`
  font-size: ${typography.h2};
`

const h3 = css`
  font-size: ${typography.h3};
`

const h4 = css`
  font-size: ${typography.h4};
`

const h5 = css`
  font-size: ${typography.h5}
`

const h6 = css`
  font-size: ${typography.h6}
`

const unstyledText = css`
  margin-bottom: 0;
`

const styles = {
  base,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  unstyledText
}

export default styles
