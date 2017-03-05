
//使用const声明常量

const c = 12;
console.log(c);

//c = 14;  报错,不能被修改

//声明时必须赋值

//const d; 报错

//不允许重复声明



if ( true ) {
	const e = 10;
//也会创建块级作用域
	console.log(e);
}

console.log(e); // e is not defined