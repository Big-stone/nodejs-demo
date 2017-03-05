
var [ a, b, c, d] = [ 1, 2, 3, 4];

//等同于 var a = 1, b = 2, c = 3, d = 4;
console.log(a, b, c, d);//1 2 3 4

//按书写顺序一一对应

var [a, b, c, [d]]  = [1, 2, 3, [5]];

console.log(a, b, c, d); //1 2 3 5

var [ d, e, f ] = 'abc';

console.log(d, e, f); //a b c  右侧需要的是可以遍历的值

//嵌套

var [f, [c, d, [a]]] = [4, [6, 8, [10]]];

console.log(f, c, d, a); //4 6 8 10

//解析不成功则为undefined;

var [a, b, c ] = [1, 2];

console.log(a, b, c); //1 2 undefined

//默认值

var [name, age] = [ '李雷',11 ];

console.log(name ,age);//李雷 11

var [name, age = 11] = ['李雷'];

console.log(name ,age);//李雷 11

var [name = '李雷', age = 11] = [];

console.log(name ,age);//李雷 11

//严格等于undefined

var [name = '李雷', age = 11] = [ null, null ];

console.log(name ,age); //null null

//只有右侧值为undefined时才会使用默认值；
var [name = '李雷', age = 11] = [undefined, false ];

console.log(name ,age); //李雷 false

//...剩余
var [a, b, c, ...d] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(d);//[ 4, 5, 6, 7, 8, 9 ]
