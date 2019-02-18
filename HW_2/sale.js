var applePrice = 12.50;
var appleDiscount = +prompt("Введите скидку на яблоки:", "15");
while(appleDiscount < 0 || appleDiscount > 100 || isNaN(appleDiscount) || appleDiscount == ""){
    appleDiscount = +prompt("Вы ввели недопустимое значение! Введите скидку на яблоки повторно:");
}
var totalApple = Math.round((applePrice - (applePrice * (parseInt(appleDiscount)/100))) * 100) / 100;
console.log(`Яблоки украинские.
цена: ${totalApple} грн.`);
console.log("Яблоки украинские\n" + "цена: " + totalApple + " грн.");

var orangeMarkup = 15;
var orangePrice = prompt("Введите стоимость апельсинов:", "12.50");;
while(orangePrice < 0 || isNaN(orangePrice) || orangePrice == ""){
    orangePrice = prompt("Вы ввели недопустимое значение! Введите стоимость апельсинов повторно:");
}
var totalOrange = Math.round(((parseFloat(orangePrice) * (orangeMarkup/100)) + parseFloat(orangePrice)) * 100) / 100;
console.log(`Апельсины.
цена: ${totalOrange} грн.`);
console.log("Апельсины\n" + "цена: " + totalOrange + " грн.");







