let buttonCreate = document.getElementById("button");
let tableParent = document.getElementById("tables");
let divTable = document.createElement("div");
divTable.className = "divTable__table";

buttonCreate.addEventListener('click', checkInput);

function checkInput() {
    let firstInput = document.getElementById("rows").value;
    let secondInput = document.getElementById("columns").value;
    let warning = "<p class='divTable__p_warning'>";

    if (+firstInput > 10 || +secondInput > 10) {
        warning  += "Количество строк/столбцов превышает допустимое число! Количество строк/столбцов может быть от 1 до 10. Повторите ввод.";
        warning +="</p>";
        divTable.innerHTML = warning;
        tableParent.appendChild(divTable);
    } else if (firstInput === "" || secondInput === "") {
        warning+= "Вы не ввели количество строк/столбцов! Количество строк/столбцов может быть от 1 до 10. Повторите ввод.";
        warning +="</p>";
        divTable.innerHTML = warning;
        tableParent.appendChild(divTable);
    } else {
        addTable();
    }
}
function addTable() {
    let table =  "<table border='1' width='75%' class='divTable__table_table'>";
    let rows = +document.getElementById("rows").value;
    let columns = +document.getElementById("columns").value;
    for(let i = 0; i < rows; i++) {
        table += "<tr>";
        for (let j = 0; j < columns; j++) {
            table += "<td align='center' width = '75' height ='20' title='"+"Row "+ i + ", cell " + j +"'></td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    divTable.innerHTML = table;
    tableParent.appendChild(divTable);
}





