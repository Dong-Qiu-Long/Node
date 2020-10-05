const {DataTypes} = require('sequelize');
const sequelize = require('./models/orm.js');
(async function(){
	try{
		await sequelize.afterBulkCreate();
		console.log('书籍创建成功')
	}catch(error){
		console.log('书籍创建失败')
	}
})()
const Book = sequelize.define('Books',{
	name:{
		type:DataTypes.STRING,
		allowNull:false
	},
	img:{
		type:DataTypes.STRING,
	},
	publishDate:{
		type:DataTypes.STRING,
		allowNull:false
	},
	autor:{
		type:DataTypes.STRING,
		allowNull:false
	}
},{
	freezeTableName:true,
	createdAt:false,
	updatedAt:false,
	paranoid:true
})
module.exports = Book;