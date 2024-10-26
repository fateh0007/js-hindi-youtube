//const tinderUser = new object().  ---> Singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email : "abc@gmail.com",
    name : {
        userfullname:{
            firstname: "Fateh",
            lastname: "Alam"
        }
    },
    rollNumber: 19
}

console.log(regularUser.name.userfullname.firstname)

//now we will learn how to merge two obbjects

const obj1 = {1: "a",2:"b"}
const obj2 = {3:"c",4: "d"}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);
//Another of doing this is using spread operator
const obj4 = {...obj1, ...obj2}
console.log(obj4);

//now extracting all keys and values from the object
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))