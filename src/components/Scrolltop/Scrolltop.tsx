/*
 * @Autor: YeWei Wang
 * @Date: 2021-09-17 15:17:15
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-09-22 00:24:33
 * @Version: 1.0
 * @FilePath: \官网v1.0-react-ts-前端\studio-06k4\src\components\Scrolltop\Scrolltop.tsx
 */

import React, { FC, useState } from "react";
import classNames from "classnames";
const Scrolltop: FC = () => {
  const [scroll, setScroll] = useState(false)
  window.addEventListener('scroll', () => {
    window.scrollY >= 560 ? setScroll(true) : setScroll(false)
  })

  const scrollTop = (): void => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  const cnames = classNames('scrolltop', {
    'show-scroll': scroll
  })


  return (
    <div className={cnames}
      id="scroll-top"
      onClick={scrollTop}
    >
      <i className="bx bx-chevron-up scrolltop__icon" />
    </div>

  )
}

export default Scrolltop
