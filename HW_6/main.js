console.log("1. Сложение 2 массивов:");
let firstNumber =  '123';
let secondNumber = '4567';

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Строка содержит не только цифры! Проверьте строку.")
} else {
    let sumOfNumbers = sumOfTwoNumbers(firstNumber, secondNumber);
    console.log(`${firstNumber} + ${secondNumber} = ${sumOfNumbers}`);
}

function sumOfTwoNumbers (firstNumber, secondNumber) {
    let resultArray = [];
    let newLengthOfArray;
    let num1;
    let num2;
    let index;
    let balancer = 0;

    let arrayOfFirstNum = firstNumber.split('');
    let arrayOfSecondNum = secondNumber.split('');

    if (arrayOfFirstNum.length < arrayOfSecondNum.length) {
        newLengthOfArray = arrayOfSecondNum.length;
    } else {
        newLengthOfArray = arrayOfFirstNum.length;
    }

    for(let i = 0; i < newLengthOfArray; i++) {
        index = newLengthOfArray - 1 - i;

        num1 = +arrayOfFirstNum[arrayOfFirstNum.length - 1 - i] || 0;
        num2 = +arrayOfSecondNum[arrayOfSecondNum.length - 1 - i] || 0;

        resultArray[index] = num1 + num2 + balancer;

        if (resultArray[index] > 9 && index !== 0) {
            balancer = 1;
            resultArray[index] %= 10;
        } else {
            balancer = 0;
        }

        //console.log(resultArray[index]);
    }
    //console.log(resultArray);
    return resultArray.join('');
}

console.log("2. Функция проверки пароля:");
let userPassword = prompt("Введите пароль:", "qwerty123");
console.log(validatePassword(userPassword));
function validatePassword(str) {
    if (str.length < 6 || str.length > 20) {
        alert('Слишком короткий или длинный пароль');
        return "INVALID";
    }
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            alert("Пароль должен содердать только буквенные и цифровые символы!");
            return "INVALID";
        }
    }
    for(let i = 0; i < str.length; i++){
        if (!isNaN(str[i])) {
            var isNumber = true;
        }
        if (isNaN(str[i])) {
            var isLetter = true;
        }
    }
    if(isNumber !== isLetter){
        alert("Пароль должен содержать обязательно и буквы, и цифры!");
        return "INVALID";
    }
    return "VALID";
}

console.log("3. Функция проверки числа:");
let userNumber = +prompt("Введите число:", "10");
console.log(userNumber);
console.log(checkNumber(userNumber));

function isPrimeNumber(num){
    if(num <= 1){
        return false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}
function isEven(num) {
    if(num % 2 == 0){
        return true;
    } else {
        return false;
    }
}
function isAliquote(num) {
    if(num % 10 == 0){
        return true;
    } else {
        return false;
    }
}
function checkNumber(num) {
    if(isAliquote(num)){
        return [false, true, true];
    } else if (isEven(num) && num != 2){
        return [false, true, false];
    } else if(isPrimeNumber(num)) {
        if(isEven(num)){
            return [true, true, false];
        } else {
            return [true, false, false];
        }
    } else{
        return [false, false, false];
    }
}
