// for of loops

// for (const iterator of object) {
    
// }
// ["", "", ""]
//[{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "hello world"

// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
// }

// maps 

// const map = new Map()

// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// console.log(map);

// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// console.log(map);// do  bar india nhi print hua kyoki unique key chahiye

// for (const [key, value] of map) {

//     console.log(key, ':-', value);
    
// }

// const myObject = {
//     'game1': "Ludo",
//     'game2': "spiderman"
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// } // ye nhi hoga 

// const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     // console.log(key);
//     // console.log(`${key} shorcut for is ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//   console.log(key);
// }

// console.log(map);
 // const map = new Map()
 // map.set('IN', "India")
 // map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
 // for (const key in map) {
 //    console.log(key);
// }     // this is not valid

// foreach loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item)=>{
//     console.log(item);
// })

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
   {languageName: "javascript",
    languageFileExtension: "js"
    
   },
   {languageName: "java",
    languageFileExtension: "java"
    
   },
   {languageName: "python",
    languageFileExtension: "py"
    
   }


]

myCoding.forEach((item)=>{
    console.log(item);
// console.log(item.languageName);
// console.log(item.languageFileExtension);
})