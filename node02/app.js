

const http = require('http');

const url = require('url');

const querystring = require('querystring');

const server = http.createServer();

server.listen(2000);

// server.on('request',(req, res) => {

// 	res.writeHeader(200,{
// 		'Content-Type':'text/html'
// 	});

// 	// res.write('请求方式为:' + req.method);
// 	// res.write('<br>请求地址为:' + req.url);
// 	// res.write('<br>请求头为:' + JSON.stringify(req.headers));

// 	// res.end();

// })

// get请求方式处理
// server.on('request',(req, res) => {

// 	res.writeHeader(200,{
// 		'Content-Type':'text/html'
// 	});
// 	//请求地址
// 	// console.log(req.url);
	
// 	//使用parse方法解析
// 	// console.log(url.parse(req.url,true));
	
// 	//query解析后的结果为一个对象
// 	let query = url.parse(req.url,true).query;
// 	//通过解构方式赋值
// 	// console.log(query);
// 	let {username, pass} = query;

// 	res.write('请求的方式为:' + req.method);
// 	res.write('<br>昵称为:' + username);
// 	res.write('<br>密码为:' + pass);
	
// 	res.end();
// })

//post请求方式处理
server.on('request',(req,res) => {

	let formData = '';
	//定义data事件,post数据上传过程中会持续触发此事件
	req.on('data',(chunk) => {

		//拼接数据
		formData += chunk;
	});

	// console.log(formData)

	req.on('end', () => {

		//formData现在就是一个完整的post数据了
		//formData是一个字符串
		//系统模块 querystring的parse方法进行解析
		res.writeHeader(200,{
			'Content-Type':'text/html'
		});

		//解构赋值
		
		let {username, pass} = querystring.parse(formData);

		// console.log(querystring.parse(formData));
		res.write("请求的方式为:" + req.method);
		res.write("<br>姓名为:" + username);
		res.write("<br>密码为:" + pass);

		res.end();
		
	})

})