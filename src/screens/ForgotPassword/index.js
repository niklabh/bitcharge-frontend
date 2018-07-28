import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { cx } from 'emotion'

import EmailForm from './EmailForm'
import Container from '../../components/Container'
import Text from '../../components/Text'

import API from '../../api'

import styles from './styles'

class ForgotPassword extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit (values, bag) {
    try {
      bag.setSubmitting(false)
      this.props.history.push('/profile')
    } catch (e) {
      console.log(e)
      bag.setSubmitting(false)
    }
  }

  render () {
    if (this.props.isAuthenticated) {
      return (<Redirect to='/profile' />)
    }

    return (
      <Container fluid fullHeight style={styles.mainContainer}>
        <Container fullHeight style={styles.heroContainer}>
          <Container style={styles.heroLogoContainer}>
            <a href='/'><img src={require('../../assets/images/logo-inverse.png')} /></a>
          </Container>
          <Container style={styles.heroTextContainer}>
            <img className={cx(styles.signupAvatarIconStyle)} src={require('../../assets/images/dog-icon.png')} />
            <Text tag='h3' style={styles.heroText}>Forgot Password</Text>
          </Container>
          <Container style={styles.heroFooterContainer}>
            <Text tag='h6'>Already have an account. <Link to='/signup' className={cx(styles.SignupLink)}>Login</Link></Text>
          </Container>
        </Container>
        <Container fullHeight style={styles.bodyContainer}>
          <Text tag='h1' style={styles.formHeaderText}>We have your back.</Text>
          <EmailForm onSubmit={this.handleSubmit} />
        </Container>
      </Container>
    )
  }
}

ForgotPassword.propTypes = {
  history: PropTypes.any,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(ForgotPassword)
