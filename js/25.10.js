const obj1 = {
    x: 1,
}

const obj2 = {
    y: 2,
}

const obj3 = {
    z: 3, 
}

const Car = function ({ module, color, price }) {
  (this.module = module), (this.color = color), (this.price = price);
};
Car.prototype.changPrice = function (newPrice) {
  this.price = newPrice;
};
const bmw = new Car({ price: 15000, module: "BMW", color: "black" });
console.log(bmw);

const option = {
  module: "toyota",
  price: 5000,
  color: "white",
};

const toyota = new Car(option);
toyota.changPrice(10000);
console.log(toyota);



