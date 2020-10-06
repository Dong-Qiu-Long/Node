//引入书模型
const Book = require('../models/Book.js');

//添加
exports.addBook = async function(bookObj){
	//验证...

	const ins = await Book.create(bookObj);
	return ins.toJSON()
}
//删除
exports.deleteBook = async function(bookId){
	//验证...

	//方式一
	// const ins = await Book.findByPk(bookId); // 利用主键查找
	// if(ins){
	// 	await ins.destroy() // 删除查找的元素
	// }

	//方式二
	Book.destroy({ //判断条件
		where:{
			id:bookId
		}
	})
}
//修改
exports.updataBook = async function(id,bookObj){
	//验证...

	//方式一
	// const ins = await Book.findByPk(id);
	// if(ins){
	// 	ins.id = id;
	// }

	// 方式二
	Book.update(bookObj,{
		where:{
			id
		}
	})
}