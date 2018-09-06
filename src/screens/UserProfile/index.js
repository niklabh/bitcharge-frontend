/* global FileReader */
/* global FormData */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { cx } from 'emotion'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Container from '../../components/Container'
import Spinner from '../../components/Spinner'
import Text from '../../components/Text'
import Button from '../../components/Button'
import EditProfileForm from './EditProfileForm'

import API from '../../api'
import { getAuthUser } from '../../store/actions/auth'

import styles from './styles'
import { colors } from '../../styles'

class UserProfile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedProfileImage: null,
      selectedProfileImageBinary: null,
      isSubmittingAvatar: false
    }

    this.handleAvatarSubmit = this.handleAvatarSubmit.bind(this)
    this.handleProfileSubmit = this.handleProfileSubmit.bind(this)
  }

  _renderLoading = () => {
    return (
      <Container style={styles.loadingContainer}>
        <Spinner size={50} width={7} color={colors.lightText} />
      </Container>
    )
  }

  fileChangeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({ selectedProfileImageBinary: event.target.files[0] })
      let reader = new FileReader()
      reader.onload = (e) => {
        this.setState({ selectedProfileImage: e.target.result })
      }
      reader.readAsDataURL(event.target.files[0])
    }
  }

  async handleAvatarSubmit () {
    this.setState({ isSubmittingAvatar: true })
    try {
      const formData = new FormData()
      formData.append('avatar', this.state.selectedProfileImageBinary, this.state.selectedProfileImageBinary.name)
      const user = await API.updateUser(formData)
      this.setState({
        selectedProfileImage: null,
        selectedProfileImageBinary: null,
        isSubmittingAvatar: false
      })
      this.props.getAuthUser(user)
    } catch (e) {
      this.setState({ isSubmittingAvatar: false })
    }
  }

  async handleProfileSubmit (values, bag) {
    try {
      const data = await API.updateUser(values)
      bag.setSubmitting(false)
      this.props.getAuthUser(data)
    } catch (e) {
      bag.setSubmitting(false)
      bag.setErrors(API.setErrors(e.response.data.errors.details.errors))
    }
  }

  onAvatarCancel = () => {
    this.setState({ selectedProfileImage: null })
  }

  getUserImage = (user) => {
    if (this.state.selectedProfileImage) {
      return this.state.selectedProfileImage
    }
    if (user.avatar) {
      return user.avatar
    }

    return 'https://res.cloudinary.com/bitcharge/image/upload/v1535940305/panda-avatar.png'
  }

  _renderUserDetails = (user) => {
    return (
      <React.Fragment>
        <Container style={styles.avatarContainer}>
          <Container style={styles.editImageContainer}>
            <img alt='user-avatar' className={cx(styles.avatarIconStyle)} src={this.getUserImage(user)} />
            <input type='file' id='profileImage' accept='image/*' className={cx(styles.inputStyle)} onChange={this.fileChangeHandler} />
            <label htmlFor='profileImage' className={cx(styles.editImageIconContainer)}><svg className='mdi-icon ' width='14' height='14' fill='white' viewBox='0 0 24 24'><path d='M4,4H7L9,2H15L17,4H20C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7M12,9C13.66,9 15,10.34 15,12C15,13.66 13.66,15 12,15C10.34,15 9,13.66 9,12C9,10.34 10.34,9 12,9Z' /></svg></label>
          </Container>
        </Container>
        <Container style={styles.headerTextContainer}>
          <Text tag='h5' style={styles.headerNameTextStyle}>{user.name}</Text>
          <Text tag='h6' style={styles.headerUsernameTextStyle}>{user.username}</Text>
        </Container>
        { this.state.selectedProfileImage && (
          <Container style={styles.editAvatarOptionsContainer}>
            <Button
              primary
              onClick={this.handleAvatarSubmit}
              style={styles.editProfileButton}
              disabled={this.state.isSubmittingAvatar}
              type='submit'
            >
              Save {this.state.isSubmittingAvatar && <span className={cx(styles.spinnerIcon)}><Spinner size={18} width={4} /></span>}
            </Button>
            <Button
              onClick={this.onAvatarCancel}
              style={styles.editProfileButton}
              disabled={this.state.isSubmittingAvatar}
              link
            >
              Cancel
            </Button>
          </Container>
        )}
        <Container style={styles.detailsContainer}>
          <Container style={styles.profileHeaderContainer}>
            <Text tag='h5' style={styles.profileHeaderTextStyle}>My Profile</Text>
            <Button tag={Link} to={`/${user.username}`} target='_blank' style={styles.editProfileButton} secondary>View Profile<i className={`icon ion-md-person ${cx(styles.editIcon)}`} /></Button>
          </Container>
          <EditProfileForm user={user} onSubmit={this.handleProfileSubmit} />
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

UserProfile.propTypes = {
  user: PropTypes.object,
  getAuthUser: PropTypes.func
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(mapStateToProps, { getAuthUser })(UserProfile)
