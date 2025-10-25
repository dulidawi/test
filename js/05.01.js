// // const numbers = [2, 6, 3, 7, 6, 1, 2, 4, 54];
// // const bigNumbers = numbers.filter(item => item > 5)
// // console.log(bigNumbers);

// // const numbers1 = [2, 6, 3, 7, 6, 1, 2, 4, 54];
// // const filter = numbers1.forEach((numbers1) => {
// //   console.log(numbers1);
// // })


// // const filter = numbers.map((item) => {
// //     return item > 3
// // })
// // console.log(filter);

// const pets = [
//   {
//     id: "1",
//     name: "Барсик",
//     img: "https://c.files.bbci.co.uk/116AB/production/_115093317_neo4.jpg",
//     type: "кіт",
//     color: "сірий",
//     age: 2,
//     isAdopted: true,
//     favoriteFoods: ["риба", "молоко"],
//   },
//   {
//     id: "2",
//     name: "Бім",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2PoENXLdAsO-j9BHSELg7XxUxYhGjZGLx9g&s",
//     type: "пес",
//     color: "чорний",
//     age: 5,
//     isAdopted: false,
//     favoriteFoods: ["кістка", "м’ясо"],
//   },
//   {
//     id: "3",
//     name: "Кузя",
//     img: "https://thumbs.dreamstime.com/b/%D1%85%D0%BE%D0%BC%D1%8F%D0%BA-11110051.jpg",
//     type: "хом’як",
//     color: "білий",
//     age: 1,
//     isAdopted: true,
//     favoriteFoods: ["зерно", "морква"],
//   },
//   {
//     id: "4",
//     name: "Лола",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OYV3mJYvRhVSJSTEZsO8GOn4CBgEzXEWRw&s",
//     type: "папуга",
//     color: "зелений",
//     age: 3,
//     isAdopted: false,
//     favoriteFoods: ["яблуко", "зерно"],
//   },
// ];

// const filterName = pets.filter((item) => item.isAdopted).map(item => item.name)
// console.log(filterName);


// const array = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]
// const findElement = array.find((item) => {
//    return item === 6
// })

// console.log(findElement);

// // Знайти тварину за іменем.
// const getPetByName = (pets, name) => pets.find((item) => item.name === name)
// console.log(getPetByName(pets, "Лола"));


const pets = [
  {
    id: "1",
    name: "Барсик",
    img: "https://c.files.bbci.co.uk/116AB/production/_115093317_neo4.jpg",
    type: "кіт",
    color: "сірий",
    age: 2,
    isAdopted: true,
    favoriteFoods: ["риба", "молоко"],
  },
  {
    id: "2",
    name: "Бім",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2PoENXLdAsO-j9BHSELg7XxUxYhGjZGLx9g&s",
    type: "пес",
    color: "чорний",
    age: 5,
    isAdopted: false,
    favoriteFoods: ["кістка", "м’ясо"],
  },
  {
    id: "3",
    name: "Кузя",
    img: "https://thumbs.dreamstime.com/b/%D1%85%D0%BE%D0%BC%D1%8F%D0%BA-11110051.jpg",
    type: "хом’як",
    color: "білий",
    age: 1,
    isAdopted: true,
    favoriteFoods: ["зерно", "морква"],
  },
  {
    id: "4",
    name: "Лола",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OYV3mJYvRhVSJSTEZsO8GOn4CBgEzXEWRw&s",
    type: "папуга",
    color: "зелений",
    age: 3,
    isAdopted: false,
    favoriteFoods: ["яблуко", "зерно", ["Carrot" , "Potato", ["Apple"]]],
  },
];


// const adopted = pets.every((item) => { // всі елементи відповідають умові
//     return item.isAdopted
// })

// console.log(adopted);

// const adopted1 = pets.some((item) => { // хочаб один елемент відповідає умові
//   return item.isAdopted;
// });

// console.log(adopted1);

// const adopted2 = (array) => {
//     return array.every(item => item.isAdopted)
// }
// console.log(adopted2(pets));

// написати функцію яка буде шукати тварину за іменем

// const findName = (array, name) => {
//     return array.find((item) => {
//         return item.name === name
//     })
// }
// console.log(findName(pets, "Лола"));

// отримати масив улюблених страв

// const findFavoriteFood = (array) => {
//     return array.flatMap(item => item.favoriteFoods)
// }

// console.log(findFavoriteFood(pets));

// const findFavoriteFood = (array) => array.map((item) => item.favoriteFoods).flat(3);
// console.log(findFavoriteFood(pets));

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 43, 567, 23, 456];
// let res = 0;
// for (const num of array) {
//     res += num
// }
// console.log('Загальна сума складає:', res);


// // масив.reduce((acc,item,idx,arr)=>{},0)
// const subNumbers = array.reduce((acc, item) => {
//     return acc + item
// },0)
// console.log("Загальна сума складає:", subNumbers);

// порахувати суму усіх елементів
// const numbers = [2, 5, 6, 8, 80, 40];

// const sumNumbers = array.reduce((acc, item) => {
//     return acc + item
// },0)

// console.log("Sum:", sumNumbers);

//порахувати загальну зарплату
// const salary = {
//   mango: 30,
//   poly: 40,
//   ajax: 50,
// }

// const sumSalary = Object.values(salary).reduce((acc, value) => acc + value, 0);
// console.log(sumSalary);

// const values = Object.values(salary)
// console.log(values);

// const result = values.reduce((acc, value) => acc + value, 0);
// console.log(result);



// const students = [
//   { name: "Anna", age: 20, gender: "female", grade: 85 },
//   { name: "Ivan", age: 22, gender: "male", grade: 90 },
//   { name: "Olena", age: 19, gender: "female", grade: 78 },
//   { name: "Petro", age: 21, gender: "male", grade: 92 },
// ];

// порахувати загальну кількість балів

// const sumGrades = students.reduce((acc, item) => {
//     return acc + item.grade
// }, 0)

// console.log(sumGrades);

// const sumGrades = students.reduce((acc, item) => acc + item.grade, 0);
// console.log(sumGrades);

// const sumGrades = students.reduce((acc, { grade }) => {
//     console.log(grade);
//     const result = acc + grade
//     return result
// }, 0)

// console.log(sumGrades);


//рахуємо загальну вартість товарів в корзині

// const cart = [
//   { label: "apple", price: 100, quantity: 2, },
//   { label: "banana", price: 70, quantity: 3, },
//   { label: "lemons", price: 50, quantity: 5, },
// ];

// const totalPrice = cart.reduce((acc, { price, quantity }) => {
//     return acc + price * quantity
// }, 0)
// console.log(totalPrice);

//отримати масив усіх tags
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const findTags = (array) => array.flatMap(({tags}) => tags)
// console.log(findTags(tweets));

// const newTags = tweets.reduce((acc, item) => {
//  acc.push(...item.tags)
//     return acc
// }, [])
// console.log(newTags);


// const array = [1, 25, 3, 4, 53, 6, 7, 8, 129, 10];
// // const result = array.sort()
// // console.log(result);

// // const newArray = array.slice()
// // console.log(newArray);

// const copyArray = [...array]
// const result = copyArray.sort((a, b) => a - b)
// console.log(result);

const words = ["кіт", "собака", "миша", "папуга", "хомяк"];
const result = [...words].sort((a, b) => a.localeCompare(b))
  console.log(result);
  







const letters = ['a', 'A', 'D', 'd', 'W'];
console.log(letters.sort());




















