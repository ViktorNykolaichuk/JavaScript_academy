

window.onload = function () {
    // Створіть HTML-сторінку з елементами header, section,  div, задайте елементам атрибути id, сlass.

    // Виберіть ці елементи за допомогою 
    // getElementById
    // getElementsByClassName
    // getElementsByTagName
    let idEl = document.getElementById("header");
    console.log(idEl);
    let classEl = document.getElementsByClassName("main-content");
    console.log(classEl);
    let tagEl = document.getElementsByTagName("div");
    console.log(tagEl);

    // Створіть список ul з 5 елементами li всередині.
    // За допомогою querySelector виберіть:
    // - перший елемент списку
    // - останній елемент списку
    // - 3 елемент списку
    let firstLi = document.querySelector("ul.main-content__list > li:first-child");
    console.log(firstLi);
    let lastLi = document.querySelector("ul.main-content__list > li:last-child");
    console.log(lastLi);
    let thirdLi = document.querySelector("ul.main-content__list > li:nth-child(3)");
    console.log(thirdLi);

    // За допомогою querySelectorAll
    // - всі елементи li в списку
    // - конвертуйте вибрані елменти в массив

    let liElements = document.querySelectorAll("ul.main-content__list > li");
    console.log(liElements);

    let liArray = Array.from(liElements);
    console.log(liArray);

    // Створіть на сторінці елемент який вибирається ціми селекторами
    // // let listItems = document.querySelectorAll('ul.nav > li');
    // // let listItem = document.querySelectorAll('li:nth-child(2)');

    let listItems = document.querySelectorAll('ul.nav > li');
    console.log(listItems);
    let listItem = document.querySelectorAll('li:nth-child(2)');
    console.log(listItem);
}




