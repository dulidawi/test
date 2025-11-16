// class Car {
//     #age
//     constructor({ model, color, price, age }){
//         this.model = model,
//         this.color = color,
//         this._price = price,
//         this.#age = age
//     }
//     // changePrice(newPrice) {
//     //     this.price = newPrice
//     // }
//     get price() { // отримати
//        return this._price
//     }
//     set price(newPrice) { // змінити
//         return this._price = newPrice
//     }
// }

// const option = {
//     model: "audi",
//     color: "black",
//     price: 800000,
//     age: 2019
// }

// const bmw = new Car ({ price: 1200000, model: "bmw", color: "red" })
// console.log(bmw);
// console.log(bmw.price);
// bmw.price = 1400000
// console.log(bmw.price);

// // const audi = new Car(option)
// // console.log(audi);

// class ElectricCar extends Car {
//     #batteryLevel
//     constructor({ model, color, price, batteryLevel }) {
//         super({ model, color, price })
//         this.#batteryLevel = batteryLevel
//     }
// }

// const tesla = new ElectricCar({ price: 1500000, model: "tesla", color: "white", batteryLevel: "50%" })
// console.log(tesla);

// Створіть клас Person, що містить властивості firstName та lastName. Додайте метод getFullName(), який повертає повне ім'я у форматі "firstName lastName".

// class Person {
//     constructor(name, surname) {
//         this.name = name,
//         this.surname = surname
//     }

//     getFullName() {
//         return `${this.name} ${this.surname}`
//     }
// }

// const person1 = new Person('John', 'Doe');
// console.log(person1.getFullName()); // John Doe

// Створіть клас Rectangle, що містить властивості width та height. Додайте метод getArea(), який повертає площу прямокутника.

// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }

//     getArea() {
//         const {width, height} = this
//         return width * height
//     }
// }
// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea()); // 50


// Створіть клас Calculator, який буде мати наступні методи: add(), subtract(), multiply(), divide(). Кожен метод приймає два аргументи - числа, які необхідно обробити. Результатом кожного методу має бути результат відповідної математичної операції.

// Створіть клас Calculator, який буде мати наступні методи: add(), subtract(), multiply(), divide(). Кожен метод приймає два аргументи - числа, які необхідно обробити. Результатом кожного методу має бути результат відповідної математичної операції.

// class Calculator{
//     constructor(firstNumber, secondNumber){
//         this.firstNumber = firstNumber,
//         this.secondNumber = secondNumber
//     }

//     add(firstNumber, secondNumber){
//         return firstNumber + secondNumber
//     }
//     subtract(firstNumber, secondNumber){
//         return firstNumber - secondNumber
//     }
//     multiply(firstNumber, secondNumber){
//         return firstNumber * secondNumber
//     }
//     divide(firstNumber, secondNumber){
//         if(secondNumber === 0 ){
//             return "на нуль ділити не можна"
//         }else{
//             return firstNumber / secondNumber
//         }
//     }
// }


// const calculator = new Calculator();
// console.log(calculator);

// console.log(calculator.add(2, 3)); // 5
// console.log(calculator.subtract(5, 2)); // 3
// console.log(calculator.multiply(2, 4)); // 8
// console.log(calculator.divide(10, 2)); // 5
// console.log(calculator.divide(10, 0)); // На нуль ділити не можна