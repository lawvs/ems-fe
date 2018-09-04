import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import { get } from 'lodash'

import Analysis from '../Analysis'

class DashboardPage extends Component {
  render() {
    const { isLogin, logoutAction } = this.props

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
        <button onClick={logoutAction}>logout</button>
        <Link to="/dashboard/analysis">Analysis Page</Link>
        <Switch>
          <Route path="/dashboard/analysis" component={Analysis} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLogin: get(state, 'session.isLogin', false),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  logoutAction: () => dispatch({ type: '@@Session/logout' }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage)
