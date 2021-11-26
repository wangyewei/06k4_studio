/*
 * @Autor: YeWei Wang
 * @Date: 2021-08-29 13:07:33
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-10-20 20:35:07
 * @Version: 1.0
 * @FilePath: \官网v1.0-react-ts-前端\studio-06k4\src\components\Nav\Nav.tsx
 */

import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChangeTheme } from '../ChangeTheme/ChangeTheme'
import classNames from "classnames";
import { useLocation, useHistory } from "react-router";
// import { useHistory } from "react-router";
export interface navItems {
  href?: string,
  txt?: string;
  back?: boolean;
}


const Nav: FC<any> = (props?) => {
  // const { back } = props
  const navItemsArr: navItems[] = [
    { href: 'home', txt: '主页' },
    { href: 'about', txt: '关于我们' },
    { href: 'services', txt: '产品服务' },
    { href: 'team', txt: '我的团队' },
    { href: 'contact', txt: '联系我们' }
  ]

  const [scorllHeader, setScrollHeader] = useState(false)
  const haderClass = classNames('l-header', {
    'scroll-header': scorllHeader
  })
  window.addEventListener('scroll', () => {
    window.scrollY >= 200 ? setScrollHeader(true) : setScrollHeader(false)
  })

  const [activeLink, setActiveLink] = useState<string>('home')
  const querySection = (): void => {
    const scorllY: number = window.pageYOffset
    const sectionEle: NodeList = document.querySelectorAll('section')
    sectionEle.forEach(el => {
      const sectionHeight: number = (el as HTMLElement).offsetHeight
      const sectionTop: number = (el as HTMLElement).offsetTop - 50
      const sectionId: string = (el as HTMLElement).getAttribute('id') as string
      if (scorllY > sectionTop && scorllY <= sectionTop + sectionHeight) {
        setActiveLink(`#${sectionId}`)
      }
    })
  }

  window.addEventListener('scroll', querySection)

  const [showMenu, setShowMenu] = useState(false)
  const menuClass = classNames('nav__menu', {
    'show-menu': showMenu
  })

  let location: string = useLocation().pathname

  const [back, setBack] = useState<boolean>(false)
  useEffect(() => {
    location === '/home' ? setBack(false) : setBack(true)
  }, [location])

  let history = useHistory()
  return (
    <header className={haderClass} id="header">
      <nav className="nav bd-container">
        {back ? <div className="nav__logo" onClick={() => history.go(-1)}><i className='bx bx-left-arrow-alt' style={{ fontSize: "1.4rem" }}></i></div> : <Link to="/home"><div className="nav__logo">06K4 Studio</div></Link>}
        <div className={menuClass} id="nav-menu">
          <ul className="nav__list">
            {back ?
              // <div className="search__content">
              //   <input className="search__inner" type="search" />
              //   <button className="search__btn"><i className='bx bx-search'></i></button></div>
              <div className="logo">06K4 STUDIO</div>
              : navItemsArr.map(item => {
                const classnames = classNames('nav__link', {
                  'active-link': `#${item.href}` === activeLink
                })
                return (
                  <li className="nav__item"
                    key={item.txt}
                  >
                    {/* <Link to={`/${item.href}`}> */}
                    <div className={classnames} onClick={() => {
                      const anchorName: string = item.href as string
                      const anchorEle = document.getElementById(anchorName)
                      anchorEle?.scrollIntoView()
                    }}>{item.txt}</div>
                    {/* </Link> */}
                  </li>
                )
              })}
            <li><ChangeTheme /></li>
          </ul>
        </div>

        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() => {
            setShowMenu(!showMenu)
          }}>
          <i className="bx bx-menu" />
        </div>
      </nav>
    </header>
  )
}

export default Nav