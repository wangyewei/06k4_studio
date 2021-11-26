/*
 * @Autor: YeWei Wang
 * @Date: 2021-09-16 20:14:31
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-11-12 11:27:35
 * @Version: 1.0
 * @FilePath: \studio-06k4\src\pages\index.ts
 */

import { lazy } from "react";

const Home = lazy(() => import('./Home/Home'))
const Notice = lazy(() => import('./Notice/Notice'))
const History = lazy(() => import('./History/History'))
const Notices = lazy(() => import('./Notice/Notices'))
const Products = lazy(() => import('./Product/Products'))
const Films = lazy(() => import('./Films/Films'))
const Member = lazy(() => import('./Member/Member'))
export {
  Home,
  Notice,
  History,
  Notices,
  Products,
  Films,
  Member
}