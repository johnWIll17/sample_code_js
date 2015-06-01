//function expression:
var add = function(a, b) {
    return a + b;
};

//funciton as values
function sayHi() {
    console.log('Hi');
}

var sayHi2 = sayHi;
sayHi2();

//rewrite with contructor
var sayHi = new Function('console.log("hi");');
var sayHi2 = sayHi;


var arr = [11, 1, 21, 2]
arr.sort();  // 1, 11, 2, 21

// <0 : a < b
// =0 : a = b
// >0 : a > b
arr.sort(function (a, b) {
    return a - b;
});


//parameters
var add = function (a, b) {
    return a + b;
};
add(5,6,54,64); //11
add.length;     //2

add = function() {
    return arguments[0];
}
add('hello');  //hello
add.length;    //0


//arguments: useful when using a function that expects any number of arguments
function sum() {
    var result = 0;
    for (i = 0, len = arguments.length; i < len; i++) {
        result += arguments[i];
    }

    return result;
}






//using contructor
var sayHello = new Function('msg', 'console.log(msg);');
sayHello = new Function('console.log("Hi");');

sayHello('Hello'); //Hi





//mimic function overloading
function sayHello(msg) {
    if (arguments.length === 0) {
        msg = 'Hi';
    }
    console.log(msg)
}
//in practice, often check with {undefined} rather than using {arguments}
function sayHello(msg) {
    if (msg === undefined) {
        msg = 'Hi';
    }
    console.log(msg);
}


//Changing {this}

//call()
function sayName(label) {
    console.log(label + ': ' + this.name);
}

var person1 = {
    name: 'John'
};
var person2 = {
    name: 'Michael'
};
var name = 'Smith';

sayName.call(this, 'global');     //global: Smith
sayName.call(person1, 'person1'); //person1: John
sayName.call(person2, 'person2'); //person2: Michael
