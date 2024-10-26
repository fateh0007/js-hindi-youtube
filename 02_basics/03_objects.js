//object Literals

const mySym = Symbol("key1")


const JSuser = {
    name : "Fateh",
    [mySym] : "myKey1",
    age :21,
    location : "Patna",
    email : "22219@iiitu.ac.in"
}
console.log(JSuser.email)
console.log(JSuser["email"])
console.log(JSuser[mySym])


Object.freeze(JSuser)
JSuser.email = "fatehalam@google.com"
console.log(JSuser)