const Admin = require('../models/db.js');
const {Op} = require('sequelize')
const md5 = require('md5')
//添加一个管理员
exports.addAdimin = async function (adminObj) {
	//应该判断添加的数据是否合理，数据是否已存在
	adminObj.loginPwd = md5(adminObj.loginPwd)
	const ins = await Admin.create(adminObj);
	return ins.toJSON();
}
//删除一个管理员
exports.deleteAdmin = async function (adminId) {
	//验证权限...

	//方式一
	// const ins = await Admin.findByPk(adminId) //通过主键查找一个元素
	// if(ins){
	// 	await ins.destroy(); //删除查找的元素
	// }

	//方式二

	Admin.destroy({
		where: {
			id: adminId
		}
	})
}
//修改一个管理员
exports.updateAdmin = function (id, adminObj) {
	//验证权限...

	//方式一
	// const ins = await Admin.findByPk(adminObj);//通过主键查找
	// ins.loginId = adminObj.loginId; //修改查找结果id账号
	// ins.save()

	//方式二
	Admin.update(adminObj, {//条件
		where: {
			id
		}
	})
}

//查询
exports.login = async function (loginId, loginPwd) {
	loginPwd = md5(loginPwd)
	const result = await Admin.findOne({
		where: {
			loginId,
			loginPwd
		}
	})
	if(result && result.loginId == loginId && result.loginPwd == loginPwd){
		return result.toJSON()
	}
	return null;
}

//通过id查询管理员
exports.getAdminById = async function(id){
	const result = await Admin.findByPk(id);
	if(result){
		return result.toJSON()
	}
}

//查询多个数据
exports.getAdmin = async function (page=1,limit=10,name){
	// const results = await Admin.findAll(); // 查询所有数据

	// const results = await Admin.findAll({
	// 	offset:(page-1)*limit,
	// 	limit
	// })

	// const datas = JSON.parse(JSON.stringify(results));

	// const total = await Admin.count(); // 得到学生总数
	const where = {};
	if(name){
		where.name = {
			[Op.like]:`%${name}%`
		}
	}
	const require  = await Admin.findAndCountAll({
		attributes:['name'],
		where,
		offset:(page-1)*limit,
		limit:+limit
	})
	return {
		total:require.count,
		datas:JSON.parse(JSON.stringify(require.rows))
	}
}