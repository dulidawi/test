// // стрілкова функція
// const multiply = (x, y) => x * y;
// console.log(multiply(34, 56));

// // function declaration
// function add(a, b) { // a,b - список параметрів
//     console.log(`a: ${a}`, `b: ${b}`);
//     const result = a + b;
//     // console.log(result);
//     return result;
// }
// console.log(add(5, 8)); // 5,8 - список аргументів
// console.log(add(45,78));

// // function expresion
// const minus = function (x, y) {
//     console.log(`a: ${x}`, `b: ${y}`);
//     return x - y;
// }
// console.log(minus(34, 4));

// const res = minus(4, 7);
// console.log(res);

// function logginMessage(name) {
//     return `${name}! Thank you for your subscription!`
// }
// console.log(logginMessage('Oleksandra'));

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

// function psevdoArgs(...args) {
//     for (let i = 0; i < args.length; i += 1) {
//         const element = args[i] += 100;
//         console.log(element);
//     }
// }
// console.log(psevdoArgs(1, 2, 3, 4, 5));

// function fn(a, b, c, d) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);

// }
// console.log(fn([1,2,3], 'hello', 100, 10000));

// Наша функція має приймати два параметри імя та вік, має виводити рядок 'Привіт! Мене звати .., мій вік ...'
// function infoUser(name, age) {
//     return `Hi! My name is ${name}, I'm ${age}`;
// }
// console.log(infoUser("Oleksandra", 76));
// console.log(infoUser("Mike", 45));
// console.log(infoUser("Layla", 12));

// Напиши функцію, вона має приймати один параметр РЯДОК, а повертати РЯДОК У НИЖНЬОМУ РЕГІСТРІ, довжиною не більше 30 символів, якщо більше 30 символів в кінець рядка додавати три крапки

// function convertedMessage(string) {
//     const lowerMessage = string.toLowerCase();
//     if (lowerMessage.length <= 30) {
//         return lowerMessage
//     } else {
//         return lowerMessage.slice(0,31) + "..."
//     }
// }
// const message2 = "Perferendis molestiae at asperiores autem adipisci qui!";
// const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at molestias dolor asperiores sint possimus? Non corrupti odit incidunt dignissimos iusto veniam impedit! Perferendis molestiae at asperiores autem adipisci qui!";
// console.log(convertedMessage(message));
// console.log(convertedMessage(message2));

// Напиши функцію яка буде приймати масив чисел і повертати середнє число

// function numbersList(array) {
//   let sum = 0;
//   for (let number = 0; number < array.length; number += 1) {
//     sum += array[number];
//   }
//   const result = sum / array.length;
//     //   return Math.round(result);
//     return Number(result.toFixed(3))
// }
// console.log(numbersList([3, 5, 7, 34, 54, 1]));
// console.log(numbersList([45, 72, 34, 122, 89]));
// console.log(numbersList([5, 7, 2, 3, 4, 8, 5, 6, 1, 2, 789]));


// Створи функцію яка буде приймати довільну кількість параметрів і повертати їх суму

// function sumNumbers(...args) {
//   let sum = 0;
//   for (let number = 0; number < args.length; number += 1) {
//     sum += args[number];
//   }
//   return sum;
// }
// console.log(sumNumbers(1, 2, 3));
// console.log(sumNumbers(1, 2, 3, 4, 5, 6));
// console.log(sumNumbers(7, 8, 9, 10, 11, 12));
