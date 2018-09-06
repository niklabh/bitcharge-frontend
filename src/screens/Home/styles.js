import { css } from 'react-emotion'
import { colors, breakpoints } from '../../styles'
import { lighten } from 'polished'

const mainContainer = css`
  background-color: ${colors.white};
  label: home-main-cntr;
`

const bodyContainer = css`
  min-height: calc(100vh - 4.5em);
  border-top: 1px solid ${colors.lightGray};
  label: home-body-cntr;
`

const heroContainer = css`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2em 0;
  label: home-hero-cntr;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${colors.lightGray};

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`

const heroTextContainer = css`
  flex: 1;
  padding: 4em;
  label: home-hero-text-cntr;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}) {
    align-items: center;
    padding: 1.5em;
  }
`

const heroImageContainer = css`
  flex: 1;
  padding: 6em 4em;
  align-items: center;
  justify-content: center;
  label: home-hero-image-cntr;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2em;
  }
`

const heroHeaderText = css`
  font-weight: 600;
  margin-bottom: 1em;
  label: home-hero-header-text;

  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;
    font-size: 1.8em;
  }
`

const heroSubHeaderText = css`
  line-height: 1.5em;
  font-weight: 400;
  margin-bottom: 1.5em;
  label: home-hero-header-subtext;

  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;
    font-size: 1em;
    margin-bottom: 2.5em;
  }
`

const heroImage = css`
  max-width: 80%;
  height: auto;
  label: home-hero-image;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
  }
`

const getStartedButtonIcon = css`
  padding-left: 0.5em;
  label: home-get-started-button-icon;
`

const getStartedButton = css`
  font-size: 1.3em;
  font-weight: 600;
  label: home-get-started-button;
`

const currenciesContainer = css`
  flex-direction: row;
  padding: 2em 4em;
  border-bottom: 1px solid ${colors.lightGray};
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 2em 0;
  }
`

const currenciesSupportText = css`
  font-weight: 600;
  margin-right: 2em;

  @media (max-width: ${breakpoints.mobile}) {
    margin-right: 0;
  }
`

const currencyItemContainer = css`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 3em;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1.5em;
    margin-right: 0;
  }
`

const addressIconImage = css`
  width: 40px;
  height: 40px;
  margin-right: 1em;
  border-radius: 50%;
  border: 2px solid ${colors.white};

  @media (max-width: ${breakpoints.mobile}) {
    width: 35px;
    height: 35px;
  }
`

const addressIconText = css`
  font-weight: 500;
  margin-bottom: 0px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.1em;
  }

`

const workContainer = css`
  padding: 2em 0 0 0;
  label: home-work-cntr;
  border-bottom: 1px solid ${colors.lightGray};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0;
  }
`

const workHeaderContainer = css`
  margin: 2em;
  align-items: center;
  justify-content: center;
`

const workDetailsContainer = css`
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }

`

const workDetailsItemContainer = css`
  flex-direction: row;
  background-color: ${colors.white};
  padding: 2em 1em;
  margin: 0 2em;
  justify-content: space-between;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    margin: 0 1em;
    padding: 1em 1em;

    &:nth-child(even) {
      flex-direction: column;
    }
  }
`

const workItemTextContainer = css`
  padding: 4em 4em;
  flex: 1;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2em 0;
  }
`

const workItemHeaderText = css`
  font-weight: 600;
  margin-bottom: .5em;

  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;
    font-size: 1.5em;
  }
`

const workItemTextBorder = css`
  height: 7px;
  width: 40%;
  background-color: ${colors.secondary};

  @media (max-width: ${breakpoints.tablet}) {
    height: 6px;
  }
`

const workItemSubHeaderText = css`
  padding-top: 1.5em;
  color: ${lighten(0.3, colors.blackText)};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1em;
  }

`

const workItemImageContainer = css`
  flex: 1;
  padding: 2em 4em;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0;
    margin-bottom: 1em;
  }
`

const workItemImage = css`
  width: 70%;
  height: auto;

  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }
`

const callActionContainer = css`
  padding: 2em 4em;
  border-bottom: 1px solid ${colors.lightGray};
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 1em 0 3em 0;
  }
`

const callActionButtonContainer = css`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 2em;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 0;
  }
`

const styles = {
  mainContainer,
  bodyContainer,
  heroContainer,
  heroTextContainer,
  heroImageContainer,
  heroHeaderText,
  heroSubHeaderText,
  heroImage,
  getStartedButton,
  getStartedButtonIcon,
  currenciesContainer,
  currenciesSupportText,
  currencyItemContainer,
  addressIconImage,
  addressIconText,
  workContainer,
  workHeaderContainer,
  workDetailsContainer,
  workDetailsItemContainer,
  workItemTextContainer,
  workItemHeaderText,
  workItemTextBorder,
  workItemSubHeaderText,
  workItemImageContainer,
  workItemImage,
  callActionContainer,
  callActionButtonContainer
}

export default styles
