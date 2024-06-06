//object

//singleton object

// const tinderUser = new object()
const tinderUser = {}

tinderUser.id = "115201"
tinderUser.name = "nilesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nilesh",
            lastname:  "Kumar"
        }
    }

}
// console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "c", 6: "d" }

// const obj3 = {obj1, obj2 }
// const obj4 = Object.assign({},obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

const users = [
    {
        id: 125,
        email: "nilesh@gmail.com"
    },
    {
        id: 125,
        email: "nilesh@gmail.com"
    },
    {
        id: 125,
        email: "nilesh@gmail.com"
    },
]
     users[1].email

    console.log(tinderUser);
    console.log(Object.keys(tinderUser));
    console.log(Object.values(tinderUser));
    console.log(Object.entries(tinderUser));
    console.log(tinderUser.hasOwnProperty('isLoggedIn'));
    console.log(tinderUser.hasOwnProperty('name'));
    console.log(tinderUser.hasOwnProperty('location'));