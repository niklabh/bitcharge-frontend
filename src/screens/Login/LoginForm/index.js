import React from 'react'
import PropTypes from 'prop-types'
import { cx } from 'emotion'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

import Container from '../../../components/Container'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Spinner from '../../../components/Spinner'

import styles from './styles'

const validationSchema = Yup.object().shape({
  loginField: Yup.string()
    .required('Email is required'),
  password: Yup.string()
    .min(6)
    .required('Password is required')
})

const LoginForm = ({ onSubmit }) => {
  return (
    <Container style={styles.formContainer}>
      <Formik
        initialValues={{ loginField: '', password: '' }}
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
                <Button tag={Link} to='/forgot' link style={styles.cancelButton}>Forgot Password</Button>
              </Container>
            </React.Fragment>
          )
        }} />
    </Container>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default LoginForm
