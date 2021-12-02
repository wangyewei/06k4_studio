/*
 * @Autor: YeWei Wang
 * @Date: 2021-11-12 11:25:00
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-12-02 09:07:02
 * @Version: 1.0
 * @FilePath: \06k4_studio\src\pages\Member\Member.tsx
 */
import React, { FC } from "react";
import { useLocation } from "react-router";

const Member: FC = () => {

  const location = useLocation()
  console.log(location.state)
  return (
    <main className="l-main">
      <section className="member section" id="member">
        <h1>hh</h1>
      </section>
    </main>
  )
}

export default Member