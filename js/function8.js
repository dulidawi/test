// стрілкова функція
const multiply = (x, y) => x * y;
console.log(multiply(34, 56));

// function declaration
function add(a, b) { // a,b - список параметрів
    console.log(`a: ${a}`, `b: ${b}`);    
    const result = a + b;
    // console.log(result);    
    return result;
}
console.log(add(5, 8)); // 5,8 - список аргументів
console.log(add(45,78));

// function expresion
const minus = function (x, y) {
    console.log(`a: ${x}`, `b: ${y}`);
    return x - y;
}
console.log(minus(34, 4));

const res = minus(4, 7);
console.log(res);



function logginMessage(name) {
    return `${name}! Thank you for your subscription!`
}
console.log(logginMessage('Oleksandra'));


// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більше нуля.");
//   } else if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку.");
//   } else {
//     console.log("Операція зняття коштів проведена.");
//   }
// };
// withdraw(0, 300); // Для проведення операції введіть суму більше нуля.
// withdraw(500, 300); // Недостатньо коштів на рахунку.
// withdraw(100, 300);

// function psevdoArgs() {
//     console.log(arguments);
//     const args = Array.from(arguments)
//     console.log(args);
// }
// console.log(psevdoArgs(1,2,3,4,5));

function psevdoArgs(...args) {
    for (let i = 0; i < args.length; i += 1) {
        const element = args[i] += 100;
        console.log(element);        
    }
}
console.log(psevdoArgs(1, 2, 3, 4, 5));

function fn(a, b, c, d) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    
}
console.log(fn([1,2,3], 'hello', 100, 10000));
