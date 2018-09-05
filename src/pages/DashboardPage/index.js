import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import { get } from 'lodash'

import { logout } from '../../redux/auth'
import Analysis from '../Analysis'

class DashboardPage extends Component {
  render() {
    const { isLogin, logout } = this.props

    if (!isLogin) {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: this.props.location },
          }}
        />
      )
    }

    return (
      <div>
        Nav
        <button onClick={logout}>logout</button>
        <Link to="/dashboard/analysis">Analysis Page</Link>
        <Switch>
          <Route path="/dashboard/analysis" component={Analysis} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLogin: get(state, 'auth.isLogin', false),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage)
