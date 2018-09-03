import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { cx } from 'emotion'
import { Link, NavLink, withRouter } from 'react-router-dom'
import Media from 'react-media'

import Container from '../../components/Container'
import Button from '../../components/Button'
import { logout as logoutAction } from '../../store/actions/auth'

import styles from './styles'
import { breakpoints } from '../../styles'

const Navbar = ({ match, logoutAction }) => {
  return (
    <Container fluid style={styles.mainContainer}>
      <Container style={styles.logoContainer}>
        <a href='/'><img className={cx(styles.logoImageStyle)} src='https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-secondary.png' /></a>
        <Media query={`(max-width: ${breakpoints.tablet})`}>
          {matches =>
            matches ? (
              <Container style={styles.rightNavContainer}>
                <Button onClick={logoutAction} link style={styles.logoutStyle}>Logout</Button>
              </Container>
            ) : (
              null
            )
          }
        </Media>
      </Container>
      <Container style={styles.centerNavContainer}>
        <Button
          tag={Link}
          to='/profile'
          link
          style={cx(styles.linkStyle, match.isExact ? styles.activeLinkStyle : null)}
        >
          Profile
        </Button>
        <Button tag={NavLink} to='/profile/addresses' link style={styles.linkStyle} activeClassName={cx(styles.activeLinkStyle)}>Addresses</Button>
        <Button tag={NavLink} to='/profile/settings' link style={styles.linkStyle} activeClassName={cx(styles.activeLinkStyle)}>Settings</Button>
      </Container>
      <Media query={`(max-width: ${breakpoints.tablet})`}>
        {matches =>
          !matches ? (
            <Container style={styles.rightNavContainer}>
              <Button onClick={logoutAction} link style={styles.logoutStyle}>Logout</Button>
            </Container>
          ) : (
            null
          )
        }
      </Media>
    </Container>
  )
}

Navbar.propTypes = {
  match: PropTypes.object,
  logoutAction: PropTypes.func
}

export default withRouter(connect(null, { logoutAction })(Navbar))
