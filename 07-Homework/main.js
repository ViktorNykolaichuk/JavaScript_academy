// 1. Калькулятор 
// Створіть функції для кожної математичної операції (функція суми створена на уроці). Використовуючи switch напишіть програму яка отримує знак математичної операції (+, -, /, *) та 2 значення і запускає функцію для цієї математичної операції з 2 цифровими значеннями
//, subtraction, division, multiplication
let addition = (a, b) => a + b;
let subtraction = (a, b) => a - b;
let division = (a, b) => a / b;
let multiplication = (a, b) => a * b;

function calc(number1, operator, number2) {
    switch (operator) {
        case "+":
            return addition(number1, number2);
        case "-":
            return subtraction(number1, number2);
        case "/":
            return division(number1, number2);
        case "*":
            return multiplication(number1, number2);
        default:
            return "Unknown operator";
    }
}
console.log(calc(121, "+", 54));
console.log(calc(12, "-", 1));
console.log(calc(12, "/", 6));
console.log(calc(5, "*", 12));

// 2. Параметри та колбеки:
// Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.

let usersArray = ["Tom", "Mark", "Lena", "Maria", "Malvina"]

function hiUser(userName) {
    console.log(`Welcome ${userName}`)
}

function wellcomUser(array, mesage) {
    for (let i = 0; i < array.length; i++) {
        mesage(array[i]);
    }
}

wellcomUser(usersArray, hiUser);

// 3. Стрілкові функції:
// Перепишіть попередню функцію в стрілкову

let hiUserArrow = (userName) => console.log(`Welcome ${userName}`);

let wellcomUserArrow = (array, mesage) => {
    for (let i = 0; i < array.length; i++) {
        mesage(array[i]);
    }
}

wellcomUserArrow(usersArray, hiUserArrow);

// 4. Параметри за замовчуванням:
// Створіть функцію, яка приймає параметр зі значенням за замовчуванням і виводить його.

function task4Func(number = 0) {
    console.log(number);
}
task4Func(1);
task4Func();

// 5. Задача з колбеком:
// Створіть функцію, яка приймає стрінг значення і функцію-колбек, і викликає цю функцію-колбек, передаючи їй стрінг значення

let text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ipsa totam veniam animi dolore a tempora quae nostrum architecto nulla vitae necessitatibus, aperiam nobis? Aliquid vel amet molestiae inventore dolor.";

let t5Callback = (str) => console.log(`Welcome ${str}`);
let t5Func = (str, func) => func(str);

t5Func(text, t5Callback);

// 6. Перепишіть стрілкову функцію в звичайну
// const multiplyValues = (a, b, c) => a * b * c;

function multiplyValues(a, b, c) {
    return a * b * c;
}

console.log(multiplyValues(2, 2, 2));