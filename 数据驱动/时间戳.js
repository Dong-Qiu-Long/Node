const moment = require('moment');
moment.locale('zh-cn')
// console.log(moment().toString()) //得到当前时间
// console.log(moment().utc().toString()) //得到当前utc时间 美国时间

// console.log(moment().valueOf()) //得到当前时间戳
// console.log(moment().utc().valueOf()) 
// console.log(moment(1602314349223))

//使用日期令牌格式
const formts = ['YYYY-MM-DD HH:mm:ss','YYYY-M-D H:m:s','x'];
// const m = moment.utc('1602314349223',formts,true)
// console.log(m.format('YYYY年MM月DD日 HH小时mm分钟ss秒'))
// const time = +moment();
// const m = moment(time,formts,true);
// console.log(m.format('YYYY年MM月DD日 HH小时mm分钟ss秒'))
const m = moment('2020-10-8 12:12:12',formts,true);
console.log(m.local().fromNow())