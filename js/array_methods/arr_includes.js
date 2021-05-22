let arr = ['Alex', 'Vlad', 'Helen', 'Yuriy'];


// arr.indexOf(item, from) ищет item, начиная с индекса from,
// и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.

console.log(arr.indexOf('banana'))
console.log(arr.indexOf('Alex'));
console.log(arr.indexOf('Helen'));

// arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.

// console.log(arr.lastIndexOf('banana'))
// console.log(arr.lastIndexOf('Alex'));
// console.log(arr.lastIndexOf('Helen'));

// arr.includes(item, from) – ищет item, начиная с индекса from,
// и возвращает true, если поиск успешен.

// console.log(arr.includes('banana'));
// console.log(arr.includes('Helen'));
// console.log(arr.includes('Helen'), 1);