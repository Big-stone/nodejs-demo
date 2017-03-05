

	// var html = '<div><p></p></div>';

	// console.log(html);

	//使用``定义模板字符串

	// let html = `<div><p></p></div>`;
	
	// let html = `<table>
	// 	<tr>
	// 		<td></td>
	// 		<td></td>
	// 		<td></td>
	// 		<td></td>
	// 	</tr>
	// 			</table>`;

	// console.log(html);

var data = {
    name: '李雷',
    age:11,
    sex:'男'
}
    //let htmlstr = '<p>我叫<%= name%>, 我今年<%= age%>岁了, 性别<%= sex%>'; art-tmplate模板
    let htmlstr = `<p>我叫${data.name}, 我今年${data.age}岁了, 性别${data.sex}</p>`;

    console.log(htmlstr);//<p>我叫李雷, 我今年11岁了, 性别男</p>

    //可调用函数

    function foo ( ) {
        console.log('哈哈'.repeat(2));
    }

let fnstr = `${foo()}`;//哈哈哈哈