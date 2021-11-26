/*
 * @Autor: YeWei Wang
 * @Date: 2021-09-16 21:06:09
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 公告页面
 * @LastEditTime: 2021-10-21 12:16:24
 * @Version: 1.0
 * @FilePath: \官网v1.0-react-ts-前端\studio-06k4\src\pages\Notice\Notice.tsx
 */
import React, { FC, useEffect, useState } from 'react'
import { getNoticeList } from '../../api/networks'
import { getYMDHMS } from '../../tools/time'
import { useHistory } from 'react-router'
import ScrollReveal from 'scrollreveal'
const Home: FC = () => {
  const [list, setList] = useState<any[]>([])
  useEffect(() => {
    getNoticeList('').then(res => {
      setList(res.result)
    })
  }, [])

  const history = useHistory()
  const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
  })

  useEffect(() => {
    sr.reveal(`.notice__content, .notice__item, .notice__title`, {
      interval: 200
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <main className="l-main">
      <section className="notice section" id="notice">
        <div className="notice__container bd-grid bd-container container">
          <div className="notice__content">
            <div className="notice__title">最新公告</div>
            <ul className="noitice__list">
              <li className="notice__item item__title"><span className="desc">标题</span><span className="author">作者</span><span className="time">时间</span></li>
              {list.map(item => (
                <li key={item._id}
                  className="notice__item">
                  <span className="desc" onClick={() => {
                    history.push({
                      pathname: `/notice/notices/:id=${item._id}`,
                      state: item._id
                    })
                  }}>{item.title}</span>
                  <span className="author">{item.author}</span>
                  <span className="time">{getYMDHMS(item.time)}</span
                  ></li>))}

              {/* <li className="notice__item"><span className="desc">06k4 website is building</span><span className="author">wangyewei</span><span className="time">{new Date().getTime()}</span></li> */}
            </ul>

            {/* <div className="add">广告位招租</div> */}
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home