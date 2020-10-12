const { join } = require('path');
const { async } = require('validate.js');
const Student = require('../models/Student.js');//引入学生模块

//添加
exports.addStudents = async function (studentObj){
	//验证...

	const inc = await Student.create(studentObj);
	return JSON.parse(JSON.stringify(inc))
}
//通过id获取
exports.getStudentId = async function(Id){
	const data = await Student.findByPk(Id);
	return JSON.parse(JSON.stringify(data))
}

//删除
exports.deleteStudents = async function (studentId){
	// 验证...
	const data = await Student.destroy({
		where:{
			id:studentId
		}
	})
	return data
}

//修改
exports.updateStudents = async function(id,studentObj){
	//验证...

	const data = await Student.update(studentObj,{
		where:{
			id
		}
	})
	return data
}

//获取多个
exports.getStudent = async function (page=1,limit=10){
	const require = await Student.findAndCountAll({
		offset:(page-1)*limit,
		limit,
	})
	return JSON.parse(JSON.stringify(require.rows))
}