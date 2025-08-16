// for (let i = 0; i <= 10; i += 3) {
//   console.log(i);
// }

// const userName = "My name is Sasha, I learn frontend development";
// console.log(userName.length);
// console.log(userName[46]);

// for (let i = 0; i < userName.length; i += 1) {
//   if (userName[i] === " ") {
//     continue
//   }
//   console.log(userName[i]);
// }

// for (let i = 0; i < userName.length; i += 1) {
//   if (userName[i] === "f") {
//     break;
//   }
//   if (userName[i] === " ") {
//     continue;
//   }
//   console.log(userName[i]);
// }

// const numbers = ["+4545353534" , "+24564734", "+346554457", "+9342358437", "+341434354", "+578697696785", "+0956856943", "+21353464365", "65785674454", "+02458436585"]
// const findNumber = "+578697696785";
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
//     if (numbers[i] = findNumber) {
//         console.log(`You found the right number!: ${numbers[i]}`);
//         break
//     } else {
//         console.log(`We didn't find the right number`);

//     }
// }

// 2. Вивести парні числа від 2 до 20

// for (let i = 0; i <= 20; i += 1) {

//     if (i % 2 === 1) {
//         continue
//     }
//      console.log(i);
// }

// 3. Сума чисел від 1 до 100

// let number = 0;
// for (let i = 0; i <= 100; i += 1) {
//     number += i
// }
//     console.log(number);

// 4. Таблиця множення для 5

// for (let i = 0; i <= 10; i += 1) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

// let counter = 0;
// while (counter < 50) {
//     console.log(counter);
//     counter += 1;
// }

// for (let i = 0; i < 50; i += 1) {
//     console.log(i);
// }

// let numb = 50;
// while (numb >= 0) {
//     console.log(numb);
//     numb -= 1;
// }

//Задача 3: Порахувати суму чисел від 1 до 10 (while)

// let sum = 0;
// let counter = 0;
// while (counter <= 10) {
//     sum += counter;
//     counter += 1;
// }
//     console.log(sum);

// let sum = 0;
// for (let i = 0; i <= 10; i += 1) {
//     sum += i;
// }
//     console.log(sum);

// Виведіть в консоль всі непарні числа за допомогою циклу for

// for (let i = 0; i <= 20; i += 1) {
//     if (i % 2 === 0) {
//         console.log(i);
//         continue
//     }
// }

// let number = 0;
// while (number < 20) {
//         number += 1;
//     if (number % 2 !== 1) {
//         continue;
//     }
//       console.log(number);
// }

// Виведіть всі числа від 0 до 20, але без числа 10

// let number = 0;
// while (number < 20) {
//     number += 1;
//     if (number === 10) {
//         continue
//     }
//     console.log(number);
// }

// let list = 20;
// while (list < 20) {

//     if (list > 10) {
//        list += 1;
//        break;
//   }
//   console.log(list);
// }

// let number;
// do {
//     number = parseInt(prompt("Введіть число більше 10"));
// } while (number <= 10)

//Задача: Запросити у користувача число більше 0 та зробити перевірку на не число

// let number;
// do {
//     number = parseInt(prompt("Введіть число більше 0"))
// } while (number <= 0 || isNaN(number))
//     console.log(number);

// попросити у користувача ввести номер телефону і якщо довжина номеру телефону менша, або більша за 10, обробити помилки

// let number;
// do {
//   number = prompt("Введіть номер телефону(10 цифр)");
//   console.log(number);

//   if (number === null) {
//     alert("Error");
//     break;
//   }
//   if (number.length === 10 && !isNaN(number)) {
//       alert("Данні прийнято!");
//       break;
//   } else {
//     alert("Невірно введені данні!");
//   }
// } while (true);

// let num;


