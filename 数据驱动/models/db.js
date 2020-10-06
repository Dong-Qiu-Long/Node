const {DataTypes} = require('sequelize')
const sequelize = require('./orm.js');

//测试连接
(async function(){
		try{
			await sequelize.authenticate();
			console.log('成功');
			// sequelize.close() //关闭连接
		}catch(error){
			console.log('失败',error)
		}
	}
)()
// console.log(sequelize)

//定义模型  返回一个模型对象
const Admin = sequelize.define('longlong',{
	loginId:{
		type:DataTypes.STRING,
		allowNull:false
	},
	loginPwd:{
		type:DataTypes.STRING,
		allowNull:false
	},
	name:{
		type:DataTypes.STRING,
		allowNull:false
	}
},{
	freezeTableName:true,
	createdAt:false,
	updatedAt:false
});

module.exports = Admin;