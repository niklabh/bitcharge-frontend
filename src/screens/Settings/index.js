import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { cx } from 'emotion'
import { connect } from 'react-redux'

import Container from '../../components/Container'
import Spinner from '../../components/Spinner'
import Text from '../../components/Text'
import Button from '../../components/Button'
import EditSettingsForm from './EditSettingsForm'

import API from '../../api'
import { getAuthUser } from '../../store/actions/auth'

import styles from './styles'
import { colors } from '../../styles'

const SettingsBody = ({ user }) => {
  return (
    <Container style={styles.settingsBodyContainer}>
      <Container style={styles.settingsItemContainer}>
        <Text tag='h5' style={styles.settingsItemLabel}>Username</Text>
        <Text tag='h5' style={styles.settingsItemValue}>{user.username}</Text>
      </Container>
      <Container style={styles.settingsItemContainer}>
        <Text tag='h5' style={styles.settingsItemLabel}>Email</Text>
        <Text tag='h5' style={styles.settingsItemValue}>{user.email}</Text>
      </Container>
      <Container style={styles.settingsItemContainer}>
        <Text tag='h5' style={styles.settingsItemLabel}>Password</Text>
        <Text tag='h5' style={styles.settingsItemValue}>Change <i className={`icon ion-md-create ${cx(styles.verifiedIcon)}`} /></Text>
      </Container>
      <Container style={styles.settingsItemContainer}>
        <Text tag='h5' style={styles.settingsItemLabel}>Email Verification</Text>
        {user.active
          ? <Text tag='h5' style={styles.settingsItemValue}>Verified <i className={`icon ion-md-checkmark-circle-outline ${cx(styles.verifiedIcon)}`} /></Text>
          : <Button secondary style={styles.editSettingsButton}>Resend Email<i className={`icon ion-md-arrow-round-forward ${cx(styles.editIcon)}`} /></Button>}
      </Container>
    </Container>
  )
}

class Settings extends Component {
  state = {
    isEditing: false
  }

  _renderLoading = () => {
    return (
      <Container style={styles.loadingContainer}>
        <Spinner size={50} width={7} color={colors.lightText} />
      </Container>
    )
  }

  onEdit = () => {
    this.setState({ isEditing: true })
  }

  onCancelEdit = () => {
    this.setState({ isEditing: false })
  }

  async onEditSubmit (values, bag) {
    const userDetails = {
      username: values.username
    }
    if (values.password) {
      userDetails['password'] = values.password
    }

    try {
      const data = await API.updateUser(userDetails)
      bag.setSubmitting(false)
      this.props.getAuthUser(data)
      this.setState({ isEditing: false })
    } catch (e) {
      bag.setSubmitting(false)
      bag.setErrors(API.setErrors(e.response.data.errors.details.errors))
    }
  }

  _renderUserDetails = (user) => {
    return (
      <React.Fragment>
        <Container style={styles.settingsHeaderContainer}>
          <Text tag='h4' style={styles.settingsHeaderTextStyle}>Settings</Text>
          {
            this.state.isEditing
              ? <Button onClick={this.onCancelEdit} style={styles.editSettingsButton} secondary>Cancel<i className={`icon ion-md-close ${cx(styles.editIcon)}`} /></Button>
              : <Button onClick={this.onEdit} style={styles.editSettingsButton} primary>Edit<i className={`icon ion-md-arrow-round-forward ${cx(styles.editIcon)}`} /></Button>
          }
        </Container>
        {
          this.state.isEditing
            ? <EditSettingsForm user={user} onCancel={this.onCancelEdit} onSubmit={this.onEditSubmit} />
            : <SettingsBody user={user} />
        }
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
  getAuthUser: PropTypes.func,
  user: PropTypes.object
}

SettingsBody.propTypes = {
  user: PropTypes.object
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(mapStateToProps, { getAuthUser })(Settings)
