const adminServ = require('./services/adminService.js');
const bookServ = require('./services/bookService.js');
const classServ = require('./services/classService.js');
const studentServ = require('./services/studentService.js');
const {data,grades,login}= require('./mock/mock.js') //获取模拟数据
// //添加班级
// grades.forEach((obj)=>{
// 	classServ.addClassgrades(obj);
// })

// //添加学生
// data.forEach((obj)=>{
// 	studentServ.addStudents(obj)
// })
//  adminServ.login('1902941357','qiulong')
// adminServ.getAdmin(1,10,'董').then((data) => {
// 	console.log(data)
// })

// adminServ.addAdimin({
// 	loginId:'45613',
// 	loginPwd:'qiulong',
// 	name:'董秋龙'
// })
// adminServ.login('45613','qiulong').then((data)=>{
// 	console.log(data)
// })

studentServ.getStudent(1,10).then((data) => {
	console.log(data)
})
