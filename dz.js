// Запрашиваем данные у пользователя
let userInput = prompt("Введите данные:");

// Определяем тип данных
let dataType;
    
if (!isNaN(userInput)) {
    dataType = "number";
} else {
    dataType = typeof userInput;
}

// Выводим результат
alert("Вы ввели: " + userInput + "\nТип данных: " + dataType);



let zodiacN = prompt(' vved znak zodiac');
switch ( zodiacN.toLowerCase()){ //proverka i vivod znaka switch - proverka 
    case 'козерог':
        alert('Hi kozerog');
        break;
case 'овен':
    alert('Hi овен');
    break;
case 'рак':
    alert('Hi рак');
    break;
case 'девы':
    alert('Hi девы');
    break;
}
// 1-
for ( let i=1;i<40;i++){
    console.log(i);
}
//2-
let i=1;
while (i<=40){
    console.log(i);
    i++;
}
//3-
let ii=1;
do{
    console.log(ii);
    ii++;
}   while(ii<=40);
for ( let h=1;h<5;h++){
   alert('postoyano povt soobbsh');
}
// Запросить у пользователя три числа parsefloat- perevod char v int
const number1 = parseFloat(prompt("Введите первое число:"));
const number2 = parseFloat(prompt("Введите второе число:"));
const number3 = parseFloat(prompt("Введите третье число:"));
const numbers = [number1, number2, number3];
numbers.sort((a, b) => a - b); // sort
console.log("Числа по возрастанию:", numbers);
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + "- chet");
    } else {
        console.log(i + "- nechet");
    }
}
let number;

do {
    number = prompt("Введите любое число больше 5:");
    if (number > 5) {
        alert("Поздравляем, вы ввели число больше 5!");
        break;
    } else if (number === null) {
        break; // Если пользователь нажал "Отмена", прерываем цикл
    } else {
        alert("Вы ввели неверное число. Попробуйте еще раз.");
    }
} while (true);

for(let l=1;l<20;l++){
    if(l%2===0){
        console.log(l + '- chet');
    }
}
 let sum = 0;

for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);

function amst(number) {
    let sum = 0;
    let temp = number;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, 3);
        temp = Math.floor(temp / 10);  // floor - okrug v mensh stor
    }
    return sum === number;
}
let number5 = prompt("Введите armstronga:");
if (amst(number5)) {
    console.log(number5 + " amst.");
} else {
    console.log(number5 + " не amst.");
}
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
/// PRACTICE NUMBER 2
alert('HIHIHIHIHIHIHIHIHIHIIHIH');
function enterName() {
    const name = prompt('Enter your name', '');
    document.getElementById('nameArea').innerHTML = name ? ('Hello ' + name) : "no name :(";
}
 
function changeName() {
    if (confirm('Do you want to change your name?')) {
        enterName();
    }
}
enterName();
const min = (a, b) => a < b ? a : b;
console.log(min(99, 100)); 

function solveQuadraticEquation(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    let x1, x2;

    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [x1, x2];
    } else if (discriminant === 0) {
        x1 = -b / (2 * a);
        return [x1];
    } else {
        return 'Уравнение не имеет действительных корней';
    }
}

// Пример использования функции
const a = 3;
const b = -2;
const c = -5;
const roots = solveQuadraticEquation(a, b, c);
console.log('Корни уравнения:', roots);

function addToDisplay(value) {
    document.getElementById("display").value += value; // .value zapominaet znachenie input  += dobavlyaet chisla for example: bilo 12 pols:35 -> 1235
}
function clearDisplay() {
    document.getElementById("display").value = ""; // clear
}

function calculateResult() {
    let result = eval(document.getElementById("display").value); // eval delaet kod v stroke
    document.getElementById("display").value = result;
}

////////////////////////// PRACTICE 33333333333333333333

let array1 = [1, 2, 3, 4, 5];
let array2 = new Array(3); // Создаст пустой массив длиной 3
array2[0] = 'apple';
array2[1] = 'banana';
array2[2] = 'cherry';
let array3 = [];
array3.push('dog');
array3.push('cat');
array3.push('rabbit');

console.log(array1[4]); 
array1[4] = 10;
console.log(array1[4]);

let array = [1, 2, 3, 4, 5];
function showArrayLength() {
    console.log("Длина массива: " + array.length);
}
// Добавляем обработчик события наведения на любой элемент
document.addEventListener("mouseover", showArrayLength);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
array.forEach(function(element) { //вызов по элементу так же
    console.log(element);
});



let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = [...arr1, ...arr2];
console.log(combinedArray);


// Удаляем последний элемент из массива
let removedElement = combinedArray.pop(); // рор удаляет ласт элемент
console.log("Удаленный элемент: " + removedElement);
console.log("Обновленный массив: " + combinedArray);


let newElement = "4";
combinedArray.unshift(newElement); // добавление в начало аншифотом
console.log("Обновленный массив с новым элементом: " + combinedArray);



function squareRootArray(inputArray) { //
    let outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (isNaN(inputArray[i]) || inputArray[i] === "") { // если не число и не пустая строка
            outputArray.push("Невозможно извлечь корень из этого значения");
        } else { 
            let num = parseFloat(inputArray[i]); //перевод в флоат
            outputArray.push(Math.sqrt(num));
        }
    }
    return outputArray;
}
let inputArray = prompt("Введите значения массива через запятую:").split(","); // введение массива и его сплит
let resultArray = squareRootArray(inputArray);
console.log(resultArray);

let today = new Date();
console.log(today);

let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
let day = today.getDate();
let month = months[today.getMonth()];
let year = today.getFullYear();
console.log(day,month,year);


function multiplyRandomNumbers() {
    let num1 = Math.floor(Math.random() * 51); // Генерация случайного числа от 0 до 50
    let num2 = Math.floor(Math.random() * 51); // Генерация второго случайного числа от 0 до 50

    return num1 * num2;
}

let result = multiplyRandomNumbers();
console.log(result);


// PRACTICE NUMBER FOREEEEEEE 44444444


// 1  - 
let student1 = {
    name: "Иван",
    age: 20,
    major: "Информатика",
    greet: function() {
        console.log("Привет, меня зовут " + this.name + " и я учусь на специальности " + this.major + "."); // greet- приветствие функция
    }
};

student1.greet();


// 2
function Student(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
    
    this.greet = function() {
        console.log("Привет, меня зовут " + this.name + " и я учусь на специальности " + this.major + ".");
    };
}

let student2 = new Student("Мария", 22, "Психология");
student2.greet();



// Создаем конструктор для студентов ИНПИТ
// Создаем конструктор StudentINPIT
function StudentINPIT(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}

StudentINPIT.prototype.getInfo = function() {   
    return "Студент " + this.name + ", возраст " + this.age + ", курс " + this.course;
};

var students = [];

function addStudent() {
    var name = document.getElementById("nameInput").value;
    var age = parseInt(document.getElementById("ageInput").value);
    var course = parseInt(document.getElementById("courseInput").value);

    var newStudent = new StudentINPIT(name, age, course);
    students.push(newStudent);

    displayStudents();
}

function displayStudents() {
    var studentsList = document.getElementById("studentsList");
    studentsList.innerHTML = "";

    students.forEach(function(student) {
        var studentInfo = document.createElement("p");
        studentInfo.textContent = student.getInfo();
        studentsList.appendChild(studentInfo);
    });
}

const quizContainer = document.getElementById('quizContainer');
const resultContainer = document.getElementById('resultContainer');

let answers = JSON.parse(localStorage.getItem('answers')) || [];

const questions = [
    "Какой жанр фильмов вы предпочитаете: комедии или драмы?",
    "Какая тематика фильмов вас больше интересует: научная фантастика или документальные фильмы?",
    "Выберите актера/актрису, чьи фильмы вам нравятся: Брэд Питт или Мерил Стрип?",
    "Сколько вам лет?",
    "Как вас зовут?"
];

const recommendations = {
    comedies: "Вам могут понравиться фильмы '1+1' и 'Миллионер из трущоб'.",
    dramas: "Рекомендую посмотреть фильмы 'Побег из Шоушенка' и 'Унесённые ветром'.",
    sciFi: "Посмотрите фильмы 'Интерстеллар' и 'Матрица'.",
    documentaries: "Вам понравятся документальные фильмы 'Космос' и 'Земля'.",
    bradPitt: "Рекомендую посмотреть фильмы с участием Брэда Питта, например 'Бойцовский клуб' и 'Другие'.",
    merylStreep: "Посмотрите фильмы с Мерил Стрип, такие как 'Дьявол носит Prada' и 'Железная леди'."
};

let currentQuestion = 0;

function showQuestion() {
    if (currentQuestion < questions.length) {
        const questionElement = document.createElement('h3');
        questionElement.textContent = questions[currentQuestion];

        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.id = 'answer' + (currentQuestion + 1);
        inputElement.value = answers[currentQuestion] || '';
        inputElement.required = true;

        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Далее';
        buttonElement.addEventListener('click', function() {
            answers[currentQuestion] = document.getElementById('answer' + (currentQuestion + 1)).value;
            localStorage.setItem('answers', JSON.stringify(answers));
            currentQuestion++;
            showQuestion();
        });

        quizContainer.innerHTML = '';
        quizContainer.appendChild(questionElement); //вставить в конец какого-либо другой элемент.
        quizContainer.appendChild(inputElement);
        quizContainer.appendChild(buttonElement);
    } else {
        showRecommendation();
    }
}

function showRecommendation() {
    let recommendation = '';

    if (answers[0].toLowerCase() === 'комедии') {
        recommendation += recommendations.comedies + "<br>";
    } else if (answers[0].toLowerCase() === 'драмы') {
        recommendation += recommendations.dramas + "<br>";
    }

    if (answers[1].toLowerCase() === 'научная фантастика') {
        recommendation += recommendations.sciFi + "<br>";
    } else if (answers[1].toLowerCase() === 'документальные фильмы') {
        recommendation += recommendations.documentaries + "<br>";
    }

    if (answers[2].toLowerCase() === 'брэд питт') {
        recommendation += recommendations.bradPitt;
    } else if (answers[2].toLowerCase() === 'мерил стрип') {
        recommendation += recommendations.merylStreep;
    }
    else recommendation= ('Мы не знаем чем вам помочь');

    resultContainer.innerHTML = '';
    
    const headingElement = document.createElement('h2');
    headingElement.textContent = 'Рекомендации:';
    
    const paragraphElement = document.createElement('p');
    paragraphElement.innerHTML = recommendation;

    resultContainer.appendChild(headingElement);
    resultContainer.appendChild(paragraphElement);
}

showQuestion();
document.addEventListener("DOMContentLoaded", function(event) {
    // Скрываем анимацию и показываем контент после загрузки страницы
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
  });
  


