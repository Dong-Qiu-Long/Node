const {DataTypes} = require('sequelize');
const { model } = require('./orm.js');
const sequelize = require('./orm.js');
(
	async function(){
		try{
			await sequelize.afterBulkCreate();
			console.log('学生创建完成')
		}catch(err){
			console.log('学生创建失败')
		}
	}
)()
//创建模板
const Student = sequelize.define('students',{
		name:{
			type:DataTypes.STRING,
			allowNull:false
		},
		birthday:{
			type:DataTypes.DATE,
			allowNull:false
		},
		sex:{
			type:DataTypes.BOOLEAN,
			allowNull:false
		},
		mobile:{
			type:DataTypes.STRING(11),
			allowNull:false
		}
		//班级
},{
	freezeTableName:true,
	createdAt:false,
	updatedAt:false,
	paranoid:true
})
module.exports = Student;