

const http = require('http');

const url = require('url');

const path = require('path');

const fs = require('fs');

const mime = require('mime');

const students = require('./database/students');

const querystring = require('querystring');

const template =require('art-template');

//配置路径
template.config('base',path.join(__dirname, 'views'));

const server = http.createServer();

server.listen(3000);

server.on('request',( req, res) => {

	//拼凑模板
	res.render = function (tpl, data) {
		//使用模板引擎输出html
		let html = template(tpl, data);

		res.writeHeader(200,{'Content-Type':'text/html'});
		res.end(html);
	};

	//解析url
	let {pathname, query} = url.parse(req.url,true);

		// console.log(pathname,query);
	//设计路由
	switch (pathname) {

		case '/':
		case '/add':
		//把add.html响应
		res.render('add',{action:'/save'});
		break;

		/*查看学员信息*/
		case '/list' :
		//响应list.html
		res.render('list',{lists:students});
		break;
//******************************************************
		/*新增学员信息*/
		case '/save':
		//post是伴随着请求主体发送的,并且是一块一块发送
		req.body = '';

		req.on('data',(chunk) => {
			req.body += chunk;
		});

		req.on('end',() => {
			//将post提交的数据解析成对象
			let formData = querystring.parse(req.body);

			//把数据添加到原数据中
			students.push(formData);

			fs.open('./database/students.json', 'w', (err,fd) => {
				if(err) {
					return res.end('错误');
				}
				//把数据保存到文件中
				fs.write(fd, JSON.stringify(students));
				//保存完成后跳转页面
				res.writeHeader(302,{
					Location:'/list'
				});

				res.end();
		
			});
		});

		break;

//*********************************************************
		
//*********************************************************
		       /*响应静态资源*/
		   default:
		   fs.readFile(path.join('public',pathname), (err, file) => {
		   		if (err) {
		   			return res.end('not found');
		   		};

		   		res.writeHeader(200,{'Content-Type':mime.lookup(pathname)});
		   		res.end();
		   		console.log(pathname);
		   })

	}


})