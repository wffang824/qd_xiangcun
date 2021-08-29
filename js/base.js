function time() {
  var date = new Date()
  var vWeek = [
    '星期天',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ]
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate() //获取当前日
  var week = date.getDay() //获取当前星期几
  var hour = date.getHours() //获取小时
  var minute = date.getMinutes() //获取分钟
  var second = date.getSeconds() //获取秒
  document.getElementById('t_time').innerHTML =
    '当前时间：' +
    year +
    '年' +
    month +
    '月' +
    day +
    '日' +
    '\t' +
    hour +
    ':' +
    minute +
    ':' +
    second +
    '\t' +
    vWeek[week]
}
setInterval(time, 1000)
