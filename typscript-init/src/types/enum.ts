export {}

const enum Fruit {
    Apple,
    Banana = 5,
    Orange
}

const fruit: Fruit = Fruit.Apple

const v1: Fruit = Fruit.Apple
const v2: Fruit.Apple | Fruit.Banana = Fruit.Banana;

console.log(Fruit.Banana)
console.log(Fruit['Banana'])
// console.log(Fruit[5])
