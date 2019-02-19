"use strict";
// Передача параметров по умолчанию
function alarmClockMessage(mess) {
  mess = mess || 'Подъём!';
  console.log( 'будильник сработал, сообщение: ' + mess );
}

alarmClockMessage('Пора на работу!');
alarmClockMessage();
alarmClockMessage("");

// функции, объявленные через "function имя", создаются и доступны для вызова
// сразу при создании их области видимости

// здесь функция уже объявлена (создана) и её можно вызвать
f(555);

function f(x) {
  console.log(x);
}
