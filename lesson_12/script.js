import { log } from './loger.js';
import { Task } from './task.js';
import { BMW as Car } from './cars.js';
import { getUsers } from './symbol.js';

// log('Some value');
// log('Some value 2');

//LET CONST

var a = 2;
{
    let a = 3;
    console.log(a);
}
console.log(a);

const arr = [5,6];
arr.push(7);
console.log(arr);

console.log(b)
console.log(c)
const T = 1;
var b = 9;
let c = 1;

// ARROW FUNCTION

let add = function(a, b) {
    return a + b;
};

// let addArr = (a, b) =>  a + b;
let addArr = (a, b) => { return a + b };

// function Person(age) {
//     this.age = age;
//     const self = this;
//     setInterval(function(){
//
//         console.log(self.age++);
//     }, 1000);
// }

function Person(age) {
    this.age = age;
    const self = this;
    setInterval(() => {
        console.log(this.age++);
    }, 1000);
}

let nums = [1, 2, 3, 4];
const result = nums.map(num => num * 10);

// const person = new Person(18);

// DEFAULT PARAMS

let getPrice = (price = 100, tax = 0.7) => price + price * tax;
// console.log(getPrice(500));
// console.log(getPrice(500, 0.5));
// console.log(getPrice());

// Spred

const foo = (x, y, c) => {
  console.log(x, y, c);
};

const fooArr = [2, 3, 4];

// foo(...fooArr);

const arr1 = [5, 6];
const arr2 = [1, 2, 3, 4, ...arr1];

const max = (arr) => Math.max.apply(null, arr);

// console.log(Math.max(...arr2));

const str = '123445678';
const arr4 = [...str];
// console.log(arr4);

function restTest (x, y, ...rest) {
    console.log(x);
    console.log(y);
    console.log(rest);
}

// restTest(1, 2, 3, 4, 5, 6);

// Деструкторизация
const arr5 = [1, 2, 4];
// let [d1, d2, d3] = arr5;
// let [ , , d3] = arr5;
let [ d1, d2 , d3, d4 = 5] = arr5;
// console.log(d4);

const options = {
    title: 'Menu',
    width: 110,
    height: 100,
};

// let {title, width, height} = options;
let {title, width: w, height, deep: d = 220} = options;
// console.log(d);

// TEMPLATE STRING

let user = 'Smit';
console.log(`Users name: ${user + 'y'}`);

// MAP
const map = new Map();

map.set('1', 'String key');
map.set(1, 'Number key');
map.set(true, 'Boolean key');

// console.log(map.get(1));
// console.log(map.get('1'));
// console.log(map.get(1 === 1));

let reciepMap = new Map([
   ['огурцов', '500 gr'],
   ['помидоров', '500 gr'],
   ['сметаны', '500 gr'],
]);

// for (let item of reciepMap.keys()) {
//     console.log(item);
// }

// console.log(reciepMap);

reciepMap.forEach((value, key) => {
   // console.log(`Key: ${key} - Value: ${value}`);
});

// SET

// const set = new Set();
// const visitor1= {name: 'Visitor1'};
// const visitor2= {name: 'Visitor2'};
// const visitor3= {name: 'Visitor3'};
//
// set.add(visitor1)
//     .add(visitor3)
//     .add(visitor2);

// console.log(set.has(visitor2));
//
// set.forEach(user => {
//     console.log(user);
// });

let arrSet = [1, 1, 2, 2, 3, 4, 5, 4, 3, 2];
arrSet = [... new Set(arrSet)];
// console.log(arrSet);

let activeUsers = [
    {name: 'Visitor1'},
    {name: 'Visitor2'},
    {name: 'Visitor3'},
];

const weakMap = new WeakMap();
weakMap.set(activeUsers[0], 1);
weakMap.set(activeUsers[1], 2);
weakMap.set(activeUsers[2], 3);

console.log(weakMap.get(activeUsers[0]));
activeUsers.splice(0, 1);

// ES6 class
// const task1 = new Task('Task1', 'minor');
// const task2 = new Task('Task2', 'major');
// const task3 = new Task('Task3', 'trivial');
// const task4 = new Task('Task4', 'blocker');

// const newCar = new Car();

const userS = getUsers();
console.log(userS['role']);
console.log(userS);

console.log(Symbol('admin') === Symbol('admin'));
