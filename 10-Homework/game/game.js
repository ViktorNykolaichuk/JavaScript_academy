//Написати гру "Камінь, ножниці, папір"  дані користувач отримує через prompt, а результат гри виводити використовуючи alert

let userInput = prompt("Rock, paper or scissors?");
if (userInput === null) {
    alert("Game cancelled");
}
else {
    let variants = ["rock", "paper", "scissors"];
    let inputResult = userInput.trim().toLowerCase();

    if (!variants.includes(inputResult)) {
        alert("Invalid input");
    } else {
        let rand = Math.floor(Math.random() * variants.length);
        let randResult = variants[rand];
        alert(chooseWinner(inputResult, randResult));
    }
}

function chooseWinner(input, random) {
    let match = `It is ${input} vs ${random}`;

    if (input === random) {
        return `${match}, draw!`;
    }

    if (
        (input === "rock" && random === "scissors") ||
        (input === "scissors" && random === "paper") ||
        (input === "paper" && random === "rock")
    ) {
        return `${match}, you win!`;
    }
    return `${match}, you lose!`;
}