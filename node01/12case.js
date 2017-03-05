
//函数赋值

// function fn ( a, b ) {
// 	console.log(a + b);
// }

// fn(1,1);

function fn ([a, b = 10]) {
	console.log(a + b);
}

// var arr = [ 10, 20 ];

// fn(arr);//30

// fn([10]);//20

//交换两个变量(不借助第三个变量实现)

let a = 'hello';

let b = 'world';

// console.log(a, b);//hello world

[a, b] = [b, a];

// console.log(a, b);//world hello

//接收函数返回值

function foo () {

	return {
		name: '李雷',
		age:16,
		sex: '男'
	}
}

// var {name, age, sex} = foo();

// console.log(name, age, sex);//李雷 16 男


//提取JSON对象值

let json = '{"name": "韩梅梅", "age":11}'

let {name, age} = JSON.parse(json);

console.log(name, age);//韩梅梅 11