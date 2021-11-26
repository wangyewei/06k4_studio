/*
 * @Autor: YeWei Wang
 * @Date: 2021-09-17 12:54:41
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-10-20 14:44:19
 * @Version: 1.0
 * @FilePath: \官网v1.0-react-ts-前端\studio-06k4\src\components\Footer\Footer.tsx
 */

import React, { FC } from 'react'
import classNames from 'classnames'
// import ScrollReveal from 'scrollreveal'
// import { useLocation } from 'react-router-dom'
export interface FooterObj {
  title?: string;
  texts?: string[];
}

export interface IconData {
  href?: string;
  icon?: string;
}

export interface FooterInfo {
  logo?: string;
  // logoClick?: () => void;
  logoToUrl?: string;
  desc?: string;
  socialIcon?: IconData[];
  footerTitle?: FooterObj[];
  copyright?: string;
  records?: string;
}

const Footer: FC<FooterInfo> = (props) => {
  const { logo, logoToUrl, desc, socialIcon, footerTitle, copyright, records } = props
  // const location = useLocation().pathname


  // useEffect(() => {

  //   console.log(location)
  // }, [location])



  return (
    <footer className="footer bd-container">
      <div className="footer__container bd-grid">
        <a href={logoToUrl} className="footer__logo">{logo}</a>
        <span className="footer__description">{desc}</span>

        <div>
          {socialIcon ? socialIcon.map(item => {
            const iconCname = classNames('bx', `bxl-${item.icon}`)
            return (

              <a href={item.href} className="footer__social" key={item.icon}>
                <i className={iconCname} />
                {/* {item.icon} */}
              </a>
            )
          }) : false}
        </div>
      </div>


      {
        footerTitle ? footerTitle.map(item => {
          return (
            <div className="footer__content" key={item.title}>
              <div className="footer__title">{item.title}</div>
              <ul>
                {item.texts?.map(i => {
                  return (
                    <li key={i} className="footer__link">{i}</li>
                  )
                })}
              </ul>
            </div>
          )
        }) : false
      }

      <p className="footer__copy">{copyright} <br />
        {records}</p>
      {/* <p className="footer__copy"></p> */}
    </footer>
  )
}

export default Footer