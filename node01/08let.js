
// es6新增let关键字,用于声明变量,其声明的变量只在当前代码块中有效

// var str = 'hello';

let str = 'hello';

console.log(str);

if(true) {
	//let声明的变量只能在当前{}代码块被访问
	let num = 10;

	console.log(num);//正常打印
}

//console.log(num);//num is not difined

//使用let声明变量可以避免全局变量污染

var temp = [];

for ( let i = 0; i <6; i++ ) {
	temp[i] = function () {
		console.log(i);
	}
}

temp[5](); //5

//var 存在变量提升
//let 不存在变量提升
//let 不允许重复声明。

var t;

if(true) {
	t = 10;
	let t; //t is not difined
}