const mysql = require('mysql2')
//创建一个数据库链接
// const connection = mysql.createConnection({
// 	host:'localhost', 
// 	user:'root',
// 	password:'qiulong',
// 	database:'qiu'
// })
// //执行命令
// connection.query(
// 	'insert into class (name,birthday,sex,stuno,phone,classid) values ("董天琪","2020-10-06",0,22,0,2)',
// 	function(err,res){
// 		console.log(err);
// 		console.log(res)
// 	}
// )
async function test(){
	const connection = await mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'qiulong',
		database:'qiu'
	});
	const [results] = await connection.query('select * from class');
	console.log(results);
	connection.end()
}
test()
