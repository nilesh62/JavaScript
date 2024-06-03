const accountId = 141422 // local scope
let accountEmail = "nilesh123@gmail.com" // local scope
var accountPassword = "12345" // global scope
accountCity = "jaipur" // global scope

console.log('f: ', f);
// console.log('d: ', d);
console.log('e: ', e);

var f = 50;
let d = 40;
const e = 60;

{
    var b = 10;
    const c = 30;
    console.log('c first: ', c)
}

function sum(a, b) {
    return a + b;
}

const add = sum(10, 20);
// const add = 30;
console.log('add: ', add);

console.log('b: ', b);
console.log('c: ', c);


// accountId = 2

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity])


