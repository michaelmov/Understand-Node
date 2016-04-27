// object properties and methods
var obj = {
    greet: 'Hello'
};

console.log(obj.greet);
console.log(obj['greet']);

// funcitons and arrays

var arr = [];

arr.push(function () {
    console.log('Hello world 1');
});

arr.push(function () {
    console.log('Hello world 2');
});

arr.push(function () {
    console.log('Hello world 3');
});

arr.forEach(function (item) {
    item();
});