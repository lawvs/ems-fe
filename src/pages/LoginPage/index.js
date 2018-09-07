import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { get } from 'lodash'

import { login, loginState as loginStateEnums } from '../../redux/auth'
class LoginPage extends Component {
  state = {
    message: '',
  }

  componentWillUpdate(nextProps) {
    if (nextProps.message !== '') {
      this.setState({ message: nextProps.message })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const username = this.refs.username.value
    const password = this.refs.password.value
    // valid
    if (!username) {
      this.setState({ message: '请输入用户名' })
      return
    }
    if (!password) {
      this.setState({ message: '请输入密码' })
      return
    }
    const { login } = this.props
    login({ username, password })
  }

  handleChange = e => {
    this.setState({ message: '' }) // clear message when input change
  }

  render() {
    const { loginState } = this.props
    const { message } = this.state

    const { from } = this.props.location.state || {
      from: { pathname: '/dashboard' },
    }

    if (loginState === loginStateEnums.LOGGED_IN) {
      return <Redirect to={from.pathname} />
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref="username"
          placeholder="Username"
          onChange={this.handleChange}
        />
        <input
          ref="password"
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <button type="submit">登录</button>
        <span>{message}</span>
      </form>
    )
  }
}

/** @readonly */
const mapStateToProps = state => ({
  loginState: get(state, 'auth.loginState', loginStateEnums.NOT_LOGGED_IN),
  message: get(state, 'auth.message', ''),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: payload => dispatch(login(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
