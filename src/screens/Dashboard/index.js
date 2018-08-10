import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import UserProfile from '../UserProfile'
import Addresses from '../Addresses'
import Settings from '../Settings'

import DashboardNavbar from '../../containers/DashboardNavbar'
import Container from '../../components/Container'

import styles from './styles'

class Dashboard extends Component {
  render () {
    return (
      <Container fluid fullHeight style={styles.mainContainer}>
        <DashboardNavbar />
        <Route path='/profile/addresses' component={Addresses} />
        <Route path='/profile/settings' component={Settings} />
        <Route exact path='/profile' component={UserProfile} />
      </Container>
    )
  }
}

export default Dashboard
