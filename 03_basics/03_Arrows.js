const user = {
    username: "Fateh",
    age: 21,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }
}

user.welcomeMessage()

//------Arrow Function-------

const addTwo = (num1,num2) => {
    return num1+num2
}

const add = (num1,num2) =>  num1+num2 // Another way of doing this


console.log(addTwo(5,6))
console.log(add(5,6))