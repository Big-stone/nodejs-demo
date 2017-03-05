

/**
 * 使用os系统模块可以获取当前操作
 * 系统信息,内存，cpu
 * 使用require加载模块
 */

const os = require( 'os' );

// console.log(os);

// os是一个对象,此对象上有若干方法

console.log('hostname' + os.hostname()); //主机名称
console.log('freemem' + os.freemem()); //内存
console.log('platform' + os.platform());