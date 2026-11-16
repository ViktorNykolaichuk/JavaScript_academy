// 1. Визначення типу геометричної фігури за допомогою switch:
// Створіть код, який приймає назву геометричної фігури ("коло", "квадрат", "трикутник") і використовуючи switch оператор, виводить повідомлення про кількість сторін цієї фігури (наприклад, "Коло має 0 сторін", "Квадрат має 4 сторони").
let inputFigure = prompt(`Task1. Enter figure type (коло/квадрат/трикутник)`);
switch (inputFigure) {
    case 'коло':
    case 'Коло':
        console.log(`A circle has no sides`);
        break;
    case 'квадрат':
    case 'Квадрат':
        console.log(`A square has four sides`);
        break;
    case 'трикутник':
    case 'Трикутник':
        console.log(`A triangle has three sides`);
        break;
    default:
        console.log(`Task1. Entered invalid value`);
}
// 2. Підрахунок суми парних чисел:
// Створіть код, який використовує цикл while для знаходження суми всіх парних чисел в заданому діапазоні (наприклад, від 1 до 20).
let numberCounter = 0;
let numberSumm = 0;
while (numberCounter < 21) {
    if (numberCounter % 2 === 0) {
        numberSumm += numberCounter;
    }
    numberCounter++;
}
console.log(`Task2. Sum of even numbers is ${numberSumm}`);
// 3. Таблиця множення:
// Використовуючи цикл for, напишіть програму, яка генерує "таблицю множення" виводимо в console.log операції  для конкретного числа (наприклад, для числа 5).
console.log(`Task3:`);
let task3_Number = 5;
for (let i = 0; i < 11; i++) {
    let task3_result = task3_Number * i;
    console.log(`5 * ${i} = ${task3_result}`);
}
// 4. Зворотний лічильник:
// Використовуючи цикл for, напишіть програму, яка виводить числа від 10 до 1 в зворотньому порядку.
console.log(`Task4:`);
for (let i = 10; i > 0; i--) {
    console.log(i);
}
// 5. Визначення чи є число парним чи непарним:
// Напишіть програму, яка приймає число і використовуючи if та for, виводить повідомлення про те, чи є число парним чи непарним.

//Наскільки я зрозумів тут цикл просто для практики, бо реаьно його використання в цьому кейсі немає сенсу. Ну або я не вірно зрозумів задачу
let task5_number = Number(prompt(`Task5. Enter the number`));

for (let i = 0; i < 1; i++) {
    if (task5_number % 2 === 0) {
        console.log(`Task5. Number ${task5_number} is even`);
    } else if (task5_number % 2 !== 0) {
        console.log(`Task5. Number ${task5_number} is odd`);
    } else {
        console.log(`Task5. Entered wrong data`);
    }

}
// 6. Знаходження першого парного числа:
// Напишіть програму, яка використовує цикл for для перебору чисел від 1 до 10 і виводить перше знайдене парне число. Використайте оператор break, щоб припинити виконання циклу, якщо парне число знайдено.

for (let i = 1; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`Task6. Number ${i}`);
        break;
    }
}

// 7. Виведення парних чисел:
// Створіть програму, яка використовує цикл for для перебору чисел від 1 до 10 і виводить тільки парні числа. Використайте оператор continue, щоб пропустити ітерації для непарних чисел.

for (let i = 1; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`Task7. Number ${i}`);
}