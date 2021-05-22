// Метод arr.concat создаёт новый массив, в который копирует
// данные из других массивов и дополнительные значения.

let arr = [1, 2];

console.log(arr)

// создать массив из: arr и [3,4]
let updatedArr = arr.concat( [3, 4] )
console.log( updatedArr ); // 1,2,3,4

// создать массив из: arr и [3,4] и [5,6]

let updatedArr2 = arr.concat( [3, 4], [5, 6] );
console.log( updatedArr2 ); // 1,2,3,4,5,6

// создать массив из: arr и [3,4], потом добавить значения 5 и 6
let updatedArr3 = arr.concat( [3, 4], 5, 6, 7, 8)

console.log( updatedArr3 ); // 1,2,3,4,5,6