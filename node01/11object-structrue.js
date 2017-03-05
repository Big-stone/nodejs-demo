

//先查找同名属性然后再赋值

var {arg1: name, arg2: age} = { arg1:'李雷', arg2:11 }

//console.log(name,age);//李雷 11

//不受顺序限制
var {arg1: name, arg2: age} = { arg2:11, arg1:'李雷' }

//console.log(name,age);//李雷 11

//简写
// var {name:name, age:age} = { name:'李雷', age:11 };
var {name, age} = { name:'李雷', age:11 };

//console.log(name,age);//李雷 11

//嵌套
// var {name: name, son:{sonname:sonname}} = {name: "李雷", son:{sonname: "李雷雷"}};

var {name, son:{sonname}} = {name: "李雷", son: {sonname:"李雷雷"}};

// console.log(name, sonname);//李雷 李雷雷

//解析不成功为undefined

var {name, age, sex} = {name: "李雷", age:18, sex:null};

// console.log(name,age,sex);//李雷 18 null

var {name, age, sex} = {name: "李雷", age:18, sex:undefined};

// console.log(name,age,sex);//李雷 18 undefined

//默认值

var {name, age, sex = '男'} = {name: '李雷', age:18};

// console.log(name,age,sex);//李雷 18 男

//严格等于undefined

var {name, age, sex, score} = {name: '小明', age: 18, sex:'男'}

console.log(name, age, sex, score);//小明 18 男 undefined
