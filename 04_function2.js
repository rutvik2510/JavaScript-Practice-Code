function calculateCartPrice(...num1) {
    return num1

}
//console.log(calculateCartPrice(2, 23, 45, 6767, 23));
const user = {

    username: "rutvik",
    price: 100
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user);
handleObject({
    username: "swarup",
    price: 200
})

const myarry = [100, 200, 300, 400, 500];

function getarrayelement(getAray) {
    return getAray[1];
}
console.log(getarrayelement(myarry));