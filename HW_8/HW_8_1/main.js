console.log("Переписать предыдущую домашнюю работу с использованем объктов и функций");
console.log("Объект с информацией о пароле пользователя:");
var checkPassword = function(str){
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
};
var passwordOfUser = {};
passwordOfUser.userPassword = prompt("Введите пароль:", "vfvkl45");
passwordOfUser.isValid = checkPassword(passwordOfUser.userPassword);
console.log(passwordOfUser);

console.log("Объект с суммой масивов");
var countSumOfArrays = function(str1, str2){
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
};
var twoArrays = {};
twoArrays.userStr1 = prompt("Введите первую строку с числом:", "54152345");
twoArrays.userStr2 = prompt("Введите вторую строку с числом:", "952");
twoArrays.sumOfArray = countSumOfArrays(twoArrays.userStr1, twoArrays.userStr2);
console.log(twoArrays);

console.log("Объект с информацией о числе:");
var primeNum = function(num){
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
};
var evenNum = function(num) {
    if(num % 2 == 0){
        return true;
    } else {
        return false;
    }
};
var aliquotNum = function(num) {
    if(num % 10 == 0){
        return true;
    } else {
        return false;
    }
};

var infoAboutNumber = {};
infoAboutNumber.userNum = +prompt("Введите число:", "51");
infoAboutNumber.isPrimeNum = primeNum(infoAboutNumber.userNum);
infoAboutNumber.isEven = evenNum(infoAboutNumber.userNum);
infoAboutNumber.isAliquot = aliquotNum(infoAboutNumber.userNum);
console.log(infoAboutNumber);



