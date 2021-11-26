/*
 * @Autor: YeWei Wang
 * @Date: 2021-09-27 20:01:26
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-10-21 13:52:30
 * @Version: 1.0
 * @FilePath: \官网v1.0-react-ts-前端\studio-06k4\src\pages\History\History.tsx
 */
import React, { FC, useEffect } from 'react'
import { BASED_APIURL } from '../../api/BASE_URL'
import ScrollReveal from 'scrollreveal'
const History: FC = () => {

  const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
  })

  useEffect(() => {
    sr.reveal(`.history__content, .history__img-1, .history__img-right-2, .history__container-2, .history__container-3`, {
      interval: 200
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <main className="l-main">
      <section className="history section" id="history-1">
        <div className="history__container history__container-1 bd-grid bd-container container">
          <div className="history__content">
            <div className="history__data">
              <div className="title-1 title">开始</div>
              <p className="desc">
                06k4工作室(攀枝花市东区零六克斯工作室)成立于2019年10月，是一个由一群热爱计算机科学的90后00后组成。名称谐音于linux('lɪnəks)。于成立之初由工作室成员Beck所命名。期望自己能在热枕的计算机领域上获得成就。
              </p>
            </div>
          </div>
          <img src={`${BASED_APIURL}/historyimg/77A26522-F24D-427E-91E1-871912E74E31(20210707-075.JPG`} alt="" className="history__img history__img-1" />

          <div className="scorll" onClick={() => {
            document.getElementById('history-2')?.scrollIntoView()
          }}>next <i className='bx bx-right-arrow-alt' style={{ fontSize: "1rem" }}></i>
          </div>
        </div>
      </section>


      <section className="history section" id="history-2">
        <div className="history__container history__container-2 bd-grid bd-container container">
          <div className="history__content">
            <div className="history__data">
              <div className="title-2 title">闹剧</div>
              <div className="desc">06K4在攀枝花市东区四川省大学生产创业孵化园成立，由王野未和Beck饭后的一个玩笑话坚持到了今天，虽未取得成绩，但是我们的热枕并未放弃。</div>
              <div className="desc">王野未和Beck的认识算得上是一场闹剧，一天王野未正在写代码，电脑突然被人入侵了，他当即抱着电脑找到了当时并未认识的Beck，当时正在控制整栋楼局域网的Beck还以为是学院网管找上门了，二人才有了第一次真正意义上的接触。</div>
            </div>
          </div>
          <img src={`${BASED_APIURL}/historyimg/66A0B872-6367-4DFD-B851-F20912529732.JPG`} alt="" className="history__img-right-2" />

          <div className="scorll" onClick={() => {
            document.getElementById('history-3')?.scrollIntoView()
          }}>next <i className='bx bx-right-arrow-alt' style={{ fontSize: "1rem" }}></i>
          </div>
        </div>
      </section>

      <section className="history__footer  section bd-container" id="history-3">
        <div className="container history__container-3">
          <div className="title-3 title">Thank you</div>
          <div className="history-footer__container bd-grid">
            <img src={`${BASED_APIURL}/historyimg/95AEA6E5-90D7-4CDF-AAF6-11FF2ECC4CF2.JPG`} alt="" className="history__img" />
            <img src={`${BASED_APIURL}/historyimg/C6ACAEA5-EB06-49E7-A738-6F7F65D39769(20191010-121.JPG`} alt="" className="history__img" />
            <img src={`${BASED_APIURL}/historyimg/FF089CC1-F9A3-4377-8866-B9D7FFF9DE12.JPG`} alt="" className="history__img" />
          </div>
        </div>
      </section>

    </main>
  )
}

export default History