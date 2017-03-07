

//引入系统模块

const path = require('path'); //此模块专门处理路径

//模拟一个路径

let src = './public/images/logo.png';

//获取所在路径

let pathname = path.dirname(src);


// console.log(pathname);//     ./public/images 模拟的路径
// console.log(__dirname); //   E:\nodejs-practice\node02 真实路径

//获取文件名

let filename = path.basename(src);

// console.log(filename);//logo.png 模拟的文件名
// console.log(__filename);//   E:\nodejs-practice\node02\path.js 真实文件名

//获取扩展名

let extname = path.extname(src);

// console.log(extname);// .png 模拟的扩展名

//解析路径

let parsepath = path.parse(src);

// console.log(parsepath);
/* { root: '',
  dir: './public/images',
  base: 'logo.png',
  ext: '.png',
  name: 'logo' } */

  let {dir, base, ext, name} = parsepath;

  // console.log(dir, base, ext, name); //  ./public/images logo.png .png logo

  // 路径组合

  // let joinpath = path.join('./a', './b', './c') //   a\b\c

  // let joinpath = path.join('./a', '../b', './c'); //   b\c

  let joinpath = path.join('./a', './b', '../../c')  //   \c

  console.log(joinpath);