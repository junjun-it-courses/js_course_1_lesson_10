// Метод filter применяет функцию коллбек которая применяется к каждому элементу массива
// если функция возвращает true то элемент будет добавлен в массив результатов

// let results = arr.filter(function(item, index, array) {
    // если true - элемент добавляется к результату, и перебор продолжается
    // возвращается пустой массив в случае, если ничего не найдено
// });

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(
    function (item) {
        return item.id < 3
    }
);

console.log(someUsers, someUsers.length);