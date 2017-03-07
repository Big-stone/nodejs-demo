
/*******普通实现方式*******/

const http = require('http');

const url = require('url');

const path = require('path');

const fs = require('fs');

const mime = require('mime');

const server = http.createServer();

server.listen(3000);

server.on('request',( req, res) => {

	let pathname = url.parse( req.url ).pathname;

	console.log(pathname)

	let realpath;
	//如果为根目录时默认读取index
	if(pathname == '/') {
		//拼接文件路径
		realpath = path.join('views', 'index.html');

		//将index.html响应给浏览器
	fs.readFile(realpath, (err,file) => {
		if(err) {
			return res.end('错误');
		};

	res.writeHeader(200,{'Content-Type':'text/html'});
	res.end(file);

	});


	} else if( pathname == '/201703/blog' || pathname == '/blog') {
		//拼接文件路径
		
		realpath = path.join('views', 'blog.html');

		//将blog响应给浏览器
		fs.readFile(realpath, (err,file) => {
			if(err) {
				return res.end('错误');
			};

		res.writeHeader(200, {'Content-Type':'text/html'});
		res.end(file);

		});

		
	}else if( pathname == '/201703/doc' || pathname == '/doc' ) {
		//拼接文件路径
		
		realpath = path.join('views', 'doc.html');

		//将doc响应给浏览器
		fs.readFile(realpath, (err,file) => {
			if(err) {
				return res.end('错误');
			};
		
		res.writeHeader(200, {'Content-Type':'text/html'});
		res.end(file);

		});

		
	} else {
		//静态资源
		//拼接文件路径
		let staticurl = path.join('public', pathname);
		// console.log(staticurl);
		// console.log(mime.lookup(staticurl))
		fs.readFile(staticurl, (err,file) => {
			if(err){
				return res.end('错误');
			}

		res.writeHeader(200,{'Content-Type':mime.lookup(staticurl)});
		res.end(file);

		})
	}

	// console.log(realpath);


})
