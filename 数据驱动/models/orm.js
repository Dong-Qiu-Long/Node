const mysql = require('mysql2');
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('longlong','root','qiulong',{
	host:'localhost',
	dialect:'mysql'
})
module.exports = sequelize;