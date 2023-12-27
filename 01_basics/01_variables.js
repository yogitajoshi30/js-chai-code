const accountId = 936887;
let accountEmail = "joshiyogita67@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

//accountId=2 //not allowed

accountEmail = "yogitajoshi@gmail.com";
accountPassword = "23456";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
