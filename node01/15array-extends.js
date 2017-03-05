

//Array.from();

function foo () {
	//arguments 伪数组
	
	console.log(Array.from(arguments));

}

// foo(1, 2, 3);//[ 1, 2, 3 ]

//可以转换拥有length属性对象

let str = 'hello world';

// console.log(Array.from(str)) //[ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]

let obj = {
	'0': 'abc',
	'1': 11,
	length:2
}

// console.log(Array.from(obj));//[ 'abc', 11 ]

//Array.of()方法定义数组

// let arr = new Array( 1, 2, 3 );

// console.log(arr);//[ 1, 2, 3 ]

// let arr = new Array(3);

// console.log(arr);//[ , ,  ] ES5小问题

//Array.of()定义

// let arr = Array.of(3);

// console.log(arr);//[ 3 ]

//find() 从数组中找到某个元素
//findIndex() 从数组中找到某个元素的索引

let newarr = Array.of( 'd', 'a', 'b', 'c', 'a', 'd' );

// var arr = newarr.find(function ( val, key, arr) {

	// console.log( val, key, arr ); //val:值,key:对应索引,arr:数组

		// return val == 'd'; 

// });

// console.log(arr); //d

let nums = Array.of( 1, 2, 3, 4, 18, 45, 16 );

// var res = nums.find( function ( val ,key, arr ) {

	// console.log(val, key, arr);

	// return val > 2;
// })

// console.log(res);//3 找到第一个符合条件的立刻结束

// var res = newarr.findIndex( function ( val, key, arr) {

	// return val == 'a';
// })

// console.log(res); //1 找个第一个符合条件的返回索引值

var res = nums.findIndex( function ( val, key, arr ) {

	return val > 4;
})

console.log(res);//4 找个第一个符合条件的返回索引值