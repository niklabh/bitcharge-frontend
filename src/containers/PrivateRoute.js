import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

const PrivateRoute = ({ isAuthenticated, ...rest }) => {
  if (isAuthenticated) {
    return <Route {...rest} />
  } else {
    return <Redirect to={{ pathname: '/login' }} />
  }
}
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.any
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default withRouter(connect(mapStateToProps, null)(PrivateRoute))
