const GREETING = 'Hello World';

function sum(num1, num2) {
    return num1 + num2;
}

function privateLog() {
    console.log('Private function');
}

export {sum, GREETING};