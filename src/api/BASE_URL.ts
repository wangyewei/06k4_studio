/*
 * @Autor: YeWei Wang
 * @Date: 2021-09-29 21:57:49
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-12-02 22:05:56
 * @Version: 1.0
 * @FilePath: \06k4_studio\src\api\BASE_URL.ts
 */

let BASED_APIURL: string

process.env.NODE_ENV === 'development' ? BASED_APIURL = 'https://api.06k4.com' : BASED_APIURL = 'https://api.06k4.com'

export { BASED_APIURL }
