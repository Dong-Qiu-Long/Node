const mysql = require('mysql2/promise')
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
//异步 sql注入
// async function test(id){
// 	const connection = await mysql.createConnection({
// 		host:'localhost',
// 		user:'root',
// 		password:'qiulong',
// 		database:'qiu',
// 		multipleStatements:true
// 	});
// 	console.log(connection)
// 	const [results] =await connection.query(`select * from class where id = ${id};`)
// 	connection.end()
// }
// test(`9;delete from class where id = 4;`)
// async function test(id){
// 	const connection = await mysql.createConnection({
// 		host:'localhost',
// 		user:'root',
// 		password:'qiulong',
// 		database:'qiu',
// 		multipleStatements:true
// 	});
// 	const sql = `select * from class where id = ?;`
// 	const [results] =await connection.execute(sql,[id]);
// 	console.log(results)
// 	connection.end()
// }
// test(2)
async function test(id){
	const pool = await mysql.createPool({
		host:'localhost',
		user:'root',
		password:'qiulong',
		database:'qiu',
		multipleStatements:true,
		waitForConnections:true,
		connectionLimit:10,
		queueLimit:0
	});
	const sql = `select * from class where id = ?;`
	const [results] =await pool.execute(sql,[id]);
	console.log(results)
}
test(2)