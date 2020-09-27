//os 系统
const os = require("os") 
const { resolve } = require("path")
console.log(os.EOL)// 获取分割符
console.log(os.arch()) // 获取cpu架构名
console.log(os.cpus().length) //cpu每个核的信息
console.log(os.freemem() / 2**30) //获取剩余内存
console.log(os.hostname()) // 获取主机名
console.log(os.tmpdir()) //获取操作系统的目录

//path 路径
const path = require('path');
const basename = path.basename("asdf/asdf/asdf/asdf/sadf/a.js",'.js') // 获取文件名
console.log(basename)
console.log(path.sep) // 打印分隔符 / 或 \
console.log(path.delimiter) //打印分隔符 :或;
//例
var delimiter = path.delimiter
console.log(process.env.PATH.split(delimiter))
var basenams = path.dirname('asd/asdf/asdf/sadf/index.html'); //获取路径目录
console.log(basenams);
var extname = path.extname('af/asdf/asdf/g/asdf/index.html'); //获取后缀名
console.log(extname)
var join = path.join('a','b','c','d','../','index.js'); //拼接路径
console.log(join)
var rel = path.relative('/data/orandea/test/aaa','/data/orandea/impl/bbb'); // 查找路径
console.log(rel)
var absPath = path.resolve('./a.js'); // a.js 相对于D盘 ./  相对于命令行
console.log(absPath)

//url 地址
var url = require('url');
const urlObj = new url.URL('https://github.com/Dong-Qiu-Long/Node?t=3&a=5#abc') //得到地址对象
console.log(urlObj)
console.log(urlObj.searchParams.has("t")) //判断是不是有t参数
const a = urlObj.searchParams.get('a'); // 获取参数a的值
console.log(a)
console.log(url.format(urlObj)) //将url对象转路径

//util 工具包
const util = require('util');
async function delay(data = 1000){
	return new Promise(resolve => {
		setTimeout( () => {
			resolve(data)
		},data)
	})
}
// delay(2000).then(d => {
// 	console.log(d)
// })
const delayCallback = util.callbackify(delay)
delayCallback(3000,(err,d) => {
	console.log(d)
})
console.log(util)