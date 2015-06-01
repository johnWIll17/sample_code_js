//constructor should begin with capital letter
function Person() {
    //constructor Person
}

var p1 = new Person();
//omit () <= if have no parameter
var p1 = new Person;

//=> contructor of object
p1.constructor;  //[Function: person]





function Person(name) {
    this.name = name;
    this.sayName = function() {
        console.log(this.name);
    };
    //no need to return because call {new} auto return value (the instance of constructor)
}




//hasPrototypePropertiy()
function hasPrototypePropertiy(object, property) {
    return (property in object) && !object.hasOwnProperty(property);
}



//read the value of [[Prototype]] property
var object = {};
var prototype = Object.getPrototypeOf(object);
//for any generic object like this one,
//[[Prototype]] is always a reference to {Object.prototype}
prototype === Object.prototype; //true

//for object that is created by constructor
function Person() {};
var p = new Person();

var prototype = Object.getPrototypeOf(p);
prototype === Object.prototype; //false
prototype === Person.prototype; //true



//check to see if one object is a 'prototype' for another
var object = {};
Object.prototype.isPrototypeOf(object); //true




var object = {};
console.log(object.toString()); // "[object Object]"

object.toString = function() {
    return "[object Custom]";
};
console.log(object.toString()); // "[object Custom]"

// delete own property
delete object.toString;
console.log(object.toString()); // "[object Object]"

// no effect - delete only works on own properties
delete object.toString;
console.log(object.toString()); // "[object Object]"




//using prototype with constructor
function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function() {
    console.log(this.name);
};

var p1 = new Person('john');
var p2 = new Person('smith');

p1.name;
p1.sayName();


//beware when using define data property on prototye
function Person(name) {
    this.name = name;
}
Person.prototype.favorites = [];

var p1 = new Person('john');
var p2 = new Person('smith');

p1.favorites.push('from p1');
p2.favorites.push('from p2');

p1.favorites; //['from p1', 'from p2']
p1.favorites; //['from p1', 'from p2']



//common pattern to add multiple stuff to prototype
//by using object literal
function Person(name) {
    this.name = name;
}

Person.prototype = {
    sayName: function() {
        console.log(this.name);
    },

    toString: function() {
        return '[Person ' + this.name + ']';
    }
};
