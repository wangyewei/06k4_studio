/*
 * @Autor: YeWei Wang
 * @Date: 2021-09-29 21:44:40
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-10-14 10:21:08
 * @Version: 1.0
 * @FilePath: \官网v1.0-react-ts-前端\studio-06k4\src\api\config.ts
 */
import axios, { AxiosInstance } from 'axios'
import { BASED_APIURL } from './BASE_URL'
// import qs from 'qs'
export const axiosInstace: AxiosInstance = axios.create({
  baseURL: BASED_APIURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlLencoded"
  }
})

