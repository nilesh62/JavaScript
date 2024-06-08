const user = {
    username: "Nilesh",
    price: 199,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);

        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Rakesh"
// user.welcomeMessage()
// console.log(this);

// function apple () {
//     let username = "Nilesh"
//     console.log(this);   // this is write
//     // console.log(this.username); tis is wrong
    
// }
// apple()

const apple = () => {
    let username = "Nilesh"
    console.log(this.username);
    console.log(this);
}
// apple()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Nilesh"})

console.log(addTwo(4, 3));