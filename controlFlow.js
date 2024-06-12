// iff statement 
// const isUserloggedIn = true
// if (isUserloggedIn){

// } 

// <, >, =>, <=, ==, ===, != etc

// if (2 == "2" ) {
//     console.log("executed");
// }

// if ( 2 === "2") {
//    console.log("executed"); 
// }
// if (2 != "3") {
//     console.log("executed");
// }

// const temperature = 42
// if (temperature < 50) {
//     console.log("temperature less then 50");
    
// }
// const temperature2 = 42
// if (temperature2 < 52) {
//     console.log("temperature less then 50");
    
// }
// else {
//     if (temperature > 50 ) {
    
//     }
// }
// console.log("temperature greater then 50" );

// const score = 200
// if (score > 100) {
//     let power = "fly" 
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 2000
// if (balance > 1000) {
//    console.log("test"); 
// }
// //or

// const balance2 = 2000
// if (balance > 1000) console.log("test2");

// const balance3 = 1000
// if (balance3 <500) {
//     console.log("balance less then 500");
    
    
// } else if (balance3 <750) {
//         console.log("balance less then 750");
// } else if (balance3 <900) {
//     console.log("balance less then 900");
// } else {
//     console.log("balance less then 1200");
// }

 const isUserloggedIn = true
 const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
 if (isUserloggedIn && debitCard && 2==2) {
    console.log("allow to bye cousres");          // this is right
 }

 if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User loggedIn");
 }
// if (isUserloggedIn && debitCard && 2==3) {
//     console.log("allow to bye cousres");    // this wrong.
//  }