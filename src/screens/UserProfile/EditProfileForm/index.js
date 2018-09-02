import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { cx } from 'emotion'

import Container from '../../../components/Container'
import Text from '../../../components/Text'
import Button from '../../../components/Button'
import Input from '../../../components/Input'

import styles from './styles'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2),
  intro: Yup.string()
    .min(1)
})

const EditProfileForm = ({ onSubmit, user }) => {
  return (
    <Formik
      initialValues={{ name: user.name, intro: user.intro || null }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      render={({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        handleReset,
        errors,
        touched,
        isValid,
        isSubmitting
      }) => {
        return (
          <Container style={styles.formBodyContainer}>
            <Container style={styles.formItemContainer}>
              <Text tag='h5' style={styles.formItemLabel}>Full Name</Text>
              <Input
                name='name'
                inputContainerStyle={styles.inputContainerStyle}
                noErrorText
                inputStyle={styles.textInputStyle}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={touched.name && errors.name}
              />
            </Container>
            <Container style={styles.formItemContainer}>
              <Text tag='h5' style={styles.formItemLabel}>Intro</Text>
              <Input
                name='intro'
                noErrorText
                type='textarea'
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.textInputStyle}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.intro}
                error={touched.intro && errors.intro}
              />
            </Container>
            <Container style={cx(styles.formItemContainer, styles.formButtonContainer)}>
              <Button
                primary
                disabled={!isValid || isSubmitting}
                onClick={handleSubmit}
                style={styles.formButtonStyle}
                type='submit'
              >
                Save
              </Button>
              <Button
                onClick={handleReset}
                style={styles.formButtonStyle}
                link
              >
                Cancel
              </Button>
            </Container>
          </Container>
        )
      }} />
  )
}

EditProfileForm.propTypes = {
  onSubmit: PropTypes.func,
  user: PropTypes.object
}

export default EditProfileForm
