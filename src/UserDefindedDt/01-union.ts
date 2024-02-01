let userId: string | number; //both types valid

userId = "33";
userId = 101;


function displayUserInfo(userId: string) :void{
    console.log(userId);
}

displayUserInfo("123");