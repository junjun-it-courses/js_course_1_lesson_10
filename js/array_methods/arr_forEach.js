// Метод arr.forEach позволяет запускать функцию для каждого элемента массива.
// arr.forEach(function(item, index, array) {
//     // ... делать что-то с item
// });

const arr = ["Bilbo", "Gandalf", "Nazgul"];

arr.forEach(
    function (item, index, array) {
        console.log(`${item} имеет позицию ${index} в ${array}`);
    }
);


// function iterArr(item, index) {
//     alert(item + '_' + index);
// }
//
// arr.forEach(iterArr)