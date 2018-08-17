import React, { Component } from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { cx } from 'emotion'

import SignupForm from './SignupForm'
import SignupSuccess from './SignupSuccess'
import Container from '../../components/Container'
import Text from '../../components/Text'

import { signup as signupAction } from '../../store/actions/auth'
import API from '../../api'

import styles from './styles'

class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSignupSuccess: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit (values, bag) {
    try {
      const data = await API.signup(values)
      bag.setSubmitting(false)
      this.setState({ isSignupSuccess: true })
      this.props.signupAction(data.user)
    } catch (e) {
      console.log(e)
      bag.setSubmitting(false)
    }
  }

  render () {
    if (this.props.isAuthenticated && !this.state.isSignupSuccess) {
      return (<Redirect to='/profile' />)
    }

    const PoseSignupForm = posed(SignupForm)({
      visible: { opacity: 1 },
      invisible: { opacity: 0, display: 'none' }
    })

    const PoseSignupSuccess = posed(SignupSuccess)({
      visible: { opacity: 1 },
      invisible: { opacity: 0, display: 'none' }
    })

    return (
      <Container fluid fullHeight style={styles.mainContainer}>
        <Container fullHeight style={styles.heroContainer}>
          <Container style={styles.heroLogoContainer}>
            <a href='/'><img src={require('../../assets/images/logo-inverse.png')} /></a>
          </Container>
          <Container style={styles.heroTextContainer}>
            <img className={cx(styles.signupAvatarIconStyle)} src={require('../../assets/images/dog-icon.png')} />
            <Text tag='h3' style={styles.heroText}>Let's get you set up.</Text>
          </Container>
          <Container style={styles.heroFooterContainer}>
            <Text tag='h6'>Already have an account. <Link to='/login' className={cx(styles.LoginLink)}>Login</Link></Text>
          </Container>
        </Container>
        <Container fullHeight style={styles.bodyContainer}>
          <PoseSignupForm pose={this.state.isSignupSuccess ? 'invisible' : 'visible'} onSubmit={this.handleSubmit} />
          <PoseSignupSuccess pose={this.state.isSignupSuccess ? 'visible' : 'invisible'} />
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

Signup.propTypes = {
  signupAction: PropTypes.func,
  isAuthenticated: PropTypes.bool
}

export default connect(mapStateToProps, { signupAction })(Signup)
