import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'

class LoginPage extends Component {
  state = {
    redirectToReferrer: false,
  }
  handleSubmit = () => {
    this.setState({ redirectToReferrer: true })
    return true
  }

  render() {
    const { routerData, match } = this.props
    const { from } = this.props.location.state || {
      from: { pathname: '/dashboard' },
    }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect
          to={{
            pathname: from.pathname,
            state: { authenticated: true },
          }}
        />
      )
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>登录</button>
      </form>
    )
  }
}

export default LoginPage
