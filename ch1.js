//best way to identify 'primitive values'
//{typeof}
typeof 'hello';
//best way to identify {null}
obj === null;


//best way to 'dereference' object
//set the object to {null}
var obj = new Object();
obj = null;

//can add/remove property of objects at anytime
var obj = new Object();
obj.myCustomObject = 'Awesome';


//========================================
//Built-in references types
//  - Array
//  - Date
//  - Error
//  - Function
//  - Object
//  - RegExp



//property name: - can be identifier or string
//               - both work the same (functional aspect)

//using identifier
var obj = {
    name: 'John Doe',
    age: 25
};
//can user either [] or .
obj.name
obj['name']

//using string: - useful if the property name contains space or special chars
var obj = {
    'name space': 'John Doe',
    'age': 25
};
//must use [] to access property value
obj['name space']



//use function 'literal' form (recommended)
function reflect(value) {
    return value;
}

//same code above
//but not recommended
var reflect = new Function('value', 'return value;');




var reg1 = /\d+/g;
vqr reg2 = new RegExp('\\d+', 'g'); //same above


//typeof {function} => 'function'
//        the other => 'object'
typeof reflect;


//instanceof: - can identify inherited types
var arr = [];
arr instanceof Array;  //true
arr instanceof Object; //true


//ECMAScript 5: - best way to identify array
//              - isn't supported in IE8-
var arr = [];
Array.isArray(arr);
