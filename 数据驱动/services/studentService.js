const Student = require('../models/Student.js');//引入学生模块

//添加
exports.addStudents = async function (studentObj){
	//验证...

	const inc = await Student.create(studentObj);
	return inc.studentObj
}

//删除
exports.deleteStudents = async function (studentId){
	// 验证...
	Student.destroy({
		where:{
			id:studentId
		}
	})
}

//修改
exports.updateStudents = async function(id,studentObj){
	//验证...

	Student.update(studentObj,{
		where:{
			id
		}
	})
}