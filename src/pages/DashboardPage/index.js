import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import { translate } from 'react-i18next'
import { get } from 'lodash'

import { logout, loginState } from '../../redux/auth'
import { changeLng } from '../../redux/config'
import Analysis from '../Analysis'
import { lngList } from '../../i18n'

const DashboardPage = props => {
  const { isLogin, logout, t, lng, changeLng } = props

  if (!isLogin) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    )
  }

  return (
    <div>
      Nav
      <button onClick={logout}>{t('Log out')}</button>
      <select value={lng} onChange={e => changeLng(e.target.value)}>
        {lngList.map(lng => (
          <option value={lng.tag} key={lng.tag}>
            {lng.lng}
          </option>
        ))}
      </select>
      <Link to="/dashboard/analysis">Analysis Page</Link>
      <Switch>
        <Route path="/dashboard/analysis" component={Analysis} />
      </Switch>
    </div>
  )
}

const mapStateToProps = state => ({
  lng: get(state, 'config.lng'),
  isLogin:
    get(state, 'auth.loginState', loginState.NOT_LOGGED_IN) ===
    loginState.LOGGED_IN,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  changeLng: lng => dispatch(changeLng(lng)),
})

export default translate()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DashboardPage)
)
