export interface IDateExtension {
  format (fmt: string) : string
  getNextDate (nDays: number) : Date
  getNextDate (nDays: string) : Date
  getMonth () : number
}

function extDate (date: Date) : IDateExtension {
  return {
    format (fmt) : string {
      const o = {
        'M+': date.getMonth() + 1, //月份
        'd+': date.getDate(), //日
        'h+': date.getHours(), //小时
        'm+': date.getMinutes(), //分
        's+': date.getSeconds(), //秒
        'q+': Math.floor((date.getMonth() + 3) / 3), //季度
        'S': date.getMilliseconds() //毫秒
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)){
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1)
            ? (o[k])
            : (('00' + o[k]).substr(('' + o[k]).length)))
        }
      }
      return fmt
    },
    getNextDate (nDays: number | string) {
      return new Date(date.getTime() + 24 * 60 * 60 * 1000 * Number(nDays))
    },
    getMonth () {
      return date.getMonth() + 1
    }
  }
}

export default extDate
