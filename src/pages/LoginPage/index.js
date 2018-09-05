import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { get } from 'lodash'

import { login } from '../../redux/auth'
class LoginPage extends Component {
  state = {
    message: '', // UNUSED
    loading: false, // UNUSED
  }

  handleSubmit = e => {
    e.preventDefault()
    const { login } = this.props
    const username = this.refs.username.value
    const password = this.refs.password.value
    login({ username, password })
  }

  render() {
    const { isLogin } = this.props

    const { from } = this.props.location.state || {
      from: { pathname: '/dashboard' },
    }

    if (isLogin) {
      return <Redirect to={from.pathname} />
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref="username" placeholder="Username" />
        <input ref="password" type="password" placeholder="Password" />
        <button type="submit">登录</button>
        <span>{this.state.message}</span>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  isLogin: get(state, 'auth.isLogin', false),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: payload => dispatch(login(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
