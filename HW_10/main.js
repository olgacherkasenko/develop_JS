var dataBaseOfStudents = [
    {
        name: "Vasya Ivanov",
        yearOfStart: 2000,
        yearOfEnd: 2003
    },
    {
        name: "Petya Petrov",
        yearOfStart: 2004,
        yearOfEnd: 2006
    },
    {
        name: "Ivan Ivanovich",
        yearOfStart: 2005,
        yearOfEnd: 2005
    },
    {
        name: "Sergey Sergeev",
        yearOfStart: 2002,
        yearOfEnd: 2007
    }
];

console.log("База студентов:");
console.log(dataBaseOfStudents);

function getListOfStudents (startYear, finishYear){
    let massResult = [];

    for(let i = 0; i < dataBaseOfStudents.length; i++){
        var checkYear = (dataBaseOfStudents[i].yearOfStart <= startYear || dataBaseOfStudents[i].yearOfStart <= finishYear) && (dataBaseOfStudents[i].yearOfEnd >= startYear || dataBaseOfStudents[i].yearOfEnd >= finishYear );

        if(startYear > finishYear){
            alert("Первый год не может быть больше второго! Поменяйте значения.");
        } else if(checkYear){
            massResult.push(dataBaseOfStudents[i].name);
        }
    }
    if (massResult.length == 0){
        console.log("В заданный период не было студентов.");
    } else {
        console.log(massResult);
    }
}

function getMaxAmountOfStudents (yearStart, yearFinish){
    var massResult = [];
    if(yearStart > yearFinish){
        alert("Первый год не может быть больше второго! Поменяйте значения.");
    } else {
        for (let j = yearStart; j <= yearFinish; j++) {
            console.log(j);
            var count = 0;
            for (let i = 0; i < dataBaseOfStudents.length; i++) {
                if (dataBaseOfStudents[i].yearOfStart <= j && dataBaseOfStudents[i].yearOfEnd >= j) {
                    //console.log(dataBaseOfStudents[i]);
                    count++;
                }
            }

            console.log(count);
            massResult.push({["year"]: j, ["quantity"]: count});
        }
        if(count == 0){
            console.log("В этот период не было студентов.");
        } else{
            let max = massResult[0].quantity;
            for (let k = 0; k < massResult.length; k++) {
                if (massResult[k].quantity > max) {
                    max = massResult[k].quantity;
                }
            }
            for (let k = 0; k < massResult.length; k++) {
                if (massResult[k].quantity == max) {
                    console.log(`В ${massResult[k].year} году училось ${massResult[k].quantity} студента.`);
                }
            }
        }
    }
}

console.log("\nСписок студентов, которые учились в заданный период:");
getListOfStudents(2000, 2000);

console.log("\nПериод, в который было максимальное кол-во студентов:");
getMaxAmountOfStudents(2000, 2000);
