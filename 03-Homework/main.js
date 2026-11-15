// 1. Логічні оператори  порівняння та alert:
let number1 = 5;
let number2 = 12;
alert (`${number1} = ${number2} is ${number1 === number2}`);

// 2. Метод вводу інформації та логічні порівняння:
let oddCheck = Number(prompt('Enter a number to check if it is odd'));
let isEven = oddCheck%2 === 0;
console.log (isEven && "Number is even" || !isEven && "Number is odd");

// 3. Логічні порівняння та введення-виведення:
let ageCheck = Number(prompt('Enter you age to access'));
let isPermittedByAge = ageCheck >= 18;
alert (isPermittedByAge && "Access permitted" || !isPermittedByAge && "Access denied. You are under 18 years old");

// 4. Розрахунок вартості товару та console.log:
let amount = Number(prompt('Enter the amount of Xiaomi Mi9T'));
let price = Number(prompt('Enter the UAH price of Xiaomi Mi9T'));
let summaryPrice = amount*price;

console.log(`Order prise is ${summaryPrice} UAH`);

// 5. Розрахунок знижки на товар та alert:
let fullPrice = Number(prompt('Enter the UAH price of JBL Wave buds 2 to check your discount'));
let disconut50 = fullPrice*0.5;
let priceAfterDiscount = fullPrice-disconut50;
alert (`Discount is ${disconut50} UAH. Your price after the discount is ${priceAfterDiscount} UAH.`);