const express = require('express');//引入express
const book = express.Router(); //创建路由

//分页获取书
book.get('/',(req,res) => {
	res.send('获取分页书')
})

//获取单个书
book.get('/:id',(req,res) => {
	res.send('获取单个书')
})

//添加书
book.post('/',(req,res) => {
	res.send('添加书')
})

//修改书
book.put('/:id',(req,res) => {
	console.log(req.params)
	res.send('修改书')
})

//删除书
book.delete('/:id',(req,res) => {
	res.send('删除书')
})

module.exports = book