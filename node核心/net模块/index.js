const net = require('net');
const fs = require('fs');
const path = require('path')
//创建一个客户端
// const socket =net.createConnection({
// 	host:'duyi.ke.qq.com',
// 	port:80
// },() => {
// 	console.log('链接成功')
// })

// //接受数据
// socket.on('data',chunk => {
// 	console.log('来自服务器的消息',chunk.toString('utf-8'));
// 	socket.end();//结束
// })

// //写入请求
// socket.write(`GET / HTTP/1.1
// Host:duyi.ke.qq.com
// connection:keep-alive

// `)
// //结束事件
// socket.on('close',() => {
// 	console.log('挂断了')
// }) 
const server = net.createServer();
server.listen(1239)
server.on('listening',() => {
	console.log('开始监听')
})
server.on('connection',(socket) => {
	console.log('来了')
	socket.on('data',async chunk => {
		// console.log(chunk.toString('utf-8'));
		const filename = path.resolve(__dirname,'./a.txt');
		const bodyBuffer = await fs.promises.readFile(filename,'utf-8');
		socket.write(`HTTP/1.1 200 OK


		<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<h1>${bodyBuffer}</h1>
</body>
</html>`)
		socket.end();
	})
	socket.on('end',() => {
		console.log('结束了')
	})
});
