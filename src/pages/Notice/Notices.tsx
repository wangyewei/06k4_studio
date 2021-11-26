/*
 * @Autor: YeWei Wang
 * @Date: 2021-10-20 20:15:56
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-10-21 18:56:02
 * @Version: 1.0
 * @FilePath: \官网v1.0-react-ts-前端\studio-06k4\src\pages\Notice\Notices.tsx
 */

import React, { FC, useEffect, useState } from 'react'
import { useLocation } from "react-router";
import { getNoticeList } from '../../api/networks'
import { getYMDHMS } from '../../tools/time'
import ScrollReveal from 'scrollreveal'

const Notices: FC = (props) => {
  const [data, setData] = useState<any[]>([])
  const location = useLocation()
  const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
  })

  useEffect(() => {
    sr.reveal(`.notices__container, .title`, {
      interval: 200
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getNoticeList({ id: location.state }).then(res => {
      setData(res.result)
    })

  }, [location.state])

  return (
    <main className="l-main">
      <section className="section notices" id="notices">
        <div className="notices__container bd-grid bd-container container">
          {data.map(item => (
            <div className="notices__data" key={item._id}>
              <div className="title">{item.title}</div>
              <div className="author">{item.author}</div>
              <div className="time">{getYMDHMS(item.time)}</div>
              <div className="content">{item.content}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Notices