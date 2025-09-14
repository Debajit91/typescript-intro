// built-in type: number, string, boolean, void, undefined, null

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 101;
firstName = "Debajit";
lastName = " Roy";
fullName =  firstName.concat(lastName);

isActivated = true;

console.log(`Your Id: ${userId}, userName:${fullName}, account activated: ${isActivated}`);

console.log(fullName.split(" "))

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());


function display(): void{
    console.log("Hi I am display");
    // function nothing return is called void
    
}
display();