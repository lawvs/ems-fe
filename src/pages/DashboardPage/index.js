import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import Analysis from '../Analysis'

class DashboardPage extends Component {
  render() {
    const { authenticated } = this.props.location.state || {
      authenticated: false,
    }
    if (!authenticated) {
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
        <Link to="/dashboard/analysis">Analysis Page</Link>
        <Switch>
          <Route path="/dashboard/analysis" component={Analysis} />
        </Switch>
      </div>
    )
  }
}

export default DashboardPage
