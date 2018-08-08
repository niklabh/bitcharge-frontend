import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { cx } from 'emotion'
import { Link, NavLink, withRouter } from 'react-router-dom'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/Button'
import { logout as logoutAction } from '../../store/actions/auth'

import styles from './styles'

const Navbar = ({ match, logoutAction }) => {
  console.log(match)
  return (
    <Container fluid style={styles.mainContainer}>
      <Container style={styles.logoContainer}>
        <a href='/'><img className={cx(styles.logoImageStyle)} src='https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-secondary.png' /></a>
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
      <Container style={styles.rightNavContainer}>
        <Button onClick={logoutAction} link style={styles.logoutStyle}>Logout</Button>
      </Container>
    </Container>
  )
}

Navbar.propTypes = {
  match: PropTypes.object
}

export default withRouter(connect(null, { logoutAction })(Navbar))
