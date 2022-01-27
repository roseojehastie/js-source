/*
let a = 7; // number
let b = '6'; // string not treated a snumeric value 
let c = a + b; // concatineted as a no. & string ca not be added instead numeric value is coercion to string.... 
console.log(c); 
*/

// special funtion use to force conversion...
let a = 7;
let b = '6';
b = parseInt(b, 10) //converts a "STRING" to SN "INTEGER": build in function for converting one datatype into another
let c = a + b;
console.log('Answer: ' + c);

/*
let d = parseInt('boob', 100);
console.log(d);

*/

let d = parseInt('boob', 100);
let e = isNaN(d); // build in function for converting one datatype into another
console.log(d);
console.log(e);