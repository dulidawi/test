// const name = 'Daria'
// const last = 'surName'

// const user = {
//     name,
//     [last]: 'Kovalchuk',
//     age: 27,
//     friends: ['Vania', 'Ania', 'Masha'],
//     'friends age': {
//         Vania: 13,
//         Ania: 45,
//         Masha: 93
//     }
// }

// // user.name = 'Pasha'
// user.location = "Kyiv"
// user.age = 34
// user.friends[0] = 'Vasia'

// user["friends age"].Masha = 32

// delete user.age

// console.log(user);
// console.log(user['name']);

// Створіть масив об'єктів "students", де кожен об'єкт буде містити властивості "name", "age", "gender" та "grade". Напишіть функцію, яка приймає масив об'єктів "students" і повертає середній бал групи.

// const students = [
//   { name: "Іван", age: 18, gender: "male", grade: 85 },
//   { name: "Олена", age: 19, gender: "female", grade: 92 },
//   { name: "Андрій", age: 20, gender: "male", grade: 78 },
//   { name: "Марія", age: 18, gender: "female", grade: 88 },
//   { name: "Сергій", age: 21, gender: "male", grade: 95 },
// ];

// const middle = (array) => {
//   let sum = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].grade) {
//       sum += array[i].grade;
//     }
//   }
//   return sum / array.length;
// };
// console.log(middle(students));

// const students2 = [
//   { name: "Катерина", age: 17, gender: "female", grade: 90 },
//   { name: "Дмитро", age: 18, gender: "male", grade: 76 },
//   { name: "Оксана", age: 19, gender: "female", grade: 84 },
//   { name: "Володимир", age: 20, gender: "male" },
//   { name: "Наталя", age: 18, gender: "female", grade: 88 },
//   { name: "Тарас", age: 21, gender: "male", grade: 81 },
// ];

// console.log(middle(students2));


