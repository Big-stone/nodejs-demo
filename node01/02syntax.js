
var str = "字符串类型变量"

console.log(str);

var _str = "下划线开头"

console.log(_str);
//检测数据类型
console.log(typeof str);

var obj = {name: '李雷', age:11};

console.log(typeof obj);

var num = 12.345;

console.log( typeof num);

var un;

console.log(un);

//定义函数
function fn() {
	console.log('函数声明');
}

fn();

var func = function () {
	console.log(arguments);
	console.log("函数表达式");
}

func('a','b');
//流程控制
if(true) {
	console.log('判断语句')
}

for( var i = 0; i < 100; i++ ) {

	if( i == 10 ) {
		continue;
	}
	console.log(i);
}
//内置对象

var now = new Date();

console.log(now);
