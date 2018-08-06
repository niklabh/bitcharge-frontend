import React, { Component } from 'react'
import { cx } from 'emotion'

import Container from '../../components/Container'
import Text from '../../components/Text'

import AddressForm from './AddressForm'

import styles from './styles'

class AddAddress extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit (values, bag) {
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
            <img className={cx(styles.addressAvatarIconStyle)} src={require('../../assets/images/dog-icon.png')} />
            <Text tag='h3' style={styles.heroText}>Add your addresses</Text>
          </Container>
        </Container>
        <Container fullHeight style={styles.bodyContainer}>
          <AddressForm onSubmit={this.handleSubmit} />
        </Container>
      </Container>
    )
  }
}

export default AddAddress
