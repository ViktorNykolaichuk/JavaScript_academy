// 1. Створення класу та об'єкта:
// Створіть клас Person з властивостями name та age.

class Person1 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}

// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.

let firstPerson = new Person1 ("John", 30);
console.log(firstPerson);



// 2. Методи класу:
// Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи.
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this._name}`);
    }
}
let secondPerson = new Person("John", 30);
secondPerson.sayHello();

// 3. Наслідування:
// Створіть клас Student, який наслідує від класу Person.
// Додайте властивість studentId до класу Student.
// Додайте метод study, який виводить повідомлення про вивчення студентом.
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this._studentId = studentId;
    }

    study() {
        console.log(`${this._name} is tudying by id ${this._studentId}`);
    }
}

let student = new Student("Marek", 20, 1);
student.study();