import { css } from 'react-emotion'

const base = css`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  label: base-cntr;
`
const content = css`
  padding-left: 2em;
  padding-right: 2em;
  label: content-cntr;
`

const fluid = css`
  min-width: 100%;
  label: fluid-cntr;
`
const fullHeight = css`
  min-height: 100vh;
  label: full-height-cntr;
`

const styles = {
  base,
  content,
  fluid,
  fullHeight
}

export default styles
