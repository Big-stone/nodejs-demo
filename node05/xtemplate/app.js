
//加载express框架
const express = require ('express');
//创建服务器实例
const app = express();
//端口监听
app.listen(3000);

//设置模板引擎
app.set('view engine', 'xtpl');

//设置模板目录
app.set('views', 'views');

//调用中间件加载静态资源
app.use(express.static('public'));

//get方式

app.get('/', (req, res) => {

	//调用模板引擎，响应index.html,
	res.render('index',{})
	
})

app.get('/doc', (req, res) => {
	//调用模板引擎，响应doc.html,
	res.render('doc',{})
})

app.get('/blog', (req, res) => {
	//调用模板引擎，响应blog.html,

	res.render('blog',{})
})