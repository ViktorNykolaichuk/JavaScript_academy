// Завдання для Math.min та Math.max:
console.log("======Math.min | Math.max======");
// Створіть функцію, яка приймає два числа як аргументи і повертає менше з них.
let number1 = 12;
let number2 = 21;
function getMinNumber(number1, number2) {
    return Math.min(number1, number2);
}
console.log(`Min: ${getMinNumber(number1, number2)}`);

// Створіть функцію, яка приймає два числа як аргументи і повертає більше з них.
function getMaxNumber(number1, number2) {
    return Math.max(number1, number2);
}
console.log(`Max: ${getMaxNumber(number1, number2)}`);

// Завдання для Math.pow:
console.log("======Math.pow======");
// Створіть функцію, яка підносить число до заданого ступеня.
// Виведіть результат у консоль.
function getPow(number, pow) {
    return Math.pow(number, pow);
}

console.log(`Pow: ${getPow(number1, 3)}`);


// Завдання для Math.floor та Math.ceil:
// Створіть функцію, яка приймає випадкове дробове число та використовує Math.floor для округлення вниз.
console.log("======Math.floor | Math.ceil======");
let randomNumber = Math.random()*100;

function floorFunc(number) {
   return Math.floor(number);
}
console.log(`floor: ${floorFunc(randomNumber)}`);
// Створіть функцію, яка приймає випадкове дробове число та використовує Math.ceil для округлення вгору.

function ceilFunc(number) {
   return Math.ceil(number);
}

console.log(`ceil: ${ceilFunc(randomNumber)}`);


// Завдання для Date.getYear:
// Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік
// Виведіть результат у консоль.
console.log("======Date.getYear======");
let userAge = Number(prompt("Enter your age"));

function getUserBirthYear(age) {
    let nowDate = new Date().getFullYear();
    return nowDate-age;
}
console.log(`Year of birth is ${getUserBirthYear(userAge)}`);


// Завдання для Date.toLocaleString:
console.log("======Date.toLocaleString======");
// Створіть об'єкт Date для поточної дати та часу.
// Використайте метод toLocaleString(), щоб отримати поточну дату та час у зручному для читання форматі.
// Виведіть результат у консоль.
let nowDate = new Date();
let stringDate = nowDate.toLocaleString();
console.log(`Current date is ${stringDate}`)


// Завдання для String.split та toUpperCase:
console.log("======String.split | toUpperCase======");
// Створіть рядок, який містить слова, розділені пробілами.
// Використайте метод split, щоб розбити рядок на масив слів.
// Виведіть отриманий масив у консоль у верхньому регістрі.
let str = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus nulla pariatur error officia sed dolores porro ab qui, atque voluptatem commodi perspiciatis molestias minima neque fugiat est quod praesentium?";
let strArray = str.split(" ");
let upperArray = strArray.map( a => a.toUpperCase());
console.log(upperArray);