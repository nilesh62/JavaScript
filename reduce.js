const myNums = [1, 2, 3 ]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval:${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)
console.log(myTotal);