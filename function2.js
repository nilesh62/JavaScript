//  /function

function calculateCartPrice(val1, val2,...num1){
    return num1
}
// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200 , 400, 600, 800));

const user = {
    username: "Nilesh",
    price: 999
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username}and price is ${anyobject.price}`);

}
// handleObject(user)
handleObject({
    username: "Rakesh ",
    price:  399
})

const myNewArray = [200, 400, 600]
function returnSecond(getArray){
    return getArray[4]
    
}
// console.log(returnSecond(myNewArray));
console.log(returnSecond([200, 400, 600, 800, 1000]));