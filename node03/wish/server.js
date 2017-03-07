
const http = require('http');

const server = http.createServer();

const fs = require('fs');

const url = require('url');

const path = require('path');

const mime = require('mime');

server.listen(3000);

server.on('request', ( req, res ) => {


	// console.log(req.url);
	let pathname = url.parse(req.url).pathname;

			if(pathname == '/') {
			pathname = 'index.html';
	}

	console.log(pathname);
	let realpath = path.join('./static',pathname);

	// console.log(mime.lookup(realpath));

	// console.log(realpath);



	fs.readFile(realpath,(err,file) => {

		if(err) {
			res.writeHeader(404,{'Content-Type':'text/html'});
			res.write('404 Not Found!');
			return res.end();
		}

	res.writeHeader(200,{'Content-Type':mime.lookup(realpath)});

	res.write(file);
	res.end();

	});


})

//1.创建服务器
//2.读取文件内的html然后再返回,加载fs
//3.根据请求地址，读取内容，然后再响应,加载url
//4.加载路径path
//5.通过安装mime加载js、css、img等文件

