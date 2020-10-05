const result = require('./a.js');

const abc = require('abc'); //通过配置package.json执行abc.js
console.log(abc)
console.log(module)
console.log(require.resolve('./Node模块化细节'))
//1.将modulePath转化为绝对路径
//2.判断是否有该模块缓存
//3.读取文件内容
//4.包裹到一个函数中
//5.创建module对象
//6.把module传入函数