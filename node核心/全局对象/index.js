console.log(global)
console.time('开始')
const timer = setTimeout(() => {
	console.log('执行了')
},2000)
// console.log(timer)//返回一个对象
// const Iner = setInterval(() => {
// 	console.log('1')
// },2000)
// console.log(Iner)
setImmediate(() => { //定时器相当于setTimeout(function(){},0)
	console.log('2')
},200)
console.timeEnd('结束');
console.log(__dirname)//获取文件所在目录
console.log(__filename) //获取当前文件路径

console.log(Buffer.from('你好','utf-8'))

console.log(process.cwd())//当前命令行
setTimeout(() => {
	console.log('你好')
},2000);
process.exit() //结束进程
console.log(process.argv)//获取命令行参数
console.log(process.platform) //获取当前操作系统
process.kill(8960) //杀死进程 输入
console.log(process.env) //获取环境变量
