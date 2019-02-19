"use strict";

function example() {
// ищем первое же после 25 число, делящееся на 7
  for ( var с = 25; ; с++) {
    if ( с % 7 == 0)
      break;
  }
  console.log('Наименьшее число после 25, делящееся на 7: '+с);
}

function example2() {

// сделаем что-то 5 раз
  for (var n = 1; n < 6; n++)
    console.log('A');

  for (var n = 0; n < 5; n++)
    console.log('B');

  for (var n = 1; n <= 5; n++)
    console.log('C');
}

/**
 * Find min value in array
 *
 * @param list
 * @returns {*}
 */
function minValue(list) {

  var min = list[0];

  for (var i = 1; i <= list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
  }
  alert(min);
  return min;
}

/**
 * Get digits of the number
 *
 * @param x
 * @returns {Array}
 */
function digits(x) {

  var result = [];

  while (x >= 1) {
    result.push(x % 10);
    x = Math.floor(x / 10);
  }

  alert(result.reverse());
  return result.reverse();
}


