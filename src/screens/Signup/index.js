import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { cx } from 'emotion'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Spinner from '../../components/Spinner'

import styles from './styles'

class Signup extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.validationSchema = Yup.object().shape({
      email: Yup.string()
        .email('Not a valid email')
        .required('Email is required'),
      username: Yup.string()
        .min(4)
        .required('Username is required'),
      password: Yup.string()
        .min(6)
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password', null)], 'Passwords must match')
        .required('Confirm password is required')
    })
  }

  handleSubmit (values, bag) {
    console.log(values)
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
            <Text tag='h3' style={styles.heroText}>Let's get you set up.</Text>
          </Container>
          <Container style={styles.heroFooterContainer}>
            <Text tag='h6'>Already have an account. <Link to='/login' className={cx(styles.LoginLink)}>Login</Link></Text>
          </Container>
        </Container>
        <Container fullHeight style={styles.bodyContainer}>
          <Container style={styles.formContainer}>
            <Formik
              initialValues={{ email: '', username: '', password: '', confirmPassword: '' }}
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
                      label='Username'
                      name='username'
                      placeholder='awesome-doggo'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      error={touched.username && errors.username}
                    />
                    <Input
                      label='Email'
                      name='email'
                      type='email'
                      placeholder='specksy@doggo.co'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={touched.email && errors.email}
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
                    <Input
                      label='Confirm Password'
                      name='confirmPassword'
                      type='password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      error={touched.confirmPassword && errors.confirmPassword}
                    />
                    <Container style={styles.buttonContainer}>
                      <Button
                        primary
                        disabled={!isValid || isSubmitting}
                        type='submit'
                        style={styles.submitButton}
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

export default Signup
