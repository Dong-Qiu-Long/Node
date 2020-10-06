const Class = require('../models/Class.js'); // 引入班级模块

//添加
exports.addClassgrades = async function (classObj){
	//验证...
	console.log(classObj)
	const inc = await Class.create(classObj);//添加
	console.log('添加了')
	return inc.toJSON()
}

//删除
exports.deleteClass = async function (classId){
	//验证

 Class.destroy({
		where:{
			id:classId
		}
	})
}

//修改
exports.updateClass = async function (id,classObj){
	//验证...

	Class.update(classObj,{
		where:{
			id
		}
	})
}