const http = require('http');
//搭建客户端
// const request = http.request('http://duyi.ke.qq.com',{
// 	method:'GET',
// },resp => {
// 	console.log('服务器响应码',resp.statusCode); //状态码
// 	console.log('服务器响应头',resp.headers);//响应头
// 	resp.on('data',chunk => {
// 		console.log(chunk.toString('utf-8'))
// 	})
// })
// request.write()
// request.end()
//搭建服务器
const server = http.createServer((req,res) => {
	console.log('请求来了!');
	res.setHeader('a','1');
	res.setHeader('b','2');
	res.write('董秋龙 加油 快到终点了!')
	// console.log('请求地址，',req.url);
	// console.log('请求头',req.headers)
// 	res.write(`HTTP/1.1 200 OK
	
	 
// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	<title>Document</title>
// </head>
// <body>
// 	<h1>董秋龙 加油！ 快到终点了！</h1>
// </body>
// </html>`)
})
server.listen(0925)//监听端口
server.on('listening',() => {
	console.log('监听成功')
})