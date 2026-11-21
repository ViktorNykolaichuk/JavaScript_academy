// Завдання 1.
// Перепишіть цей код використовуючи let const~
// // Замість var
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

console.log(`=====Task 1=====`);
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(`----------------`);
for (const i of [0, 1, 2, 3, 4]) {
    console.log(i);
}
console.log(`----------------`);
// // Замість var
// var message = 'test';
// function example() {
//     if (true) {
//         var message = 'Hello, world!';
//         console.log(message);
//     }
//     console.log(message); // Виведе 'Hello, world!'
// }
let message = 'test';
function example() {
    let message = 'Hello, world!';
    if (true) {
        console.log(message);
    }
    console.log(message); // Виведе 'Hello, world!'
}
example();

const message1 = 'test';
function example1() {
    const message1 = 'Hello, world!';
    if (true) {
        console.log(message1);
    }
    console.log(message1);
}
example1();

// Завдання 2.
// Використовуючи for in  виведіть значення з об'єктку в console.log
// const person = {
//     name: 'John',
//     age: 25,
//     occupation: 'Developer'
// };
console.log(`=====Task 2=====`);
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};

for (const key in person) {
    console.log(person[key]);
}


// Завдання 3.
// Використовуючи for of  та for in  виведіть занчення з об'єктів які знаходяться в масиві
// const students = [
//     { name: 'Alice', age: 20, grade: 'A' },
//     { name: 'Bob', age: 22, grade: 'B' },
//     { name: 'Charlie', age: 21, grade: 'C' }
// ];
console.log(`=====Task 3=====`);

const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];

for (const value of students) {
    console.log(`Name: ${value.name}, age: ${value.age}, grade: ${value.grade}`);
}
console.log(`----------------`);

for (const key in students) {
    console.log(`Name: ${students[key].name}, age: ${students[key].age}, grade: ${students[key].grade}`);
}
console.log(`----------------`);
// Можливо малось на увазі у завдання використати цикли разом

for (const value of students) {
    let str = "";
    for (const key in value) {

        if (str !== "") {
            str += ", ";
        }
        str += value[key];
    }

    console.log(str);
}