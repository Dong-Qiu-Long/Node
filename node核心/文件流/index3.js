const fs = require('fs');
const path = require('path');
async function wire() {
	const from = path.resolve(__dirname, './name1.txt');
	const to = path.resolve(__dirname, './name2.txt');

	const rs = fs.createReadStream(from, {
		encoding: 'utf-8',
		highWaterMark: 3,
		autoClose: true
	})
	const ws = fs.createWriteStream(to, {
		encoding: 'utf-8',
		highWaterMark: 3,
		flag: 'a'
	})
	rs.on('data', (item) => {
		const flag = ws.write(item);
		if (!flag) {
			rs.pause()
		}
	})
	ws.on('drain', () => {
		rs.resume();
	})
}
wire()