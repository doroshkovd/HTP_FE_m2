// function setupHelp() {
//   const helpText = [
//       {
//           id: 'email',
//           help: 'Email help note',
//       },
//       {
//           id: 'name',
//           help: 'Name help note',
//       },
//       {
//           id: 'age',
//           help: 'Age help note',
//       },
//   ];
//
//   for(let i = 0; i < helpText.length; i++) {
//       let item = helpText[i];
//       document.getElementById(item.id).onfocus = function() {
//           showHelp(item.help)
//       }
//   }
// }
//
// function showHelp(help) {
//     document.getElementById('help').innerHTML = help;
// }
//
// setupHelp();
//
// function makeHelpCallback(help) {
//     return function () {
//         showHelp(help);
//     }
// }
//
// // const Counter = (function(){
// //     let privateCounter = 0;
// //
// //     function changeBy(val) {
// //         return privateCounter += val;
// //     }
// //
// //     return {
// //         increment: function() {
// //             return changeBy(1);
// //         },
// //         decrement: function () {
// //             changeBy(-1);
// //         },
// //         value: function () {
// //             return privateCounter;
// //         }
// //     }
// // })();
//
// // function Test(user) {
// //     this.user = user;
// //
// //
// //     let c = function() {
// //       alert(1)
// //     };
// //     this._c = c;
// //     this.c2 = function() {
// //         c();
// //     }
// // }
// //
// // Test.prototype.c3 = function() {
// //     this._c();
// // }
//
// obj = new Test();
//
// console.log(obj.c2());
// console.log(obj.c3());
// // Counter.increment();
// // Counter.increment();
// // Counter.increment();
// // console.log(Counter.value());
//
// // function makeSizer(size) {
// //     return function() {
// //         document.body.style.fontSize = `${size}px`;
// //     }
// // }
// //
// // const size12 = makeSizer(12);
// // const size14 = makeSizer(14);
// // const size16 = makeSizer(16);
// //
// // document.getElementById('size-12').onclick = size12;
// // document.getElementById('size-14').onclick = size14;
// // document.getElementById('size-16').onclick = size16;
//
// // function makeCounter() {
// //     let currentState = 1;
// //     return function() {
// //         return currentState++;
// //     }
// // }
// //
// // let counter = makeCounter();
// // console.log(counter());;
// // console.log(counter());;
// // console.log(counter());;
// // console.log(counter());;
// // console.log(counter());;
// // let counter2 = makeCounter();
// // console.log('---');
// // console.log(counter2());
// // console.log(counter2());
// // console.log(counter2());
// // console.log(counter2());
//
//
// // function MyObject(name, message) {
// //   this.name = name.toString();
// //   this.message = message.toString();
// //   this.getName = function() {
// //     return this.name;
// //   };
// //
// //   this.getMessage = function() {
// //     return this.message;
// //   };
// // }
//
// // function MyObject(name, message) {
// //   this.name = name.toString();
// //   this.message = message.toString();
// // }
// // MyObject.prototype.getName = function() {
// //   return this.name;
// // };
// // MyObject.prototype.getMessage = function() {
// //   return this.message;
// // };
//
// // function MyObject(name, message) {
// //   this.name = name.toString();
// //   this.message = message.toString();
// // }
// // (function() {
// //   this.getName = function() {
// //     return this.name;
// //   };
// //   this.getMessage = function() {
// //     return this.message;
// //   };
// // }).call(MyObject.prototype);
//
// // var user = { firstName: "Вася" };
// // var admin = { firstName: "Админ" };
// //
// // function func() {
// //   alert( this.firstName );
// // }
// //
// // user.f = func;
// // admin.g = func;
// //
// // // this равен объекту перед точкой:
// // user.f(); // Вася
// // admin.g(); // Админ
// // admin['g'](); // Админ (не важно, доступ к объекту через точку или квадратные скобки)
//
// // Явное определение свойства
// Object.defineProperty(obj, 'key', {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   value: 'static'
// });
//
// // var o = {}; // Создаём новый объект
//
// // Пример добавления свойства к объекту через defineProperty()
// // с дескриптором данных
// // Object.defineProperty(o, 'a', {
// //   value: 37,
// //   writable: true,
// //   enumerable: true,
// //   configurable: true
// // });
// // Свойство 'a' существует в объекте o и имеет значение, равное 37
//
// // Пример добавления свойства к объекту через defineProperty()
// // с дескриптором доступа
// // var bValue = 38;
// // Object.defineProperty(o, 'b', {
// //   get: function() { return bValue; },
// //   set: function(newValue) { bValue = newValue; },
// //   enumerable: true,
// //   configurable: true
// // });
// // o.b; // 38
// // Свойство 'b' существует в объекте o и имеет значение, равное 38
// // Значение свойства o.b теперь идентично значению bValue до тех пор,
// // пока свойство o.b не будет переопределено
//
// // Вы не можете смешать два этих подхода:
// // Object.defineProperty(o, 'conflict', {
// //   value: 0x9f91102,
// //   get: function() { return 0xdeadbeef; }
// // });
// // Выкинет исключение TypeError: свойство value применимо только в
// // дескрипторах данных, свойство get применимо только в дескрипторах
// // доступа
//
// // var o = {};
// //
// // o.a = 1;
// // // Эквивалентно записи:
// // Object.defineProperty(o, 'a', {
// //   value: 1,
// //   writable: true,
// //   configurable: true,
// //   enumerable: true
// // });
//
// // /* мин/макс числа в массиве */
// // var numbers = [5, 6, 2, 3, 7];
// //
// // /* используем apply к Math.min/Math.max */
// // var max = Math.max.apply(Math, numbers)=== Math.max(5, 6, 3, 7); /* Это эквивалентно Math.max(numbers[0], ...)
// //  или Math.max(5, 6, ...) */
// // var min = Math.min.apply(null, numbers);
//
//  var module = {
//    x: 81,
//    getX: function() { return this.x; }
//  };
// //
//  module.getX(); // 81
// //
//  var getX = module.getX;
//  getX(); //
// //
// // // создаём новую функцию с this, привязанным к module
// // var boundGetX = getX.bind(module);
// // boundGetX(); // 81
//
//  function list() {
//     return Array.prototype.slice.call(arguments);
//  }
//
console.log(list(1, 3, 5));
//
//
//
var list1 = list(1, 2, 3); // [1, 2, 3]
// //
// // // Создаём функцию с предустановленным ведущим аргументом
var leadingThirtysevenList = list.bind(new Object(), 37);
console.log(leadingThirtysevenList(1,2,4));
//
// var list2 = leadingThirtysevenList(); // [37]
// var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]

function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// Объявляем цветение с задержкой в 1 секунду
LateBloomer.prototype.bloom = function() {
    let declareNew = this.declare.bind(this, 4);
    let func = function(self) {

    }
  setTimeout(declareNew, 1000);
};

LateBloomer.prototype.declare = function(heigth) {
  console.log('Я прекрасный цветок с ' +
    this.petalCount + ' лепестками!' + 'Моя высота:' + heigth);
};

let instance = new LateBloomer();
instance.bloom();

