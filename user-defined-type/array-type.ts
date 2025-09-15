let userNames: string[];
// let userNames: Array<string>;
let userId: number[];

userNames = ["Ovi", "Dev", "Saran"];
userNames.push('Sunny');
console.log(userNames);
// userNames.pop();
// console.log(userNames);
userNames.shift();
console.log(userNames);
userNames.unshift("Arghya")
console.log(userNames);


userId = [23, 43, 12];
userId.push(48);

console.log(userNames[0]);
console.log(userNames.sort());
console.log(userId[2]);
console.log(userId.sort());
console.log(userId.length);


let multipleType: (string | number)[];

multipleType =  ["Dev", 1]