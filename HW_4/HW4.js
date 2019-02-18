console.log("1. Сделать проверку на длину строки. ");
var userStr = prompt("Введите любую строку:", "");
var i;
if(userStr.length < 10){
    var arr = userStr.split('');
    for(i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
} else{
   newStr1 = userStr.substring(0, 7);
   console.log(newStr1);
   newStr2 = userStr.substring(9);
   console.log(newStr2);
}
console.log("2. Дана строка. Сделайте заглавным первый символ каждого слова в этой строке.");
var myStr = prompt("Введите любую строку:", "");;
var array = myStr.split(' ');
for(i = 0; i < array.length; i++){
    array[i] = array[i].charAt(0).toUpperCase() + array[i].substring(1);
    console.log(array[i]);
}
console.log(array.join(' '));
