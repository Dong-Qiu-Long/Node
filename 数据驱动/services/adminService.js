const Admin = require('../models/db.js')
//添加一个管理员
exports.addAdimin = async function (adminObj){
 //应该判断添加的数据是否合理，数据是否已存在
	const ins = await Admin.create(adminObj);
	return ins.toJSON();
}
//删除一个管理员
exports.deleteAdmin = async function (adminId){
	//验证权限...

	//方式一
	// const ins = await Admin.findByPk(adminId) //通过主键查找一个元素
	// if(ins){
	// 	await ins.destroy(); //删除查找的元素
	// }

	//方式二

	Admin.destroy({
		where:{
			id:adminId
		}
	})
}
//修改一个管理员
exports.updateAdmin = function (id,adminObj){
	//验证权限...

	//方式一
	// const ins = await Admin.findByPk(adminObj);//通过主键查找
	// ins.loginId = adminObj.loginId; //修改查找结果id账号
	// ins.save()

	//方式二
	Admin.update(adminObj,{//条件
		where:{
			id
		}
	})
}