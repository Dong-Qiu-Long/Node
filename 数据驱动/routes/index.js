//中间件
const path = require('path');
const express = require ('express');

const app = express();
const err = require('./error.js')
const urlPath = path.resolve(__dirname,'./public')
app.use(express.static(urlPath))
const cookieParser = require('cookie-parser');
app.use(cookieParser())
app.use(require('./tokenMiddleware.js'))

app.use(
	express.urlencoded({
		extended:true
	})
)

app.use(express.json());

//使用路由 
//学生
app.use('/api/student',require('./student.js'))
//书
app.use('/api/book',require('./book.js'))
//管理员
app.use('/api/admin',require('./admin.js'))
//班级
app.use('/api/class',require('./class.js'))

// studentRouter.get('/',(req,res) => {
// 	console.log('获取')
// })
// studentRouter.post('/',(req,res) => {
// 	console.log('添加')
// })
// studentRouter.put('/:id',(req,res) => {
// 	console.log(req.params)
// 	console.log('修改')
// })
// studentRouter.delete('/',(req,res) => {
// 	console.log('删除')
// })

//读取文件
// const staticRoot = path.resolve(__dirname,'./public');
// app.use(express.static(staticRoot))

//报错处理
// app.use(err)


// app.post('/api/student',(req,res) => {
// 	res.send('添加')
// })
// app.get('/api/student',(req,res) => {
// 	res.send('获取')
// })
// app.put('/api/student/:id',(req,res) => {
// 	console.log(req.params)
// 	res.send('修改')
// })
// app.delete('/api/student',(req,res) => {
// 	res.send('删除')
// })
app.listen(1234,() => {
	console.log('监听成功')
})
app.on('connection',(socket) => {
	console.log('请求来了')
})