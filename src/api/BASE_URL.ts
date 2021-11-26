/*
 * @Autor: YeWei Wang
 * @Date: 2021-09-29 21:57:49
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-11-25 17:31:28
 * @Version: 1.0
 * @FilePath: \studio-06k4\src\api\BASE_URL.ts
 */

let BASED_APIURL: string

process.env.NODE_ENV === 'development' ? BASED_APIURL = 'http://101.35.127.50:3005/' : BASED_APIURL = ' '

export { BASED_APIURL }
