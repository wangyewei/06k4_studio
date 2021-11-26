/*
 * @Autor: YeWei Wang
 * @Date: 2021-09-16 21:07:36
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-11-12 19:30:21
 * @Version: 1.0
 * @FilePath: \studio-06k4\src\routes\base.ts
 */

// import { FC } from 'react'
import { Notice, History, Notices, Products, Films, Member } from '../pages'

export const baseUrl = {
  notice: '/notice',
  history: '/history',
  team: '/team',
  notices: '/notice/notices/:id',
  products: '/products',
  films: '/films',
  member: '/member/:name'
}

// interface RouterBaseGen {
//   path: string;
//   component: FC;
//   root: any[]
// }

const baseRouters = [
  {
    path: baseUrl.notice,
    component: Notice,
    root: []
  },
  {
    path: baseUrl.history,
    component: History,
    root: []
  },
  {
    path: baseUrl.notices,
    component: Notices,
    root: []
  },
  {
    path: baseUrl.products,
    component: Products,
    root: []
  },
  {
    path: baseUrl.films,
    component: Films,
    root: []
  },
  {
    path: baseUrl.member,
    component: Member,
    root: []
  }
]

export default baseRouters