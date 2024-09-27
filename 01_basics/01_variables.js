const accountId = 1234
let accountEmail = "fateh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//accountId = 2 not allowed

console.log(accountId);
/*
    prefer not to use var 
    because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])