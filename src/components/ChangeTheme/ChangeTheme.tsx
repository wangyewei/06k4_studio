/*
 * @Autor: YeWei Wang
 * @Date: 2021-09-23 12:03:02
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-09-27 18:55:45
 * @Version: 1.0
 * @FilePath: \官网v1.0-react-ts-前端\studio-06k4\src\components\ChangeTheme\ChangeTheme.tsx
 */
import React, { FC, useState, useEffect } from "react";
import classNames from "classnames";

export interface ChangeThemeProps {
  onThemeChange?: Function;
}

export const ChangeTheme: FC<ChangeThemeProps> = (props) => {
  useEffect(() => {
    if (selectedcTheme) document.body.classList.toggle('dark-theme')
    // 模拟生命周期
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const selectedcTheme = JSON.parse(localStorage.getItem('selected-theme') as string)
  const [theme, setTheme] = useState<boolean>(selectedcTheme ? true : false)

  const cnames = classNames('bx', 'change-theme', 'bx-moon', {
    'bx-sun': theme
  })

  return (
    <i className={cnames}
      id="theme-button"
      onClick={() => {
        setTheme(!theme)
        localStorage.setItem('selected-theme', `${!theme}`)
        document.body.classList.toggle('dark-theme')
      }} />
  )
}