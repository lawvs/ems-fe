import React, { Component } from 'react'
// https://github.com/ReactTraining/react-router
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import LoginPage from '../LoginPage'
import DashboardPage from '../DashboardPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/login" component={LoginPage} />
          {/* <Route path="/regist" component={Regist} /> */}
          <Route path="/dashboard" component={DashboardPage} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    )
  }
}

export default App
