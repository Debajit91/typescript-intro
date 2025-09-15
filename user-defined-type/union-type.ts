let userID: string | number | boolean;


userID = 101;
userID = "101";
userID = true;

const displayUserInfo = (userID:string | number) =>{
    console.log(userID)
}

displayUserInfo("101");
displayUserInfo(101);