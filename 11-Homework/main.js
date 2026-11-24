// Тема: Spread
console.log("===== Spread =====")
// Напишіть програму, яка об'єднує два масиви в один, використовуючи оператор Spread, і виводить новий масив.
let arr1 = [1, 2, 3, 23, 24, 45, 125, 200, 114];
let arr2 = ["One", "Two", "Three"];
let arrays = [...arr1, ...arr2];
console.log(arrays)
// Тема: Rest
console.log("===== Rest =====")
// Створіть функцію, яка приймає перший аргумент як рядок, а решту аргументів зберігає в масиві за допомогою оператора Rest. Функція повинна вивести рядок і масив.
function restFunc(string, ...args) {
    console.log(`String: ${string}`)
    console.log("Rest:", args)
}
restFunc("str", "rest1", "rest2", "rest3")
// Напишіть функцію, яка приймає будь-яку кількість числових аргументів та обчислює їх середнє значення за допомогою оператора Rest.
function restNumberFunc(...numbers) {
    if (numbers.length === 0) {
        return "Invalid input";
    }

    for (const number of numbers) {
        if (typeof number !== "number") {
            return "Invalid input";
        }
    }
    return Math.sumPrecise(numbers) / numbers.length;
}
console.log(restNumberFunc(10, 12, 12, 43, 43, 23, 10));

// Тема: TypeOf
console.log("===== typeOf =====")
// Створіть функцію, яка приймає аргумент будь-якого типу та виводить повідомлення про його тип за допомогою оператора typeof.
function typeOfFunc(element) {
    console.log(`Type of element is ${typeof (element)}`);
}
typeOfFunc(arr1);
// Напишіть програму, яка перевіряє тип змінної та виводить повідомлення "Це число", "Це рядок" або "Це інший тип", використовуючи оператор typeof. 

function checkType(element) {
    const checkResult = typeof element;
    switch (checkResult) {
        case "string":
            console.log("It`s a string");
            break;
        case "number":
            console.log("It`s a number");
            break;
        default:
            console.log("It`s another type");
            break;
    }
}

checkType(22);
checkType("str");
checkType(true);