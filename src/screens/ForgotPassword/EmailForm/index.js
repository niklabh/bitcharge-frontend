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
  email: Yup.string()
    .email('Not a valid email')
    .required('Email is required')
})

const EmailForm = ({ handleSubmit }) => {
  return (
    <Container style={styles.formContainer}>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={this.handleSubmit}
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
                name='email'
                type='email'
                placeholder='awesome@doggo.co'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={touched.email && errors.email}
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

EmailForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default EmailForm
