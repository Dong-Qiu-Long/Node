const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname,'./name2.txt');
const ws = fs.createWriteStream(filename,{
	encoding:'utf-8',
	highWaterMark:3,
	flag:'w'
})
// for(var i = 0; i < 1024*10 ; i++){
// 	ws.write('a')
// };
function write(){
	var flag = true;
	while(flag){
		flag = ws.write('a');
		i++;
	}
}
write()