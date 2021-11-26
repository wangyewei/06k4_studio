/*
 * @Autor: YeWei Wang
 * @Date: 2021-10-22 12:55:26
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 微电影创作
 * @LastEditTime: 2021-11-12 11:22:05
 * @Version: 1.0
 * @FilePath: \studio-06k4\src\pages\Films\Films.tsx
 */

import React, { FC, useEffect, useRef } from 'react'
import { BASED_APIURL } from '../../api/BASE_URL'

const Films: FC = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const svgLogo = useRef<SVGSVGElement>(null)
  const svgTextMask = useRef<SVGPathElement>(null)
  const theChip = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const scrolled = () => {
    let scrolled: number = document.documentElement.scrollTop / ((mainRef.current?.scrollHeight) as number - document.documentElement.clientHeight)
    if (scrolled <= 0.1) {
      h1Ref.current?.setAttribute('style', `
          opacity: ${(0.1 - scrolled) / 0.1};
          marginTop: ${scrolled * 2000 * -1}px
        `
      )
    } else {
      h1Ref.current?.setAttribute('style', `opacity: 0`)
    }

    if (scrolled <= 0.2) {
      svgLogo.current?.setAttribute('style', `opacity: ${(scrolled - 0.1) / 0.1}`)
    } else {
      svgLogo.current?.setAttribute('style', `opacity: 1`)
    }

    if (scrolled >= 0.5) {
      svgTextMask.current?.setAttribute('style', `opacity: ${(1 - scrolled) / 0.5}`)
      theChip.current?.classList.add('transparent')
    } else {
      svgTextMask.current?.setAttribute('style', `opacity: 1`)
      theChip.current?.classList.remove('transparent')
    }

    if (scrolled >= 0.5) {
      theChip.current?.setAttribute('style', `
          opacity: ${(1 - scrolled) / 0.06};
          width: ${document.documentElement.clientWidth * 20 * (scrolled * scrolled * scrolled)}px;
          height: ${document.documentElement.clientWidth * 20 * (scrolled * scrolled * scrolled)}px
        `
      )

    } else {
      theChip.current?.setAttribute('style',
        `
          opacity: 1;
          width: ${document.documentElement.clientWidth * 20 * (scrolled * scrolled * scrolled)}px;
          height: ${document.documentElement.clientWidth * 20 * (scrolled * scrolled * scrolled)}px
      `)
    }

  }
  useEffect(() => {
    window.addEventListener('scroll', scrolled)
    return () => window.removeEventListener('scroll', scrolled)
  }, [])

  return (
    <main className="films-container" id="film-contaienr" ref={mainRef}>
      <section className="films-section" id="chip-section">
        <video muted autoPlay loop src={`${BASED_APIURL}/films/RPReplay_Final1635171978_Trim.mp4`} ref={videoRef}></video>
        <h1 className="films-title" ref={h1Ref}>06K4 Films</h1>
        <div id="the-chip" ref={theChip}>
          <svg viewBox="0 0 425 425" fill="none" id="svg-logo" ref={svgLogo}>
            <rect className="chip" />
            <path className="chip-mask"
              ref={svgTextMask}
              d="M5.85786 419.142C2.10714 415.391 0 410.304 0 405L0 20C0 14.6957 2.10714 9.60859 5.85786 5.85786C9.60859 2.10714 14.6957 0 20 0L405 0C410.304 0 415.391 2.10714 419.142 5.85786C422.893 9.60859 425 14.6957 425 20L425 405C425 416.046 416.046 425 405 425L20 425C14.6957 425 9.60859 422.893 5.85786 419.142Z M291.62 185.78L291.62 185.96L264.26 228.8L291.44 279.38L272 279.38L248.96 238.34L248.96 279.38L232.04 279.38L232.04 145.64L248.96 145.64L248.96 220.7L272.72 185.78L291.62 185.78Z M291.44 279.38L291.62 279.74L291.62 279.38L291.44 279.38Z M215.3 210.44L215.3 266.06L201.98 279.38L153.74 279.38L140.42 266.06L140.42 160.04L153.74 146.72L215.3 146.72L215.3 163.64L156.98 163.64L156.98 197.3L201.98 197.3L215.3 210.44Z M102.44 279.56L54.02 279.56L40.88 266.42L40.88 160.4L54.38 147.26L102.62 147.26L115.94 160.58L115.94 266.42L102.44 279.56Z M308.36 147.26L324.92 147.26L324.92 218.9L366.5 218.9L366.5 147.26L383.24 147.26L383.24 279.38L366.5 279.38L366.5 235.64L321.68 235.64L308.36 222.32L308.36 147.26Z M57.62 263L57.62 163.82L99.02 163.82L99.02 263L57.62 263Z M198.74 262.64L156.98 262.64L156.98 214.04L198.74 214.04L198.74 262.64Z undefined undefined " />
            <path fillRule="evenodd"
              className="text-bg" d="M5.85786 419.142C2.10714 415.391 0 410.304 0 405L0 20C0 14.6957 2.10714 9.60859 5.85786 5.85786C9.60859 2.10714 14.6957 0 20 0L405 0C410.304 0 415.391 2.10714 419.142 5.85786C422.893 9.60859 425 14.6957 425 20L425 405C425 416.046 416.046 425 405 425L20 425C14.6957 425 9.60859 422.893 5.85786 419.142Z M291.62 185.78L291.62 185.96L264.26 228.8L291.44 279.38L272 279.38L248.96 238.34L248.96 279.38L232.04 279.38L232.04 145.64L248.96 145.64L248.96 220.7L272.72 185.78L291.62 185.78Z M291.44 279.38L291.62 279.74L291.62 279.38L291.44 279.38Z M215.3 210.44L215.3 266.06L201.98 279.38L153.74 279.38L140.42 266.06L140.42 160.04L153.74 146.72L215.3 146.72L215.3 163.64L156.98 163.64L156.98 197.3L201.98 197.3L215.3 210.44Z M102.44 279.56L54.02 279.56L40.88 266.42L40.88 160.4L54.38 147.26L102.62 147.26L115.94 160.58L115.94 266.42L102.44 279.56Z M308.36 147.26L324.92 147.26L324.92 218.9L366.5 218.9L366.5 147.26L383.24 147.26L383.24 279.38L366.5 279.38L366.5 235.64L321.68 235.64L308.36 222.32L308.36 147.26Z M57.62 263L57.62 163.82L99.02 163.82L99.02 263L57.62 263Z M198.74 262.64L156.98 262.64L156.98 214.04L198.74 214.04L198.74 262.64Z " />
          </svg>
        </div>
      </section>
    </main>

  )
}

export default Films