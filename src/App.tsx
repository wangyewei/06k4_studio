/*
 * @Autor: YeWei Wang
 * @Date: 2021-08-29 12:06:03
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-09-16 21:00:15
 * @Version: 1.0
 * @FilePath: \官网v1.0-react-ts-前端\studio-06k4\src\App.tsx
 */
import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router";
// import { Home } from './pages'
import { Routers } from './routes'

const App = () => {
  return (
    <Switch>
      {
        Routers.map(router => (
          <Route
            exact={!router.notExcet}
            key={router.path}
            path={router.path}
            component={router.component}>
          </Route>
        ))
      }
      <Redirect path="/" to="/home" />
    </Switch>
  )
}

export default withRouter(App)