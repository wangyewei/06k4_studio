/*
 * @Autor: YeWei Wang
 * @Date: 2021-10-20 13:18:51
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2021-10-20 13:22:19
 * @Version: 1.0
 * @FilePath: \官网v1.0-react-ts-前端\studio-06k4\src\tools\time.ts
 */
const getYMDHMS = (timestamp: number) => {
  let time = new Date(timestamp)
  let year: any = time.getFullYear()
  let month: any = time.getMonth() + 1
  let date: any = time.getDate()
  let hours: any = time.getHours()
  let minute: any = time.getMinutes()
  let second: any = time.getSeconds()

  if (month < 10) { month = '0' + month }
  if (date < 10) { date = '0' + date }
  if (hours < 10) { hours = '0' + hours }
  if (minute < 10) { minute = '0' + minute }
  if (second < 10) { second = '0' + second }
  return year + '-' + month + '-' + date + ' ' + hours + ':' + minute + ':' + second
}

export { getYMDHMS }