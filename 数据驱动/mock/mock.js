const Mock = require('mockjs')//引入mock
//创建数据
const data = Mock.mock({
	'list|20-40':[{
		'name':'@cname',
		'birthday':'@date',
		'sex|0-1':0,
		'mobile':'123',
		'deleteAt':'@date',
		'gradeld|1-10':2
	}]
});

const grades = Mock.mock({
	'list|10':[{
		'name':' @id 班',
		'openDate':'@date'
	}]
})
exports.data = data.list
exports.grades= grades.list

