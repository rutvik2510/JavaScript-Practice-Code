//Singleton

//const { object } = require("webidl-conversions");

//object literals


const mysym = Symbol("key1");
const JsUser = {
    name: "rutvik",
    "full name": "rutvik patil",
    [mysym]: "mykey1",
    age: 23,
    address: "pune",
    email: "rp@gmial.com ",
    islogedin: false,
    lastlogindays: ["mondays", "saturadays"]
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mysym]);
JsUser.email = "rutvik@google.com";
Object.freeze(JsUser);
JsUser.email = "rutvik@microsoft.com";
console.log(JsUser);