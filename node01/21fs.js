

//fs模块可以进行文件操作

const fs = require('fs');


//创建文件夹
//第一个参数 --文件夹名称
// fs.mkdir('./fs',function (err) {

// 	console.log(err);
// 	//err 当文件创建失败时, err 就是错误信息
// 	//当创建成功时err为null
// })

// fs.mkdir('./fs2',(err) => {
// 	console.log(err);
// })

//--------------------------华丽分割线---------------------------------

//删除一个文件夹
//第一个参数 --文件夹名称
// fs.rmdir('./fs',(err) => {
// 	console.log(err);
// })

//--------------------------华丽分割线---------------------------------

// 创建一个文件
/**
 * 第一个参数 --文件名称
 * 第二个参数 --文件内容
 * 第三个参数 --回调函数
 */

// fs.writeFile('./demo.txt','李雷',(err) => {
// 	console.log(err);
// })

//--------------------------华丽分割线---------------------------------

//读取一个文件
/**
 * 第一个参数 --文件路径
 * 第二个参数 --编码格式
 * 第三个参数 --回调函数
 */

// fs.readFile('./demo.txt','utf8',( err, res) => {
// 	//在nodejs中回调函数中错误信息永远都是第一参数
// 	console.log(err); //错误信息
// 	console.log(res); //文件内容
// })

//--------------------------华丽分割线---------------------------------

//文件读写

/**
 * 第一个参数 --文件路径
 * 第二个参数 --打开模式 读r, 写 w, 追加 a
 * 第三个参数 -- 回调函数
 */
// fs.open('./demo.txt', 'r', (err, fd) => {
// 	//以读模式打开
// 	// console.log(err);
// 	// console.log(fd);

// 	fs.write(fd,'韩梅梅',(err) => {
// 	console.log(err);	//读模式无法写入
// });

// });

// fs.open('./demo.txt', 'w', (err, fd) => {
// 	//以写模式打开
// 	console.log(err);
// 	console.log(fd);

// 	fs.write(fd,'韩梅梅',(err) => {
// 	console.log(err);	 //写模式会覆盖原有数据
// });

// });

fs.open('./demo.txt', 'a', (err, fd) => {

	//以追加模式打开
	console.log(err);
	console.log(fd);

	fs.write(fd,'李雷',(err) => {
	console.log(err);	 //写模式会覆盖原有数据
});

});

