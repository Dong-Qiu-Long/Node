const express = require('express');//引入express
const { async } = require('validate.js');
const student = express.Router(); //创建路由
const Student = require('../services/studentService.js');
const sendMsg = require('./getSendResult.js');

//分页获取学生
student.get('/', async (req,res) => {
	console.log(req.path)
	console.log(req.query)
	const page = parseInt(req.query.page) || 1;
	const limit = parseInt(req.query.limit) || 10;
	const data = await Student.getStudent(page,limit);
	res.send(sendMsg.getResult(data))
})

//获取单个学生
student.get('/:id',async (req,res) => {
	// console.log(parseInt(req.params.id))
	const data = await Student.getStudentId(parseInt(req.params.id))
	res.send(sendMsg.getResult(data))
	// console.log(data)
})

//添加学生
student.post('/',async (req,res,next) => {
	try{
		const data = await Student.addStudents(req.body)
		console.log(data)
		res.send(sendMsg.getResult(data))
	}catch(err){
		next(err)
	}
})

//修改学生
student.put('/:id',async (req,res) => {
	// console.log(req.params.id)
	// console.log(req.body)
	const data = await Student.updateStudents(req.params.id,req.body)
	res.send(sendMsg.getResult(data))
})
 
//删除学生
student.delete('/:id',async (req,res) => {
	const data =await Student.deleteStudents(req.params.id);
	console.log(data)
	res.send(sendMsg.getResult(data))
})  

module.exports = student