// Он возвращает новый массив, в который копирует элементы, начиная с
// индекса start и до end (не включая end). Оба индекса start и end могут
// быть отрицательными. В таком случае отсчёт будет осуществляться с конца массива.
//
//Это похоже на строковый метод str.slice, но вместо подстрок возвращает подмассивы.

let arr = ["t", "e", "s", "t"];
const copiedElements = arr.slice(1, 3);
const copiedElementsFromTheEnd = arr.slice(-2);

console.log(copiedElements, copiedElementsFromTheEnd);


// Можно делать копию массива если вызываем slice без аргуметоов
let arrayCopy = arr.slice();
console.log(arrayCopy);
