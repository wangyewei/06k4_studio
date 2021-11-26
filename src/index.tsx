/*
 * @Autor: YeWei Wang
 * @Date: 2021-08-29 12:06:03
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-10-20 10:58:09
 * @Version: 1.0
 * @FilePath: \官网v1.0-react-ts-前端\studio-06k4\src\index.tsx
 */
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/styles/index.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Scorlltop from './components/Scrolltop/Scrolltop'
import { footerProps } from './data/uiStaticData'



ReactDOM.render(
  <div>
    <BrowserRouter>
      <Scorlltop />
      <Suspense fallback={<div></div>}>
        <Nav />
        <Switch>
          <Route path="/" render={routerProps => {
            return <App {...routerProps} />
          }} />
        </Switch>
        <Footer {...footerProps} />
      </Suspense>
    </BrowserRouter>

  </div>,
  document.getElementById('root')
)