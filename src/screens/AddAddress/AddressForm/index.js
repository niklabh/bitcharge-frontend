import React from 'react'
import PropTypes from 'prop-types'
import { components } from 'react-select'
import { cx } from 'emotion'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

import Container from '../../../components/Container'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Spinner from '../../../components/Spinner'
import Text from '../../../components/Text'

import API from '../../../api'

import styles from './styles'

const validationSchema = Yup.object().shape({
  loginField: Yup.string()
    .email('Not a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6)
    .required('Password is required')
})

const selectStyles = {
  control: base => ({ ...base, ...styles.selectStyle }),
  container: base => ({ ...base, width: '100%' }),
  indicatorsContainer: base => ({ ...base, transition: 'all 0.3s ease-out' }),
  option: base => ({ ...styles.dropdownItemStyle })
}

const DropdownItem = (props) => {
  const { isDisabled, data } = props
  console.log(props)
  return (
    !isDisabled ? (
      <components.Option {...props}>
        <img src={data.icon} className={cx(styles.dropdownItemImage)} /><Text tag='h5' unstyled>{data.name}</Text>
      </components.Option>
    ) : null
  )
}

const getCurrenciesOption = (inputVaue) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await API.getCurrencies()
      resolve(data.currencies)
    } catch (e) {
      reject(e)
    }
  })
}

const AddressForm = ({ onSubmit }) => {
  return (
    <Container style={styles.formContainer}>
      <Formik
        initialValues={{ currency: '', address: '' }}
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
                label='Currency'
                name='currency'
                type='async-select'
                styles={selectStyles}
                components={{ Option: DropdownItem }}
                getOptionLabel={({ name }) => name}
                getOptionValue={({ symbol }) => symbol}
                cacheOptions
                defaultOptions
                error={touched.currency && errors.currency}
                loadOptions={getCurrenciesOption}
              />
              <Input
                label='Your address'
                name='password'
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

AddressForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AddressForm
