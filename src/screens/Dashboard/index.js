import React, { Component } from 'react'

import Container from '../../components/Container'
import Text from '../../components/Text'

class Dashboard extends Component {
  render () {
    return (
      <Container fluid fullHeight>
        <Text tag='h1'>Welcome to the Dashboard page</Text>
      </Container>
    )
  }
}

export default Dashboard
