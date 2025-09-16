type User = {userName: string, userId: number};

let users2: User[];
users2 = [];

let user3: User;
user3 = {userName: "Dev", userId: 101}

let user4: User;
user4 = {userName: "Saran", userId: 102}

let user5: User;
user5 = {userName: "Sunny", userId: 103}

users2.push(user3, user4, user5)
// console.log(users2);

type RequestType4 = "GET" | "POST";

function requestHandler(requestType: RequestType4){
    console.log(requestType);
}
requestHandler("GET");