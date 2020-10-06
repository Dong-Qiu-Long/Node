const adminServ = require('./services/adminService.js');
const bookServ = require('./services/bookService.js');
const classServ = require('./services/classService.js');
const studentServ = require('./services/studentService.js');
const {data,grades}= require('./mock/mock.js') //获取模拟数据

// //添加班级
// grades.forEach((obj)=>{
// 	classServ.addClassgrades(obj);
// })

// //添加学生
// data.forEach((obj)=>{
// 	studentServ.addStudents(obj)
// })
