// //文件IO： input output
// //外部设备的输入输出
// //外部设备 磁盘 网卡  显卡 打印机 其他
// //IO的速度往往低于内存和cpu的交互速度
const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname,'./a.txt')
// fs.readFile(filename,'utf-8',(err,content) => {
// 	console.log(content)
// }); 
// console.log(1)

// //读文件
// async function test(){
// 	const content = await fs.promises.readFile(filename,'utf-8');
// 	console.log(content)
// 	wite(content)
// } 
// test()
// //写文件
// const filebname = path.resolve(__dirname,'./b.txt')
// async function wite(item){
// 	 await fs.promises.writeFile(filebname,item,{flag:'a'})
// 	 console.log('追加成功')
// }
// //获取文件目录信息 参数:路径
// async function statItem(){
// 	const stat = await fs.promises.stat(filebname);
// 	// console.log(stat)
// }
// statItem()
// //获取文件路径的子目录 
// async function readdire(){
// 	const read = await fs.promises.readdir(__dirname);
// 	console.log(read)
// }
// readdire()
// //创建文件
// const dir = path.resolve(__dirname,'./dist');
// async function mkdr(){
// 	await fs.promises.mkdir(dir)
// }
// mkdr()

const fname = path.resolve(__dirname,'./a.txt');
async function du(){
	const item = await fs.promises.readFile(fname,'utf-8');
	xie(item)
}
const flName = path.resolve(__dirname,'./dist/index.txt')
async function xie(item){
	await fs.promises.writeFile(flName,item);
}
du()
// const san = path.relative(__dirname,'./dist')
async function ac(){
	const item = await fs.promises.readdir(__dirname);
	console.log(item)
}
ac()