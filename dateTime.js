// Dates

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log('types of myDate=', typeof myDate);

// let myCreateDate = new Date(2024, 0, 25)
// console.log(myCreateDate);
// console.log(myCreateDate.toString());
// console.log(myCreateDate.toLocaleString());
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date("2024-01-20")
let myCreateDate = new Date("01-20-2024")

// console.log(myCreateDate);
// console.log(myCreateDate.toString());
// console.log(myCreateDate.toDateString());
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.toString());
console.log(newDate.getMonth() + 1 );
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"

}

)