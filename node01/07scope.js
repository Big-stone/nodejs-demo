//es5版本不存在块级作用域

if(true) {
	var num = 10;
}

console.log(num);

//es5目前只有全局作用域和局部作用域

function fn () {
	var a = 10;
}

fn();

console.log(a)//报错 a is not defined;