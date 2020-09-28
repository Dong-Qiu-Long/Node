const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname,"name.txt");
const rs = fs.createReadStream(filename,{
	encoding:'utf-8',
	highWaterMark:1,
	autoClose:true
})
rs.on('open',()=>{
	console.log('文件被打开！')
})
rs.on('close', ()=>{
	console.log('文件被关闭了')
})
rs.on('data',(chunk)=>{
	write(chunk)
	console.log('读到了一部分数据',chunk);
	rs.pause();
	setTimeout(()=>{
		rs.resume();
	},1000)
})
const writeFile = path.resolve(__dirname,'name1.txt')
async function write(items){
	await fs.promises.writeFile(writeFile,items,{flag:'a'})
}