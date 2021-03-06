import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { initGA, logPageView } from '../../utils/analytics'
import Container from '../../components/Container'
import PrivateRoute from '../../containers/PrivateRoute'
import { getAuthUser } from '../../store/actions/auth'

import styles from './styles'

class Root extends Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
    if (this.props.isAuthenticated) {
      this.props.getAuthUser()
    }
  }
  render () {
    const { routes, initialData } = this.props
    return (
      <Container fluid fullHeight style={styles.mainContainer}>
        <Helmet>
          <title>Bitcharge - The easiest way to accept crypto payments</title>
          <meta name='description' content='Bitcharge is the easiest way for users and businesses to accept payments in their favourite cryptocurrency. Start accepting payments and donations in Bitcoin, Ethereum and many other cryptocurrencies.' />
          <meta property='og:title' content='Bitcharge - The easiest way to accept crypto payments' />
          <meta property='og:site_name' content='Bitcharge' />
          <meta property='og:type' content='website' />
          <meta property='og:description' content='Bitcharge is the easiest way for users and businesses to accept payments in their favourite cryptocurrency. Start accepting payments and donations in Bitcoin, Ethereum and many other cryptocurrencies.' />
          <meta property='og:image' content='https://res.cloudinary.com/bitcharge/image/upload/v1536051435/assets/bitcharge-social-graph.png' />
          <meta property='og:image:alt' content='Bitcharge' />
          <meta property='og:url' content='https://bitcharge.co' />

          <meta itemProp='name' content='Bitcharge - The easiest way to accept crypto payments' />
          <meta itemProp='description' content='Bitcharge is the easiest way for users and businesses to accept payments in their favourite cryptocurrency. Start accepting payments and donations in Bitcoin, Ethereum and many other cryptocurrencies.' />
          <meta itemProp='image' content='https://res.cloudinary.com/bitcharge/image/upload/v1536051435/assets/bitcharge-social-graph.png' />

          <meta property='fb:app_id' content='1928411100786366' />
          <meta property='twitter:title' content='Bitcharge - The easiest way to accept crypto payments' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@bitcharge_co' />
          <meta name='twitter:creator' content='@bitcharge_co' />
          <meta name='twitter:description' content='Bitcharge is the easiest way for users and businesses to accept payments in their favourite cryptocurrency. Start accepting payments and donations in Bitcoin, Ethereum and many other cryptocurrencies.' />
        </Helmet>
        <Switch>
          {
            routes.map((route, index) => {
              const Tag = route.private ? PrivateRoute : Route
              return (
                <Tag
                  key={index}
                  path={route.path}
                  exact={route.exact || false}
                  render={props =>
                    React.createElement(route.component, {
                      ...props,
                      initialData: initialData[index] || null
                    })}
                />
              )
            })
          }
        </Switch>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

Root.propTypes = {
  isAuthenticated: PropTypes.bool,
  getAuthUser: PropTypes.func,
  routes: PropTypes.array,
  initialData: PropTypes.array
}

export default withRouter(connect(mapStateToProps, { getAuthUser })(Root))
