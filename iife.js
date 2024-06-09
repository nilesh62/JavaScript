// immediately invoked function expression (IIFE)

// function apple() {
//   console.log(`DB CONNECTED`);  // this is also right
// }
// apple()

// or

(function apple() {
    console.log(`DB CONNECTED`);  
})
  ();

//   (function appleTwo() {
//     console.log(`DB CONNECTED TWO`);
//   }) ()

  
 ( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
  }) ("Nilesh")