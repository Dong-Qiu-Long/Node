const { read } = require('fs');
// //用于解析cookie
const {getErr} = require('./getSendResult.js')
module.exports = (req,res,next) => {
	let token = req.cookies.token;
	if(token === undefined){
		token = req.headers.authorzation;
	}
	if(token === undefined && req.path !== '/api/admin/login'){
		hand(req,res,next)
	}
	next()
}
function hand(req,res,next){
	// if(req.path == '/api/admin/login'){
	// 	next()
	// }else{
	// 	res.send(getErr('您还没有登录！请先登录'))
	// }
	res.send(getErr('您还没有登录！请先登录',403))
}