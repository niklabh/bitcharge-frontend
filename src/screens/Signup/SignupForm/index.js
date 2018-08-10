import React from 'react'
import PropTypes from 'prop-types'
import { cx } from 'emotion'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Container from '../../../components/Container'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Spinner from '../../../components/Spinner'

import styles from './styles'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Not a valid email')
    .required('Email is required'),
  name: Yup.string()
    .min(3)
    .required('Name is required'),
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

const SignupForm = ({ onSubmit, hostRef }) => {
  return (
    <Container hostRef={hostRef} style={styles.formContainer}>
      <Formik
        initialValues={{ email: '', username: '', password: '', confirmPassword: '', name: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
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
                label='Full Name'
                name='name'
                placeholder='Doggo Best'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                error={touched.name && errors.name}
              />
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
  )
}

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  hostRef: PropTypes.any
}

export default SignupForm
