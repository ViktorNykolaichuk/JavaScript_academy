// 1. Порівняння трьох чисел:
// Запитайте у користувача ввести три числа (ввести через prompt)
// Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.

let firstValue = Number(prompt(`Task1. Enter first number`));
let secondValue = Number(prompt(`Task1. Enter second number`));
let thirdValue = Number(prompt(`Task1. Enter third number`));

if(firstValue >= secondValue && firstValue >= thirdValue){
    console.log(`${firstValue} is a max value`);
}
else if(secondValue >= firstValue && secondValue >= thirdValue){
    console.log(`${secondValue} is a max value`);
}
else{
    console.log(`${thirdValue} is a max value`);
}

// 2. Визначення сезону:
// Запитайте у користувача ввести номер місяця (від 1 до 12).
// Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.
let userMonth = Number(prompt(`Task2. Enter the number of month`));
if (userMonth >= 1 && userMonth <= 12) {
    if (userMonth === 1 || userMonth === 2 || userMonth === 12) {
        console.log(`Season is Winter`);
    }
    else if (userMonth >= 3 && userMonth <= 5) {
        console.log(`Season is Spring`);
    }
    else if (userMonth >= 6 && userMonth <= 8) {
        console.log(`Season is Summer`);
    }
    else if (userMonth >= 9 && userMonth <= 11) {
        console.log(`Season is Autumn`);
    }
}
else {
    console.log(`Entered wrong data`);
}

// 3. Визначення розміру числа:
// Запитайте у користувача ввести число.
// Виведіть у консоль повідомлення про те, чи введене число є додатнім, від'ємним чи нулем.
let numberCheck = Number(prompt(`Task3. Enter the number`));
if (numberCheck > 0) {
    console.log(`Positive number`);
} else if (numberCheck < 0) {
    console.log(`Negative number`);
} else if (numberCheck === 0) {
    console.log(`number is 0`);
} else {
    console.log(`Entered wrong data`);
}


// 4. Перевірка величини кута:
// Запитайте у користувача ввести величину кута в градусах.
// Виведіть у консоль повідомлення про те, чи є величина кута гострою чи тупою ( це більше і менеше 90 градусів відповідно), використовуючи тернарний оператор.
let angleCheck = Number(prompt(`Task4. Enter the angle degree`));
let angleCheckResult = "";
if (angleCheck > 0 && angleCheck <=180) {
angleCheckResult = angleCheck < 90 ? "This is acute angle" : "This is obtuse angle";
} else {
angleCheckResult = "Wrong value";
}
console.log(angleCheckResult);

// 5. Оцінка студента:
// Запитайте у користувача ввести свою оцінку за тест (від 0 до 100).
// Визначте, яку оцінку отримає студент (A, B, C, D або F) за таких умов:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// менше 60: F
// Збільште оцінку студента на одиницю, використовуючи постфіксний інкремент.
// Виведіть у консоль повідомлення про оцінку до і після інкремента та визначте за допомогою тернарного оператора, чи студент зарахований чи ні (прохідний бал 60).
let studentScore = Number(prompt(`Task5. Enter your test score from 0 to 100`));
let passingScore = 60;
let scoreA = studentScore >= 90 && studentScore <= 100;
let scoreB = studentScore >= 80 && studentScore < 90;
let scoreC = studentScore >= 70 && studentScore < 80;
let scoreD = studentScore >= 60 && studentScore < 70;
let scoreF = studentScore < 60;
let grade = "";
if (scoreA) { grade = "A" }
else if (scoreB) { grade = "B" }
else if (scoreC) { grade = "C" }
else if (scoreD) { grade = "D" }
else if (scoreF) { grade = "F" }

console.log(`Student got ${grade} grade`);

console.log(`Student got ${studentScore++} score before the increment, and ${studentScore} after the increment`);
let isStudentEnrolled = studentScore >= passingScore;
let messege = isStudentEnrolled ? `Student have ${studentScore} score and been enrolled!` : `Student have ${studentScore} score and not been enrolled:(`;
console.log(messege);