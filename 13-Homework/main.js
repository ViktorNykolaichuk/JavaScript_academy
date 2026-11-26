window.onload = function () {
    //  1. Створіть сторінку в яку розмістіть список що розміщений вище, підключіть js файл до сторінки і виконайте такі завдання:
    // - виберіть всі елементи першого рівня вкладення і виведіть в консоль їх кількість;
    // - виведіть в консоль кількість елементів 2 рівня вкладення.

    let firstLvlElements = document.querySelectorAll("#tree > li");
    console.log(`Кількість елементів першого рівня: ${firstLvlElements.length}`);

    let secondLvlElements = document.querySelectorAll("#tree > li > ul > li");
    console.log(`Кількість елементів другого рівня: ${secondLvlElements.length}`);

    // 2. Пройдіть по масиву і зробіть заповнення таблиці даними з масива
    const booksArray = [
        {
            title: 'Пригоди Аліси в Країні Див',
            year: 1865,
            rating: 4.5
        },

        {
            title: '1984',
            year: 1949,
            rating: 4.8
        },

        {
            title: 'Гаррі Поттер і філософський камінь',
            year: 1997,
            rating: 4.7
        }


    ];

    const tableEl = document.querySelector("table");

    for (let book of booksArray) {
        const tr = document.createElement("tr");

        for (let key in book) {
            const td = document.createElement("td");
            td.textContent = book[key];
            tr.append(td);
        }

        tableEl.append(tr);
    }


    // 3.  Створіть HTML-сторінку з контейнером, в який будуть додаватися елементи за допомогою JavaScript.

    const elementsArray = [

        { tag: 'p', text: 'Елемент 1' },

        { tag: 'div', text: 'Елемент 2' },

        { tag: 'span', text: 'Елемент 3' }

    ];

    // Створіть функцію, яка приймає об'єкт і створює новий елемент з використанням document.createElement, встановлює текст елемента та повертає його в контейнер.
    const containerEl = document.querySelector(".container");

    function createElementFromObject(obj) {
        const element = document.createElement(obj.tag);
        element.textContent = obj.text;
        return element;
    }
    // Пройдіть циклом по масиву і для кожного об'єкту застосуйте створену функцію.

    for (const item of elementsArray) {
        containerEl.append(createElementFromObject(item));
    }
}