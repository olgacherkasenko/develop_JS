var resultObject = {};
let userPassword = prompt("Введите пароль:", "qwerty123");
var isValidPassword = validatePassword(userPassword);
resultObject.password = userPassword;
resultObject.isRightPassword = isValidPassword;
if(isValidPassword !== "VALID"){
    resultObject.isRightPassword = "Пароль не прошел проверку!";
    alert("Пароль не прошел проверку!");
} else {
    let userNumber = prompt("Введите число:", "23");
    resultObject.isRightNum = checkNumber(userNumber);
    if(checkNumber(userNumber)) {
        let num1 = prompt("Введите первое число:", "3");
        let num2 =prompt("Введите второе число:", "6");
        let summa = sumOfArrays(num1, num2);
        resultObject.summaOfNumbers = summa;
        console.log(summa);
    } else {
        resultObject.isRightNum = "Введенное число не простое, не кратное 10 и не четное!";
        alert("Введенное число не простое, не кратное 10 и не четное!");
        }
    }
console.log(resultObject);
//функция проверки пароля
function validatePassword(str) {
    if (str.length < 6 || str.length > 20) {
        //alert('Слишком короткий или длинный пароль');
        return "INVALID";
    }
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            //alert("Пароль должен содердать только буквенные и цифровые символы!");
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
        //alert("Пароль должен содержать обязательно и буквы, и цифры!");
        return "INVALID";
    }
    return "VALID";
}
//функция проверки числа
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
function isAliquot(num) {
    if(num % 10 == 0){
        return true;
    } else {
        return false;
    }
}
function checkNumber(num) {
   return isPrimeNumber(num) || isEven(num) || isAliquot(num);
}
function sumOfArrays(str1, str2){
    let mass1 = str1.split('');
    let mass2 = str2.split('');
    if(mass1.length < mass2.length){
        while(mass1.length != mass2.length){
            mass1.unshift('0');
        }
    } else{
        while(mass2.length != mass1.length){
            mass2.unshift('0');
        }
    }
    var massResult = [];
    var excess = 0;
    for(let i = mass1.length - 1; i >= 0; i--){
        massResult[i] = parseInt(mass1[i]) + parseInt(mass2[i]) + excess;
        if(massResult[i] > 9){
            excess = 1;
            massResult[i] %= 10;
            massResult[i-1] = parseInt(mass1[i-1]) + parseInt(mass2[i-1]) + excess;
        } else{
            excess = 0;
        }
        if( i == 0){
            massResult[i] = parseInt(mass1[i]) + parseInt(mass2[i]) + excess;
        }
        //console.log(massRes[i]);
    }
    return massResult.join("");
}