let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())

let myCreatedDate = new Date(2024,0,8)
console.log(myCreatedDate.toDateString())

let myTimestamp = Date.now()
console.log(Math.floor(Date.now()/1000))