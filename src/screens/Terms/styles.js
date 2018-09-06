import { css } from 'react-emotion'
import { colors, breakpoints } from '../../styles'
import { lighten, darken } from 'polished'

const mainContainer = css`
  background-color: ${colors.background};
  label: home-main-cntr;

  @media (max-width: ${breakpoints.tablet}) {
    background-color: ${colors.white};
  }
`

const bodyContainer = css`
  min-height: calc(100vh - 4.5em);
  border-top: 2px solid ${colors.primary};
  align-items: center;
  label: home-body-cntr;

  @media (max-width: ${breakpoints.tablet}) {
    border-bottom: 1px solid ${colors.defaultBorder};
  }
`

const workItemTextBorder = css`
  height: 7px;
  width: 60%;
  margin-top: .5em;
  background-color: ${colors.secondary};

  @media (max-width: ${breakpoints.tablet}) {
    height: 6px;
  }
`

const headerContainer = css`
  margin-top: 5em;
  margin-bottom: 3em;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 3em;
    margin-bottom: 0;
  }
`

const headerTextStyle = css`
  font-weight: 600;

  @media (max-width: ${breakpoints.tablet}) {
    font-weight: 500;
    font-size: 2em;
  }
`

const detailsContainer = css`
  width: 65%;
  margin-top: 3em;
  margin-bottom: 5em;
  background-color: ${colors.white};
  border-radius: 5px;
  border: 1px solid ${lighten(0.1, colors.defaultBorder)};
  padding: 4em 5em;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin: 0;
    border-radius: 0;
    padding: 1.5em;
    border: 0;
  }
`

const sectionContainer = css`
  padding: 2em 0;
  border-bottom: 1px dashed ${colors.defaultBorder};

  &:last-child {
    border-bottom: 0;
  }
`

const sectionHeader = css`
  font-weight: 500;
  margin: 1em 0 1.5em 0;
`

const bodyText = css`
  color: ${lighten(0.2, colors.blackText)};
  line-height: 1.5;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    font-size: 1em;
  }
`

const linkText = css`
  color: ${colors.linkText};
  font-weight: 500;
  text-decoration: none;
  transition: all 0.15s ease-out;

  &:hover {
    color: ${darken(0.2, colors.linkText)};
  }
`

const styles = {
  mainContainer,
  bodyContainer,
  detailsContainer,
  headerContainer,
  workItemTextBorder,
  headerTextStyle,
  sectionContainer,
  sectionHeader,
  bodyText,
  linkText
}

export default styles
