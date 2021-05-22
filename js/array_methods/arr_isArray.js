// Array.isArray() возвращает true или false в зависимости от того
// является ли элемент массивом


console.log(typeof {}); // object
console.log(typeof []); // тоже object

// поэтому удобно использовать метод isArray для того чтобы
// проверить является ли элемент массивом

const arr = ['Vlad', 'Helen', 'Alex'];
const obj = {
    name: "Пес собачий",
    age: 142
}

console.log(Array.isArray(arr));
console.log(Array.isArray(obj));

console.log(arr)