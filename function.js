//function

function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("L");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()
function addTwoNumber(number1, number2){
    console.log(number1 + number2);
    // let result = number1 + number2
    // return result
    return number1 + number2
    // console.log("Nilesh"); //ye print nhi hoga kyoki result se pahle hai

}
// console.log("Nilesh"); ye print hoga kyoki result ke baad hai

// addTwoNumber(3, 4)
// addTwoNumber(3, "4")
// addTwoNumber(3, null)
const result = addTwoNumber(3, 4)
// console.log("Result:", result );

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
    return
    }
    return`${username} just logged in `

}
console.log(loginUserMessage("Nilesh"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());
