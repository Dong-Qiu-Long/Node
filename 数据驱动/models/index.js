const sequelize = require('./orm.js');
const Class = require('./Class.js');
const Student = require('./Student.js');
require('./db.js');
require('./Book.js');
Class.hasMany(Student);
Student.belongsTo(Class);
sequelize.sync({
	alter:true 
}).then(()=>{
	console.log('所有模型同步完成')
})