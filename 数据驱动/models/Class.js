const {DataTypes} = require('sequelize');
const sequelize = require('./orm.js');
const Student = require('./Student.js');

//定义模板
(async function(){
	try{
			await sequelize.authenticate();
			console.log('班级成功')
	}catch(error){
		console.log('班级失败',error)
	}
})()
//定义模板
const Admin = sequelize.define('grades',{
 name:{
	 type:DataTypes.STRING,
	 allowNull:false
 },
 openDate:{
	 type:DataTypes.DATE,
	 allowNull:false
 }
},{
	freezeTableName:true,
	updatedAt:false,
	createdAt:false
});
module.exports = Admin;