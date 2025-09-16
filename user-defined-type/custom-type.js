var users2;
users2 = [];
var user3;
user3 = { userName: "Dev", userId: 101 };
var user4;
user4 = { userName: "Saran", userId: 102 };
var user5;
user5 = { userName: "Sunny", userId: 103 };
users2.push(user3, user4, user5);
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
