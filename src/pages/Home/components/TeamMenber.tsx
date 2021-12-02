/*
 * @Autor: YeWei Wang
 * @Date: 2021-09-27 20:17:31
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-12-02 09:08:02
 * @Version: 1.0
 * @FilePath: \06k4_studio\src\pages\Home\components\TeamMenber.tsx
 */

import React, { FC, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import ScrollReveal from 'scrollreveal'

export interface TeamMenberDataType {
  imgUrl: string;
  name: string;
  title: string;
  school: string;
}
const TeamMenber: FC<TeamMenberDataType> = (props) => {
  const { imgUrl, name, title, school } = props
  const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
  });

  useEffect(() => {
    sr.reveal('.team__content', {
      interval: 200
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const history = useHistory()
  return (

    <div className="team__content">
      <img src={imgUrl} alt={name} className="team__img" />
      <h3 className="team__name">{name}</h3>
      <span className="team__title">{title}</span>
      <span className="team__school">{school}</span>
      <div className="button team__button" onClick={() => {
        history.push({
          pathname: `/member/:name=${name}`,
          state: name
        })
      }}>
        <i className='bx bxs-right-arrow-circle'></i>
      </div>


    </div>
  )
}

export default TeamMenber