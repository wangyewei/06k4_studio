/*
 * @Autor: YeWei Wang
 * @Date: 2021-09-16 20:10:51
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-10-22 12:59:23
 * @Version: 1.0
 * @FilePath: \官网v1.0-react-ts-前端\studio-06k4\src\pages\Home\Home.tsx
 */

import React, { FC, useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { getTeamMembersList } from '../../api/networks'
import TeamMenber from './components/TeamMenber'
import { BASED_APIURL } from '../../api/BASE_URL'
import ScrollReveal from 'scrollreveal'


const Home: FC = () => {
  const [teamMemberList, setTeamMemberList] = useState<any[]>([])
  useEffect(() => {
    getTeamMembersList().then(res => {
      setTeamMemberList(res.result)
    })
  }, [])

  const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
  })

  useEffect(() => {
    sr.reveal(`.home__data, .home__img,
    .about__data, .about__img,
    .services__content, .team__content,
    .app__data, .app__img,
    .contact__data, .contact__button`, {
      interval: 200
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const history = useHistory()
  return (
    <main className="l-main">
      <section className="home section" id="home">
        <div className="home__container bd-container bd-grid container">
          <div className="home__data">
            <h1 className="home__title">06k4 Studio</h1>
            <h2 className="home__subtitle">你见过的<br /> 最有计算机信仰的工作室</h2>
            <Link className="button notice_button" to='/notice'>
              最新公告
            </Link>
          </div>
          <img src={`${BASED_APIURL}/home/06k4-logo.jpg`} alt="err" className="home__img" />
        </div>
      </section>

      <section className="about section bd-container" id="about">
        <div className="about__container bd-grid container">
          <div className="about__data">
            <span className="section-subtitle">关于我们</span>
            <h2 className="section-title about__initial ">我们创立了激动人心的 <br /> 科技工作室 </h2>
            <p className="about__description">我们保持最高度的技术敏感性<br />维持高度的艺术感，将艺术与科技融合。</p>
            {/* <a href="#" className="button">工作室历史</a> */}
            <Link to="/history">
              <span className="button">工作室历史</span>
            </Link>
          </div>

          <img src={`${BASED_APIURL}/home/06k4-logo.jpg`} alt="" className="about__img" />
        </div>
      </section>

      <section className="services section bd-container" id="services">
        <div className="container" style={{ height: '60vh' }}>
          <span className="section-subtitle">产品服务</span>
          <div className="section-title">我们在做什么</div>

          <div className="services__container bd-grid">
            <div className="services__content" onClick={() => {
              history.push('/products')
            }}>
              <i className='bx bx-code-alt services__img'></i>
              <h3 className="services__title">软件开发服务</h3>
              <p className="services__description">我们将为您开发美观，安全，健壮的软件</p>
            </div>

            <div className="services__content">
              <i className='bx bxs-book services__img'></i>
              <h3 className="services__title">青少年编程教育</h3>
              <p className="services__description">我们致力于提高青少年的编程能力，提高青少年的的计算机思维能力</p>
            </div>

            <div className="services__content" onClick={() => {
              history.push('/films')
            }}>
              <i className='bx bxs-camera-movie services__img'></i>
              <h3 className="services__title">微电影创作</h3>
              <p className="services__description">我们拥有专业的团队，充满真诚的剧本，如果你对情感电影和诗歌感兴趣，你很遗憾没有注意到我们的电影动态。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="menu section bd-container" id="team">
        <div className="container">
          <span className="section-subtitle">我的团队</span>
          <h2 className="section-title">我们充满活力的团队</h2>

          <div className="team__container bd-grid">
            {teamMemberList.slice(0, 4).map(item => {
              return (
                <TeamMenber
                  key={item.name}
                  imgUrl={item.imgUrl}
                  name={item.name}
                  title={item.title}
                  school={item.school}
      
                   />
              )
            })}
          </div>

          {/* <Link to="allmember">...More</Link> */}
        </div>
      </section>

      <section className="app section bd-container">
        <div className="app__container bd-grid container">
          <div className="app__data">
            <span className="section-subtitle app__initial">App</span>
            <h2 className="section-title app__initial">下载APP</h2>
            <p className="app__description">找到我们的应用程序并下载它。您可以加入我们，成为我们的会员，随时了解我们的最新发展</p>
            <div className="app__stores">
              <img src={`${BASED_APIURL}/home/app1.png`} alt="" className="app__store" />
              <img src={`${BASED_APIURL}/home/app2.png`} alt="" className="app__store" />
            </div>

          </div>

          <img src={`${BASED_APIURL}/home/movil-app.png`} alt="" className="app__img" />
        </div>
      </section >

      <section className="contact bd-container" id="contact" >
        <div className="contact__container bg-grid ">
          <div className="contact__data">
            <span className="section-subtitle contact__initial">开始联系！</span>
            <h2 className="section-title contact__initial">联系我们</h2>
            <p className="contact__description">如果您需要与我们沟通，我们将会飞速的回复您，我们的联系电话7天24小时保持畅通。</p>
          </div>

          <div className="contact__button">
            <Link to="a" className="button">联系我们</Link>
          </div>
        </div>
      </section>
    </main >
  )
}

export default Home