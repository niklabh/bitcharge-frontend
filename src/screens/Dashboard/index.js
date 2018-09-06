import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import UserProfile from '../UserProfile'
import Addresses from '../Addresses'
import Settings from '../Settings'

import DashboardNavbar from '../../containers/DashboardNavbar'
import Container from '../../components/Container'
import Footer from '../../components/Footer'

import { fetchAddresses } from '../../store/actions/address'

import styles from './styles'

class Dashboard extends Component {
  componentDidMount () {
    this.props.fetchAddresses()
  }

  render () {
    return (
      <Container fluid fullHeight style={styles.mainContainer}>
        <DashboardNavbar />
        <Route path='/profile/addresses' component={Addresses} />
        <Route path='/profile/settings' component={Settings} />
        <Route exact path='/profile' component={UserProfile} />
        <Footer />
      </Container>
    )
  }
}

Dashboard.propTypes = {
  fetchAddresses: PropTypes.func
}

export default connect(null, { fetchAddresses })(Dashboard)
