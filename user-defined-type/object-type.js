var users;
users = [];
var user1;
user1 = { userName: "Dev", userId: 101 };
var user2;
user2 = { userName: "Saran", userId: 102 };
users.push(user1, user2);
for (var key in users) {
    console.log(users[key]["userName"]);
}
