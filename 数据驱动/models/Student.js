const {DataTypes} = require('sequelize');
const moment = require('moment')
// const moment = require('moment');
const { model } = require('./orm.js');
const sequelize = require('./orm.js');

// (
// 	async function(){
// 		try{
// 			await sequelize.afterBulkCreate();
// 			console.log('学生创建完成')
// 		}catch(err){
// 			console.log('学生创建失败')
// 		}
// 	}
// )()
//创建模板
const Student = sequelize.define('students',{
		name:{
			type:DataTypes.STRING,
			allowNull:false
		},
		birthday:{
			type:DataTypes.DATE,
			allowNull:false,
			get(){
				return this.getDataValue('birthday').toLocaleDateString()
			}
		},
		age:{
			type:DataTypes.VIRTUAL,
			get(){
				const now = moment.utc();
				const birth = moment.utc(this.birthday);
				return now.diff(birth,'y') + '岁'
			}
		},
		sex:{
			type:DataTypes.BOOLEAN,
			allowNull:false,
			get(){
				return this.getDataValue('sex') == true? '男':'女';
			}
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