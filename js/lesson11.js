// const user = {
//     name: 'Igor',
//     email: "vffdvfds@gmail.com",
//     age: 50,
//     location: "Kyiv",
// }

// // for (const qwe of user) {
// //     console.log(qwe);
       
// // }

// // const key = Object.keys(user)
// // console.log(key);
// // for (const qwe of key) {
// //     console.log(qwe);
// // }

// // const value = Object.values(user)
// // console.log(value);

// const entry = Object.entries(user)
// console.log(entry);

// for (const item of entry) {
//     console.log(item[0], item);
    
// }


const a = 5;
let b = a;

console.log(a);
console.log(b);

b = 10;

console.log(a);
console.log(b);


const c = {
    name: "Inna",
    age: 14,
}

const d = c;
console.log(c);
console.log(d);

d.location = "Kyiv"
console.log(c);
console.log(d);