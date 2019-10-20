class Utils{
  // 获取url参数
  getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
  // 获取字符串的长度，包含汉字等
  getStringLength(s){
    let reg = /[^\x00-\xff]/g
    s = String(s)
    let length = s.length
    let chinaLength = (s.match(reg) || "").length
    return (length - chinaLength) + chinaLength * 2
  }
  formatDate(date, fmt) {
    // "yyyy-MM-dd hh:mm:ss"
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
      }
    }
    return fmt;
  }
  getNowTime(){
    let newTime = new Date()
    return this.formatDate(newTime, "yyyy-MM-dd hh:mm:ss")
  }
  getDate(month, date){
    let nowTime = new Date()
    nowTime.setMonth(nowTime.getMonth() + month)
    if(date){
      nowTime.setDate(date)
    }
    return this.formatDate(nowTime, "yyyy-MM-dd hh:mm:ss")
  }
  padLeftZero(str){
    return ('00' + str).substr(str.length);
  }
  checkCode(code){
    return /^\d{6}$/.test(code)
  }
}
export default new Utils()
