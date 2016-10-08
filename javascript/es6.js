"use strict";

// const
// const is used to set a value and never change it
const a = 8;
console.log("a", a);

// let
// use let when you want a local variable inside a function
let b = 8;
console.log("b", b);
b = 12;
console.log("b", b);

function varTest() {
    var x = 1;
    if(true) {
        var x = 2;
        console.log("inside if x ", x);
    }
    console.log("outside if x ", x);
}

varTest();

function letTest() {
    let y = 1;
    if(true) {
        let y = 12;
        console.log("inside if y ", y);
    }
    console.log("outside if y ", y);
}

letTest();

// arrow functions
var sum = function() {
    let a = 1, b = 2;
    return a + b;
}
console.log("hardcore sum in EX5", sum());;

// this is es6 shorthand for the function above
var sum2 = () => {
    let a = 1, b = 2;
    return a + b;
}
console.log("hardcoded sum in ES6", sum());


var reflect = (value) => {
    return value
}
// var reflect = (value) => value; // super shorthand for the above ES6
console.log("reflect in ES6", reflect("ES6 is the new hotness"));

var realSum = (num1, num2) => {
    return num1 + num2;
}
console.log("realSum ES6", realSum(2, 3));

// string templates
let m = "biteme";
console.log("m = ", m);

let r = `hello my name is ${m}`;
console.log("r = ", r);

// object literal property shorthand

let wow = "Hi these", es6 = "ES6", numNum = ()=>{console.log("howdy")}

let myOldObject = {
    wow:wow,
    es6:es6,
    numNum: numNum
}

console.log("myOldObject", myOldObject);
let myNewObject = {
    wow,es6,numNum
}
console.log("myNewObject", myNewObject);

// method properties

var e5Obj = {
    foo:function(){console.log("foo")},
    bar:function() {console.log("bar")}
}
console.log("e5Obj", e5Obj);

var Es6Obj = {
    foo(){console.log("foo")},
    bar(){console.log("bar")}
}
console.log("Es6Obj", Es6Obj);





