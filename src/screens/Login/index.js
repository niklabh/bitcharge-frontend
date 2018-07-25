import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { cx } from 'emotion'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Spinner from '../../components/Spinner'

import API from '../../api'
import { login as loginAction } from '../../store/actions/auth'

import styles from './styles'

class Login extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.validationSchema = Yup.object().shape({
      loginField: Yup.string()
        .email('Not a valid email')
        .required('Email is required'),
      password: Yup.string()
        .min(6)
        .required('Password is required')
    })
  }

  async handleSubmit (values, bag) {
    try {
      const data = await API.login(values)
      this.props.loginAction(data.user)
      bag.setSubmitting(false)
      this.props.history.push('/profile')
    } catch (e) {
      console.log(e)
      bag.setSubmitting(false)
    }
  }

  render () {
    return (
      <Container fluid fullHeight style={styles.mainContainer}>
        <Container fullHeight style={styles.heroContainer}>
          <Container style={styles.heroLogoContainer}>
            <a href='/'><img src={require('../../assets/images/logo-inverse.png')} /></a>
          </Container>
          <Container style={styles.heroTextContainer}>
            <img className={cx(styles.signupAvatarIconStyle)} src={require('../../assets/images/dog-icon.png')} />
            <Text tag='h3' style={styles.heroText}>Welcome back.</Text>
          </Container>
          <Container style={styles.heroFooterContainer}>
            <Text tag='h6'>Don't have an account. <Link to='/signup' className={cx(styles.SignupLink)}>Signup</Link></Text>
          </Container>
        </Container>
        <Container fullHeight style={styles.bodyContainer}>
          <Container style={styles.formContainer}>
            <Formik
              initialValues={{ loginField: '', password: '' }}
              onSubmit={this.handleSubmit}
              validationSchema={this.validationSchema}
              render={({
                values,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
                errors,
                isValid,
                isSubmitting
              }) => {
                return (
                  <React.Fragment>
                    <Input
                      label='Username or Email'
                      name='loginField'
                      type='email'
                      placeholder='awesome-doggo'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.loginField}
                      error={touched.loginField && errors.loginField}
                    />
                    <Input
                      label='Password'
                      name='password'
                      type='password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      error={touched.password && errors.password}
                    />
                    <Container style={styles.buttonContainer}>
                      <Button
                        primary
                        disabled={!isValid || isSubmitting}
                        type='submit'
                        style={styles.submitButton}
                        onClick={handleSubmit}
                      >
                        Submit {isSubmitting && <span className={cx(styles.spinnerIcon)}><Spinner size={20} width={4} /></span>}
                      </Button>
                      <Button onClick={handleReset} link style={styles.cancelButton}>Reset</Button>
                    </Container>
                  </React.Fragment>
                )
              }} />
          </Container>
        </Container>
      </Container>
    )
  }
}

Login.propTypes = {
  loginAction: PropTypes.func,
  history: PropTypes.any
}

export default connect(null, { loginAction })(Login)
