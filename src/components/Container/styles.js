import { css } from 'react-emotion'

const base = css`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`
const content = css`
  padding-left: 2em;
  padding-right: 2em;
`

const fluid = css`
  min-width: 100%;
`
const fullHeight = css`
  min-height: 100vh;
`

const styles = {
  base,
  content,
  fluid,
  fullHeight
}

export default styles
