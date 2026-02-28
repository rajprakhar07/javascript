const accountId=14467
let accountEmail="rahul@gmail.com"
var accountCity="mirzapur"

//accountID=34  not allowed

accountEmail="lion@gmail.com"
accountCity="Kanpur"
let accountState;

//prefer to use "let" instead of "var" because of scope function issue
console.log(accountId);

// to show in table format
console.table([accountId,accountEmail,accountCity,accountState]);
