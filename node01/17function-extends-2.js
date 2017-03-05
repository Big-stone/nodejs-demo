
// ...arg //剩余

function fn( a, b, ...c ) {

	console.log( c );//[ 3, 4, 5 ]
	console.log( a, b );//1 2
}

fn( 1, 2, 3, 4, 5 );
