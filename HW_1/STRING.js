console.log("1. Написать 5-ть вариантов записи строки: It's beautiful day. I like \"free day\".");
var str1 = "It's a beautiful day. I like \"free days\"";
console.log(str1);

var str2 = 'It\'s a beautiful day. I like "free days"';
console.log(str2);

var str3 = `It's a beautiful day. I like "free days"`;
console.log(str3);

var str4 = "It's a beautiful day. ";
var str5 = 'I like "free days"';
console.log(str4 + str5);

var str6 = 'It\'s a beautiful day. ';
var str7 = "I like \"free days\"";
console.log(str6 + str7);
console.log("\n2. Написать правильное умножение двух дробных чисел (например, 5.45 и 8.3)");
console.log(((5.45 * 10) * (8.3 * 10))/100);
console.log((((5.45 * 10) * (8.3 * 10))/100)==45.235);

console.log("\n3. \"string\" + 2 => NaN (исправить).");
console.log(parseInt("string"+2));