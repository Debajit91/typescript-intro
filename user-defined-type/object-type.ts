let users: object[];
users = [];

let user1: {userName: string, userId: number};
user1 = {userName: "Dev", userId: 101}
let user2: {userName: string, userId: number};
user2 = {userName: "Saran", userId: 102}
users.push(user1, user2)


for (const key in users) {
    console.log(users[key]["userName"]);
}
