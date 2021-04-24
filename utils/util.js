const formatTime = date => {
 
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formathour = date => {
  // console.log(date,123)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  // let myhour=formatNumber(hour)
  return [hour, minute, second].map(formatNumber).join(':')
}
const formatDate = date => {
 console.log(date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  let myyear=formatNumber(year)
  let mymonth=formatNumber(month)
  let myday=formatNumber(day)
  return myyear+'年'+mymonth+'月'+myday+'日'
  // return [year, month, day].map(item=>formatNumber(item)).join('-') 
}

const formatNumber = n => {
  // console.log(n)
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  formatDate:formatDate,
  formathour:formathour
}
