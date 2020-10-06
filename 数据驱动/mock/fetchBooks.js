const Book = require('../services/bookService.js')
const axios = require('axios').default;
const cheerio = require('cheerio')
async function getBooksHTML() {
	const resp = await axios.get('https://book.douban.com/latest');
	return resp.data
}

//得到书籍的详情页数组
async function getBookLinks() {
	const html = await getBooksHTML();
	const $ = cheerio.load(html);
	const aElement = $('#content .grid-12-12 li a.cover');
	const links = aElement.map((i, ele) => {
	const href = ele.attribs['href'];
	return href
	}).get();
	return links
}


//得到书籍详情
async function getBookDateil(url) {
	const HTML = await axios.get(url);
	const $ = cheerio.load(HTML.data);
	const name = $('h1').text().trim();
	const imgSrc = $('#mainpic .nbg img').attr('src');
	const span = $('#info span.pl')
	const autorName = span.filter((i, ele) => {
		return $(ele).text().includes('作者')
	})
	const autor = autorName.next('a').text()
	const publishDateName = span.filter((i, ele) => {
		return $(ele).text().includes('出版年')
	})
	const publishDate = publishDateName[0].nextSibling.nodeValue.trim();
	
	return {
		name,
		img:imgSrc,
		publishDate,
		autor
	}
};

async function fetcAll(){
	const links =await getBookLinks();
	const proms = links.map((link)=> {
		return getBookDateil(link)
	})
	return Promise.all(proms)
}
fetcAll().then(books => {
	books.forEach(obj=>{
		Book.addBook(obj)
	})
})