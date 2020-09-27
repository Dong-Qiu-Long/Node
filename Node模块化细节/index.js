const result = require('./a.js');

const abc = require('abc'); //通过配置package.json执行abc.js
console.log(abc)
console.log(module)
console.log(require.resolve('./Node模块化细节'))