// Факториал числа
// 4! = 4 * 3 * 2 * 1;

function factorial (n) {
    if(n === 1 || n === 0 ) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(4));

// factorial(4); // 24
//     4 * factorial(3) // 24
//         3 * factorial(2) // 6
//             2 * factorial(1); // 2



// function pow(num, exponent) {
//     if(exponent === 1) {
//         return num;
//     } else {
//         return num * pow(num, exponent - 1);
//     }
// }
//
// console.log(pow(2, 8));


