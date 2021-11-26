/*
 * @Autor: YeWei Wang
 * @Date: 2021-09-29 22:02:41
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-11-12 19:29:05
 * @Version: 1.0
 * @FilePath: \studio-06k4\src\api\networks.ts
 */
import { axiosInstace } from "./config"

export const getTeamMembersList = () => {
  return axiosInstace.get('/team').then(res => res.data)
}

export const getNoticeList = (req: any) => {
  return axiosInstace.get('/notice', {
    params: req
  }).then(res => res.data)
}
