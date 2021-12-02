/*
 * @Autor: YeWei Wang
 * @Date: 2021-09-17 13:55:34
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-12-02 16:07:45
 * @Version: 1.0
 * @FilePath: \06k4_studio\src\data\uiStaticData.ts
 */

import { FooterInfo, IconData, FooterObj } from '../components/Footer/Footer'

const iconArr: IconData[] = [
  {
    href: '#',
    icon: 'facebook'
  },
  {
    href: '#',
    icon: 'instagram'
  },
  {
    href: '#',
    icon: 'twitter'
  }
]

const services: FooterObj[] = [
  {
    title: 'Services',
    texts: ['Software devolpment', 'Programing training', 'Microfilm making', 'Network security']
  },
  {
    title: 'Infomation',
    texts: ['Event', 'Contact us', 'Privacy plicy', 'Terms of services']
  },
  {
    title: 'Address',
    texts: ['Chengdu - China', 'Yewei Wang', '+86 191 - 6275 - 7026', 'wangyewei1@foxmail.com']
  }
]

const copy = `©2019-2021 06k4 Studio. All right reserved. ©2019-2021 攀枝花市东区零六克斯工作室`

export const footerProps: FooterInfo = {
  logo: '06k4 Studio',
  logoToUrl: '#',
  desc: 'Technology studio',
  socialIcon: iconArr,
  footerTitle: services,
  copyright: copy,
  records: '蜀ICP备 2021030366 号'
}

