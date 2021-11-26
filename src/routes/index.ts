/*
 * @Autor: YeWei Wang
 * @Date: 2021-09-16 20:10:26
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-09-16 21:10:37
 * @Version: 1.0
 * @FilePath: \官网v1.0-react-ts-前端\studio-06k4\src\routes\index.ts
 */

import React from "react";
import { Home } from "../pages";
import baseRouters from './base'
export type RouterType = {
  path: string,
  component: React.LazyExoticComponent<any>,
  root: string[],
  notExcet?: boolean
}

const HomeRouter = {
  path: '/home',
  component: Home,
  root: []
}

const Routers: RouterType[] = ([
  HomeRouter,
  ...baseRouters
])

export { Routers }