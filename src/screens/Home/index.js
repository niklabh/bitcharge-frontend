import React, { Component } from 'react'

import Container from '../../components/Container'
import Text from '../../components/Text'

class Home extends Component {
  render () {
    return (
      <Container fluid fullHeight>
        <Text tag='h1'>Welcome to the Home page</Text>
      </Container>
    )
  }
}

export default Home
