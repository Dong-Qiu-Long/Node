const validator = require('validator');
const validate = require('validate.js')
// console.log(validator.isEmail('1902941357qq.com'))
const obj = {
	loginId:'123456',
	loginPwd:'qiulo',
	name:'董秋龙'
}
const rule = {
	name:{
		presence:{
			allowEmpty:false
		},
	},
	loginPwd:{
		type:'string',
		length:{
			minimum:6,
			maximum:16 
		}
	}
}
const result = validate.validate(obj,rule)
console.log(result)