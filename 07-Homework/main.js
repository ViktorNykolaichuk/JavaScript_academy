// push:
// Завдання 1. Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).
console.log(`===Push Task 1===`);

let push_arr = new Array();
push_arr.push(1.1, 5.4);
console.log(push_arr);

// Завдання 2. Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.
console.log(`===Push Task 2===`);

function push_func(array, element) {
    array.push(element);
}
push_func(push_arr, "String")
console.log(push_arr);





// pop:
// Завдання 1. Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.
console.log(`===Pop Task 1===`);

let pop_arr = new Array("String", 22, "Test");
pop_arr.pop();
console.log(pop_arr);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.
console.log(`===Pop Task 2===`);

function pop_func(array) {
    array.pop();
}
pop_func(pop_arr)
console.log(pop_arr);





// unshift:
// Завдання 1. Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.
console.log(`===unshift Task 1===`);

let unshift_arr = new Array("Number", 1, 10);
unshift_arr.unshift(100);
console.log(unshift_arr);

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.
console.log(`===unshift Task 2===`);

function unshift_func(array, element) {
    array.unshift(element);
}

unshift_func(unshift_arr, 1000);
console.log(unshift_arr);





// shift:
// Завдання 1. Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.
console.log(`===Shift Task 1===`);

let shift_arr = new Array(1, 2, 3, 23, 23, 45);
shift_arr.shift();
console.log(shift_arr);
// Завдання 2. Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.
console.log(`===Shift Task 2===`);

function shift_func(array) {
    array.shift();
}

shift_func(shift_arr);
console.log(shift_arr);





// fill:
// Завдання 1. Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.
console.log(`===Fill Task 1===`);

let fill_arr = new Array(20);
fill_arr.fill("String");
console.log(fill_arr);
// Завдання 2. Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву зазначеними значеннями на зазначених позиціях.
console.log(`===Fill Task 2===`);

let fill2_arr = new Array(20);
function fill2_func(array, data, start, finish) {
    array.fill(data, start, finish);
}
fill2_func(fill2_arr, "Metallica", 2, 5);
console.log(fill2_arr);





// splice:
// Завдання 1. Створіть масив і використайте метод splice, щоб видалити кілька елементів з середини масиву.
console.log(`===Splice Task 1===`);
let splice_arr = new Array(5, 6, 7, 8, 1)
splice_arr.splice(1, 3);
console.log(splice_arr);

// Завдання 2. Напишіть функцію, яка приймає масив, індекс та кількість елементів, і використовує splice для видалення елементів з масиву.
console.log(`===Splice Task 2===`);
let splice2_arr = new Array(5, 6, 7, 8, 1)

function splice_func(array, start_index, quantity) {
    array.splice(start_index, quantity);
}
splice_func(splice2_arr, 2, 1)
console.log(splice2_arr);





// reverse:
// Завдання 1. Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.
console.log(`===reverse Task 1===`);
let reverse_arr = new Array(5, 6, 7, 8, 1);
reverse_arr.reverse();
console.log(reverse_arr);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.
console.log(`===reverse Task 2===`);
function reverse_func(array) {
    array.reverse();
}

reverse_func(reverse_arr);
console.log(reverse_arr);





// concat:
// Завдання 1. Створіть два масиви і використайте метод concat, щоб об'єднати їх в один новий масив.
console.log(`===concat Task 1===`);
let concat_arr1 = new Array(1, 2, 3, 23, 23, 45);
let concat_arr2 = new Array(1, 2, 3, 23, 23, 45);

concat_arr1 = concat_arr1.concat(concat_arr2);
console.log(concat_arr1);

// Завдання 2. Напишіть функцію, яка приймає два масиви і використовує concat для об'єднання їх в новий масив.
console.log(`===concat Task 2===`);

function concat_func(array1, array2) {
    return array1.concat(array2);
}

let concat_arr3 = concat_func(concat_arr1, concat_arr2);
console.log(concat_arr3);





// includes:
// Завдання 1. Створіть масив і використайте метод includes, щоб перевірити, чи масив містить певний елемент.
console.log(`===includes Task 1===`);
let includes_arr = new Array("Number", 1, 10);
let includesResult = includes_arr.includes(1);
console.log(`Is array has element: ${includesResult}`);

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує includes для перевірки наявності цього елемента в масиві.
console.log(`===includes Task 2===`);

function includes_func(array, element) {
    //   let answer = array.includes(element);
    return array.includes(element);
}

let includesResult2 = includes_func(includes_arr, 20);

if (includesResult2) {
    console.log(`Element exists in array`);
} else {
    console.log(`Element does not exist in array`);
}





// filter:
// Завдання 1. Створіть масив чисел і використайте метод filter, щоб створити новий масив, що містить лише парні числа.
console.log(`===filter Task 1===`);

let filter_arr = new Array(1, 2, 3, 23, 24, 45, 125, 200, 114);
function filter_func(number) {
    return number % 2 === 0;
}
let filter_result_arr = filter_arr.filter(filter_func);
console.log(filter_result_arr);

// Завдання 2. Напишіть функцію, яка приймає масив і функцію-умову, і використовує filter для створення нового масиву, що містить елементи, які задовольняють умову.
console.log(`===filter Task 2===`);

function filter2_func(array, func) {
    return array.filter(func);
}

let filter2_arr = filter2_func(filter_arr, filter_func);
console.log(filter2_arr);





// map:
// Завдання 1. Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.
console.log(`===map Task 1===`);
let map_arr = new Array(1, 2, 3, 23, 24, 45, 125, 200, 114);
let map_arr_result = map_arr.map(a => a * a);

console.log(map_arr_result);

// Завдання 2. Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує стрінг до значення.
console.log(`===map Task 2===`);

function transform(arr, convert) {
    return arr.map(convert);
}

function convertToString(item) {
    return `Value: ${item}`;
}

let map2_arr = transform(map_arr, convertToString);
console.log(map2_arr);