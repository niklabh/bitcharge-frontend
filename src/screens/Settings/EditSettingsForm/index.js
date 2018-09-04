import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { cx } from 'emotion'

import Container from '../../../components/Container'
import Text from '../../../components/Text'
import Button from '../../../components/Button'
import Input from '../../../components/Input'

import styles from '../styles'

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2),
  password: Yup.string()
    .min(6)
})

const EditSettingsForm = ({ onSubmit, onCancel, user }) => {
  return (
    <Formik
      initialValues={{ username: user.username, password: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      render={({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched,
        isValid,
        isSubmitting
      }) => {
        return (
          <Container style={styles.settingsBodyContainer}>
            <Container style={styles.settingsItemContainer}>
              <Text tag='h5' style={styles.settingsItemLabel}>Username</Text>
              <Input
                name='username'
                noErrorText
                inputStyle={styles.textInputStyle}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                error={touched.username && errors.username}
              />
            </Container>
            <Container style={styles.settingsItemContainer}>
              <Text tag='h5' style={styles.settingsItemLabel}>Email</Text>
              <Text tag='h5' style={styles.settingsItemValue}>{user.email}</Text>
            </Container>
            <Container style={styles.settingsItemContainer}>
              <Text tag='h5' style={styles.settingsItemLabel}>Password</Text>
              <Input
                name='password'
                noErrorText
                inputStyle={styles.textInputStyle}
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={touched.password && errors.password}
              />
            </Container>
            <Container style={styles.settingsItemContainer}>
              <Text tag='h5' style={styles.settingsItemLabel}>Email Verification</Text>
              {user.active
                ? <Text tag='h5' style={styles.settingsItemValue}>Verified <i className={`icon ion-md-checkmark-circle-outline ${cx(styles.verifiedIcon)}`} /></Text>
                : <Button secondary style={styles.editSettingsButton}>Resend Email<i className={`icon ion-md-arrow-round-forward ${cx(styles.editIcon)}`} /></Button>}
            </Container>
            <Container style={cx(styles.settingsItemContainer, styles.editButtonContainer)}>
              <Button
                primary
                disabled={!isValid || isSubmitting}
                onClick={handleSubmit}
                style={styles.editAddressSaveButton}
                type='submit'
              >
                Save
              </Button>
              <Button
                onClick={onCancel}
                style={styles.editAddressCancelButton}
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

EditSettingsForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  user: PropTypes.object
}

export default EditSettingsForm
