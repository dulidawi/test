// const add = (a,b) => a + b;
// console.log(add(1,3));


// const logPassword = text => console.log(text);
// logPassword("Grdvrsfvdsf")

// const fs = (...args) => {
//     console.log(args);
// }

// fs(1, 2, 3, 4, 5, 6, 7,)


// const logItems = array => {
//     for (let i = 0; i < array.length; i += 1){
//         console.log(`${i + 1} ${array[i]}` );
//     }
// }

// logItems("Mango", "Poly", "Ajax");

// const calculatePrice = (message, price) => {
//     const edditedMessage = message.split(" ")
//     const amount = edditedMessage.length
//     const finalPrice = amount * price
//     console.log(finalPrice);
// }

// calculatePrice('I love you', 10)

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

// const findLongestWord = string => {
//     const longestWord = string.split(" ");
//     let word = longestWord[0];
    
//     for (let i = 0; i < longestWord.length; i += 1) {
//         if (word.length < longestWord[i].length) {
//             word = longestWord[i]
//         }
//     }
//     console.log(word);
// }

// findLongestWord("яка приймає параметром довільний рядок rgbrgvergverfvrefver");

// callback

// const logInfo = (callback) => {  // функція вищого порядку яка приймає іншу функцію
//     callback ()
// }

// function fn() {   // функція колбек
//     console.log('Hello world!');
// }
// logInfo(fm)   // виклик функції вищого порядку в якості аргументу передаємо іншу функцію


// const calculator = (callback, a, b) => {
//     return callback(a, b);
// }

// const add = (a, b) => a + b

// const minus = (a,b) => a - b

// const multiply = (a, b) => a * b

// const devide = (a,b) => a / b


// console.log(calculator(add, 3, 5));
// console.log(calculator(minus, 56, 45));
// console.log(calculator(multiply, 3, 6));
// console.log(calculator(devide, 56, 2));


// const processArray = (callback, array) => {
//     return callback(array);
// }

// const searchWord = (array) => {
//    let shortestWord = array[0];
//     for (const word of array) {
//         if (word.length < shortestWord.length) {
//             shortestWord = word
//         }
//     }
//     return shortestWord
// }

// console.log(processArray(searchWord, ["gbdfbdf", 'thbdfgbdfv', 'dgbrfdgvsdf']));


// знайти мінімльне число в масиві

// const fn = (callback, array) => {
//     return callback(array)
// }

// const callback = (array) => {
//     let min = array[0]
//     for (let i = 0; i < array.length; i += 1) {
//      if ( typeof (array[i]) === 'string')
//         continue
//     } else if (array[i] < min) {
//         min = array[i]
//     }   
//         return min 
//    }

// const arr = [10, '2', 4, 'red', 8];
// console.log(fn(callback, arr));


// const fn = (callback, array) => {
//     return callback(array)
// }

// const callback = (array) => {
//         let min = array[0]
//     for (let i = 0; i < array.length; i++) {

//         if (typeof(array[i]) === "string") {
//                    continue;
           
//         } else if (array[i] < min) {
//             min=array[i]
//         }

//         }
// return min
// }


// const arr2 = [567, 321, "903443", "293892", 2]
// const arr = [10, "2", 3, "red", 7] // Знайти мін число в масиві
// // console.log(fn(callback, arr))
// console.log(fn(callback, arr2))







