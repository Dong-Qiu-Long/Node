const express = require('express');
const http = require('http');
const app = express();
// const server = http.createServer(app);
app.get('/abc/:id',(req,res)=>{
	console.log('请求头',req.headers)
	console.log('请求路径',req.path);
	console.log('请求参数',req.query);
	console.log('动态id',req.params)

	//响应
	// res.send([4,5,6])
	//从定向
	// res.status(302).header('location','https://www.baidu.com').end()
	res.redirect(302,'https://www.baidu.com')
})
app.listen(1919,()=>{
	console.log('监听成功!,马上要结束了！')
})
app.on('connection',(socket) => {
	// console.log('请求来了')
	// console.log(socket)
}) 