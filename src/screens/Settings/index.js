import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { cx } from 'emotion'
import { connect } from 'react-redux'

import Container from '../../components/Container'
import Spinner from '../../components/Spinner'
import Text from '../../components/Text'

import styles from './styles'
import { colors } from '../../styles'

class Settings extends Component {
  _renderLoading = () => {
    return (
      <Container style={styles.loadingContainer}>
        <Spinner size={50} width={7} color={colors.lightText} />
      </Container>
    )
  }

  _renderUserDetails = (user) => {
    return (
      <React.Fragment>
        <Container style={styles.avatarContainer}>
        </Container>
        <Container style={styles.headerTextContainer}>
          <Text tag='h5' style={styles.headerNameTextStyle}>{user.name}</Text>
          <Text tag='h6' style={styles.headerUsernameTextStyle}>{user.username}</Text>
        </Container>
      </React.Fragment>
    )
  }
  render () {
    return (
      <Container fluid style={styles.mainContainer}>
        <Container style={styles.cardContainer}>
          {this.props.user ? this._renderUserDetails(this.props.user) : this._renderLoading()}
        </Container>
      </Container>
    )
  }
}

Settings.propTypes = {
  user: PropTypes.object
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(mapStateToProps, null)(Settings)
