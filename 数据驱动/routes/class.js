const express = require('express');//引入express
const Class = express.Router(); //创建路由

//分页获取班级
Class.get('/',(req,res) => {
	res.send('获取分页班级')
})

//获取单个班级
Class.get('/:id',(req,res) => {
	res.send('获取单个班级')
})

//添加班级
Class.post('/',(req,res) => {
	res.send('添加班级')
})

//修改班级
Class.put('/:id',(req,res) => {
	console.log(req.params)
	res.send('修改班级')
})

//删除班级
Class.delete('/:id',(req,res) => {
	res.send('删除班级')
})

module.exports = Class