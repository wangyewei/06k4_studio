/*
 * @Autor: YeWei Wang
 * @Date: 2021-10-21 18:37:43
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 产品服务-软件开发
 * @LastEditTime: 2021-10-22 14:15:13
 * @Version: 1.0
 * @FilePath: \官网v1.0-react-ts-前端\studio-06k4\src\pages\Product\Products.tsx
 */

import React, { FC, useEffect } from 'react'
import { BASED_APIURL } from '../../api/BASE_URL'
import ScrollReveal from 'scrollreveal'


const Products: FC = () => {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1500,
    reset: true
  })

  useEffect(() => {
    sr.reveal(`.chat__data, .chat__img,
     .design__data, .design__img,
    .music__data, .music__img
    `, {
      interval: 200
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <main className="l-main">
      <section className="section products" id="products">
        <div className="products__container chat__container bd-grid bd-container container">
          <div className="products__data chat__data">
            <div className="title">06k4 Chat</div>
            <div className="desc">一款基于uniapp的聊天软件</div>
            <div className="author">———王野未</div>
            <div className="btns">
              <button className="btn btn-run btn-block" onClick={() => {
                alert('暂未实现，请手动拉取源码使用')
              }}>在线预览</button>
              <button className="btn btn-code" onClick={() => {
                window.open('https://github.com/WangYeWei/YeweiChat', 'target', '')
              }}>查看代码</button>
            </div>
          </div>
          <img src={`${BASED_APIURL}/products/IMG_7978.JPG`} alt="" className="products__img chat__img" />
        </div>
      </section>

      <section className="section products" id="products">
        <div className="products__container chat__container bd-grid bd-container container">
          <div className="products__data chat__data">
            <div className="title">登陆劫持与数据获取应用</div>
            <div className="desc">讲稿</div>
            <div className="author">———BECK</div>
            <div className="btns">
              <button className="btn btn-run btn-block" onClick={() => {
                alert('暂未实现，请手动拉取源码使用')
              }}>在线预览</button>
              <button className="btn btn-code" onClick={() => {
                window.open('https://github.com/WangYeWei/YeweiChat', 'target', '')
              }}>了解更多</button>
            </div>
          </div>
          <img src={`${BASED_APIURL}/products/D8E683EDB2D4F7CE6B3B0061F34513E2.png`} alt="" className="products__img chat__img" />
        </div>
      </section>

      <section className="section products" id="products">
        <div className="products__container design__container bd-grid bd-container container">
          <div className="products__data design__data">
            <div className="title">06k4 design</div>
            <div className="desc">一款react + typescript的框架软件，可用于快速搭建web UI界面。</div>
            <div className="author">———王野未</div>
            <div className="btns">
              <button className="btn btn-run btn-block"
                onClick={() => {
                  alert('暂未实现，请手动访问github')
                }}>文档地址</button>
              <button className="btn btn-code"
                onClick={() => {
                  window.open('https://github.com/WangYeWei/YeweiDesign_ts_react', 'target', '')
                }}>立马上手</button>
            </div>
          </div>
          <img src={`${BASED_APIURL}/products/MB41X[Y8COQ][TG2U$L5VU2.png`} alt="" className="products__img design__img" />
        </div>
      </section>


      <section className="section products" id="products">
        <div className="products__container music__container bd-grid bd-container container">
          <div className="products__data music__data">
            <div className="title">06k4 music</div>
            <div className="desc">一款Vue的PC端音乐播放器Web App</div>
            <div className="author">———王野未</div>
            <div className="btns">
              <button className="btn btn-run btn-block"
                onClick={() => {
                  alert('暂未实现，请手动拉取项目使用')
                }}
              >在线运行</button>
              <button className="btn btn-code"
                onClick={() => {
                  window.open('https://github.com/WangYeWei/Cloud-Music', 'target', '')
                }}>源码地址
              </button>
            </div>
          </div>
          <img src={`${BASED_APIURL}/products/8]~SU6GD1(G7EFMH]A3L5QI.png`} alt="" className="products__img music__img" />
        </div>
      </section>

    </main>
  )
}

export default Products
