console.log("Функция applyAll:");

let sum = (...rest) => {
    return rest.reduce((a, b) => a + b, 0);
};

let difference = (...rest) => {
    return rest.reduce((a, b) => a - b);
};

let mul = (...rest) => {
    return rest.reduce((a, b) => a * b);
};

let division = (...rest) => {
    return rest.reduce((a, b) => (a / b).toFixed(2));
};

function applyAll (func, ...rest) {
    return func(...rest);
}

console.log(`Сумма чисел: ${applyAll(sum, 8, 2, 6, 9)}`);
console.log(`\nРазность чисел: ${applyAll(difference, 15, 8, 5, 9)}`);
console.log(`\nУмножение чисел: ${applyAll(mul, 2, 6, 3)}`);
console.log(`\nДеление чисел: ${applyAll(division, 5, 2, 3)}`);



console.log("\nЧисла Фибоначчи:");

let fibonacci = num => {
    if (num == 0) {
        return 0;
    } else if (num == 1 || num == 2) {
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
};

console.log(fibonacci(6));

