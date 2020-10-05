const sequelize = require('./models/orm.js');
require('./db.js');
require('./Class.js');
require('./Student.js');
require('./Book.js')
sequelize.sync({
	alter:true
}).then(()=>{
	console.log('所有模型同步完成')
})