// built-in type: number, string, boolean, void, undefined, null
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
firstName = "Debajit";
lastName = " Roy";
fullName = firstName.concat(lastName);
isActivated = true;
console.log("Your Id: ".concat(userId, ", userName:").concat(fullName, ", account activated: ").concat(isActivated));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
