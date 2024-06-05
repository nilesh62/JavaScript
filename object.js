//object
// singleton
//object.create

//object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Nilesh",
    [mySym]:  "myKey1",
    age: "26",
    location: "Bihar",
    email: "nilesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Friday"]

}
// console.log(JsUser);
// console.log('Name=',JsUser.name);
// console.log('Age=',JsUser.age);
// console.log('Email=',JsUser.email);
// console.log( JsUser[mySym])
// console.log('location=',JsUser["location"]);
JsUser.email = "Rupesh@gmail.com"

// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email = "Rahul@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());