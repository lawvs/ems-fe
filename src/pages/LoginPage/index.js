import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { get } from 'lodash'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    message: '',
    loading: false,
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      message: '', // clear message when input change
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { loginAction } = this.props
    const { username, password } = this.state
    // TODO login
    const login = () => {
      if (username === 'root' && password === '123') {
        loginAction({ username, password })
        return
      }
      this.setState({ message: '用户名或密码错误' })
    }
    login()
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
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
          placeholder="Username"
        />
        <input
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          type="password"
          placeholder="Password"
        />
        <button type="submit">登录</button>
        <span>{this.state.message}</span>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  isLogin: get(state, 'session.isLogin', false),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginAction: payload =>
    dispatch({
      type: '@@Session/login',
      ...payload,
    }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
