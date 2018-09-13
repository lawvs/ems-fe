import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'
import { get } from 'lodash'

import { login, loginState as loginStateEnums } from '../../redux/auth'
@translate()
class LoginPage extends Component {
  static propTypes = {
    message: PropTypes.string,
    login: PropTypes.func.isRequired,
    loginState: PropTypes.string.isRequired,
  }

  state = {
    message: '',
    username: '',
    password: '',
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.message !== prevProps.message && // message change
      this.props.message !== this.state.message
    ) {
      this.setState({ message: this.props.message })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state
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
    const { loginState, t } = this.props
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
          ref={input => (this.username = input.value)}
          placeholder={t('Username')}
          onChange={this.handleChange}
        />
        <input
          ref={input => (this.password = input.value)}
          type="password"
          placeholder={t('Password')}
          onChange={this.handleChange}
        />
        <button type="submit">{t('Log in')}</button>
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
