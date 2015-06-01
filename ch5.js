//object literal
var book = {
    title: 'The new book'
}
var prototype = Object.getPrototypeOf(book);
prototype === Object.prototype; //true



//valueOf(): - gets called whenever an operator is used on an object
var now = new Date(),
    earlier = new Date(2013, 1, 1);

//before compare, each object call {valueOf()}
now > earlier; //true

//can define our own {valueOf}
//when our objects are intended to be used with operators
function Person() {
    this.name = name;
}

var p = new Person('john');
p.valueOf(); // {name: 'john'}

Person.prototype.valueOf = function() {
    return 'owr own valueOf';
}
p.valueOf(); //our own valueOf




//toString: - fallback whenever calling {valueOf} not return a primitive string
var book




//loop through property of an object
var empty = {};

for (var property in empty) {
    if ( empty.hasOwnProperty(property) ) {
        //do something
    }
}






//Object inheritance
var book = {
    title: 'The new book'
}
//what behind the scene
var book = Object.create(Object.prototype, {
    title: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 'The new book'
    }
});



//inherit from other objects
var person1 = {
    name: 'John',
    sayName: function() {
        console.log(this.name);
    }
};

var person2 = Object.create(person1, {
    name: {
        configurable: true,
        writable: true,
        enumerable: true,
        value: 'Greg'
    }
});

person1.sayName(); //John
person2.sayName(); //Greg

person1.hasOwnProperty('sayName'); //true
person1.isPrototypeOf(person2);    //true
person1.hasOwnProperty('sayName'); //false



//create object with null [[Property]]
var nullPropertyObject = Object.create(null);

nullPropertyObject.toString(); //error: don't have toString method
nullPropertyObject.valueOf();  //error: don't have toString method

'toString' in nullPropertyObject;
'valueOf' in nullPropertyObject;






//Constructor inheritance
function YourConstructor() {
    //do somethind
}
//what behind the scene
YourConstructor.prototype = Object.create(Object.prototype, {
    constructor: {
        configurable: true,
        writable: true,
        enumerable: true,
        value: YourConstructor
    }
});
