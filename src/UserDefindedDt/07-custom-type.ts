let usrs: object[];
usrs = [];

type User = {userName: string, userId: number};

let usr1: User;
usr1 = {userName: "AAG", userId: 33};
usrs.push(usr1);

let usr2: User;
usr2 = {userName: "BBG", userId: 34};
usrs.push(usr2);

let usr3: User;
usr3 = {userName: "CCG", userId: 35};
usrs.push(usr3);

console.log(usrs);


type RequestType = "GET" | "POST";
let getRequest: RequestType;
getRequest = "GET";

function requestHandler(requestType: RequestType){
    console.log(requestType);
}

requestHandler("GET");