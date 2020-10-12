const express = require('express');//引入express
const { async } = require('validate.js');
const admin = express.Router(); //创建路由
const Admin = require('../services/adminService.js')
const sendMsg = require('./getSendResult.js')
//分页获取管理员
admin.get('/',(req,res) => {
	res.send('获取分页管理员')
})

//获取单个管理员
admin.get('/:id',(req,res) => {
	res.send('获取单个管理员')
})

//登录管理员
admin.post('/login',async (req,res) => {

	const data = await Admin.login(req.body.loginId,req.body.loginPwd);
	if(data){
		// res.header('set-cookie',`token=${data.id};path=/;domain=localhost;max-age=3600;`)
		const value = data.id
		res.cookie("token",value,{
			path:'/',
			domain:"localhost",
			maxAge:7*24*3600*1000,
			// signed:true
		});
		res.header('authorzation',value)
	}
	res.send(sendMsg.getResult(data))
})

//添加管理员
admin.post('/add',async (req,res) => {
	const obj = {
		loginId:req.body.loginId,
		loginPwd:req.body.loginPwd,
		name:req.body.name
	}
	const data = await Admin.addAdimin(obj)
	res.send(sendMsg.getResult(data))
})

//修改管理员
admin.put('/:id',(req,res) => {
	console.log(req.params)
	res.send('修改管理员')
})

//删除管理员
admin.delete('/:id',(req,res) => {
	res.send('删除管理员')
})

module.exports = admin