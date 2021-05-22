// Метод arr.map является одним из наиболее полезных и часто используемых.
// Он вызывает функцию для каждого элемента массива и возвращает массив
// результатов выполнения этой функции.

//Например, здесь мы преобразуем каждый элемент в его длину:
let arr = ["Bilbo", "Gandalf", "Nazgul"]


let lengths = arr.map(
    function (item) {
        return item.length;
    }
);

console.log(arr);
console.log(lengths); // 5,7,6

//
//
// function arrayMapIter (item, index) {
//     return item + '_' + index;
// }
//
// let newIndexInVal = arr.map(arrayMapIter);
// console.log(newIndexInVal)