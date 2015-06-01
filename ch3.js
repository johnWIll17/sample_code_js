//detecting property

//in: - check both 'own' property & 'prototype' property
var person1 = {
    name: 'John',
    sayName: function() {
        console.log('Hi');
    }
};
('name' in person1);     //true
('sayName' in person1);  //true


//hasOwnProperty(): - check just for 'own' property
//                  - present on all objects
('toString' in person1);            //true
person1.hasOwnProperty('toString'); //false


//delete
var person = {
    name: 'John'
};
delete person.name; //=> true/false



//enumeration
var property;
//iterates enumerables properties, both 'prototype property' & 'own property'
for (var property in person) {
    console.log('Property name: ' + property);
    console.log('Property value: ' + person[property]);
}

//=> enumerable properties, 'own property' (ECMAScript 5)
var property = Object.keys(person);


//check whether a property is enumerable
//propertyIsEnumerable(): present on every object
var person1 = {
    name: "Nicholas"
};

console.log("name" in person1); // true
console.log(person1.propertyIsEnumerable("name")); // true

var properties = Object.keys(person1);
console.log("length" in properties); // true
//console.log(properties.propertyIsEnumerable("length")); // false
console.log(person1.propertyIsEnumerable("length")); // false


//Accessor property
var person = {
    _name: 'John',

    //Accessor properties

    //getter
    get name() {
        console.log('Reading name');
        return this._name;
    }
    //setter
    set name(value) {
        console.log('Writing name');
        this._name = value;
    }
    //======================================
}


//when assign new value to data property
//that value will also affect in accessor getter property
//because we use data property to store value for accessor property
person._name = 'edited by data property';
person.name; //edited by data property



//Common attributes


//property descriptor object containing the attributes to set
//The descriptor has properties with the same name as the internal attributes but without the square brackets
var person1 = {
    name: "Nicholas"
};

Object.defineProperty(person1, "name", {
    enumerable: false
});

console.log("name" in person1); // true
console.log(person1.propertyIsEnumerable("name")); // false

var properties = Object.keys(person1);
console.log(properties.length); // 0

Object.defineProperty(person1, "name", {
    configurable: false
});

// try to delete the Property
delete person1.name;

console.log("name" in person1); // true
console.log(person1.name); // "Nicholas"

Object.defineProperty(person1, "name", { // error!!!
    configurable: true
});




//Data property attributes
var person = {
    name: 'John'
};

//or do this
var person = {};

Object.defineProperty(person, 'name', {
    value: 'John',
    enumerable: true,
    configurable: true,
    writable: true
});



//accessor property attributes
var person = {
    _name: 'John'
};

Object.defineProperty(person, 'name', {
    get: function() {
        console.log('Reading name');
        return this._name
    },
    set: function(value) {
        console.log('Writing name');
        this._name = value;
    },
    enumerable: true,
    configurable: true
});



//define multiple properties
var person = {};

Object.defineProperties(person, {

    //data property to store data
    _name: {
        value: 'John',
        enumerable: true,
        configurable: true,
        writable: true
    },

    //accessor property
    name: {
        get: function() {
            console.log('Reading data');
            return this._name;
        },
        set: function(value) {
            console.log('Writing data');
            this._name = value;
        },
        enumerable: true,
        configurable: true
    }
});



//retrieving property
var person = {
    name: 'John'
};

var description = Object.getOwnPropertyDescriptor(person, 'name');
description.enumerable;



//preventing extensions
var person1 = {
    name: "Nicholas"
};

console.log(Object.isExtensible(person1)); // true

Object.preventExtensions(person1);
console.log(Object.isExtensible(person1)); // false

person1.sayName = function() {
    console.log(this.name);
};
console.log("sayName" in person1); //false


//seal object
var person1 = {
    name: "Nicholas"
};

console.log(Object.isExtensible(person1)); // true
console.log(Object.isSealed(person1)); // false

Object.seal(person1);
console.log(Object.isExtensible(person1)); // false
console.log(Object.isSealed(person1)); // true

person1.sayName = function() {
    console.log(this.name);
};
console.log("sayName" in person1); // false
person1.name = "Greg";
console.log(person1.name); // "Greg"

delete person1.name;
console.log("name" in person1); // true
console.log(person1.name); // "Greg"

var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
console.log(descriptor.configurable); 





//frozen
var person1 = {
    name: "Nicholas"
};

console.log(Object.isExtensible(person1)); // true
console.log(Object.isSealed(person1)); // false
console.log(Object.isFrozen(person1)); // false

Object.freeze(person1);
console.log(Object.isExtensible(person1)); // false
console.log(Object.isSealed(person1)); // true
console.log(Object.isFrozen(person1)); // true

person1.sayName = function() {
    console.log(this.name);
};
console.log("sayName" in person1); // false

person1.name = "Greg";
console.log(person1.name); // "Nicholas"

delete person1.name;
console.log("name" in person1); // true
console.log(person1.name); // "Nicholas"

var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
console.log(descriptor.configurable); // false
console.log(descriptor.writable); // false
