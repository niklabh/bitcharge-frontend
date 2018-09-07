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
  password: Yup.string()
    .min(6)
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password', null)], 'Passwords must match')
    .required('Confirm password is required')
})

const PasswordForm = ({ handleSubmit }) => {
  return (
    <Container style={styles.formContainer}>
      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        onSubmit={handleSubmit}
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
                <Button tag={Link} to='/login' link style={styles.cancelButton}>Cancel</Button>
              </Container>
            </React.Fragment>
          )
        }} />
    </Container>
  )
}

PasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default PasswordForm
