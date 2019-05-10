import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class PrivateRoute extends Component {

  render() {
    const {
      isAuthenticated,
      component: MyComponent,
      ...rest
    } = this.props;
    return (
      <Route {...rest} render={(props) =>
        isAuthenticated ? <MyComponent {...props}/> : <Redirect to="/login"/> }/>
    )
  }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.user.isAuthenticated
    }
}
export default connect(mapStateToProps)(PrivateRoute)