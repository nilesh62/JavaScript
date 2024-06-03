// Number Data Types
let a = 10;
console.log('Type of a that is 10 = ', typeof a);

let b = 'Delhi';

console.log('Type of b that is "Delhi" = ', typeof b);

let c = true;

console.log('Type of c that is true = ', typeof c);

let d;
console.log('Type of d that is not defined = ', typeof d);

let student = {
    rollNumber: 101,
    name: 'Shubham Kumar',
    email: 'sg@gmail.com',
    mobile: 8855774456
}

console.log('Type of student = ', typeof student);

let empty = {}  || new Object(); // {} or new Object()
console.log('Type of empty is = ', typeof empty);


let arr = [1, 5, 5, "Delhi"]; // Array is also an object

console.log('Type of arr is = ', typeof arr);

console.log(Array.isArray(empty));
