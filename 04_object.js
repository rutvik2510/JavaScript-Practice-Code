//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
    //console.log(tinderUser);
const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'c', 4: 'd' }
const obj3 = {...obj1,
        ...obj2
    }
    //console.log(obj3);
const users = [
    { id: '123abc', name: 'sammy', isLoggedIn: false },
    { id: '223abc', name: 'rammy', isLoggedIn: false },
    { id: '323abc', name: 'dammy', isLoggedIn: false },
    { id: '423abc', name: 'hammy', isLoggedIn: false }
]
console.log(users[1].name);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));