//функция класс на валидацию формы
function ValidateForm () {}
ValidateForm.prototype.validateStrToSymbols = function (value, spanId) {
        let isValid = true;
        for (let i = 0; i < value.length; i++) {
            if ((value.charCodeAt(i) < 65 || value.charCodeAt(i) > 90) &&
                (value.charCodeAt(i) < 97 || value.charCodeAt(i) > 122) &&
                (value.charCodeAt(i) < 1040 || value.charCodeAt(i) > 1103) &&
                value.charCodeAt(i) !== 45 && value.charCodeAt(i) !== 32 ||
                !this.validateToUpperCase(value)) {
                document.getElementById(spanId).style.visibility = "visible";
                isValid = false;
                break;
            } else {
                document.getElementById(spanId).style.visibility = "hidden";
                isValid = true;
            }
        }
        return isValid;
};
ValidateForm.prototype.validateToUpperCase = function (value) {
    return (value.charAt(0) === value.charAt(0).toUpperCase());
};
ValidateForm.prototype.validateStringToLength = function (value, spanId) {
    let isValid = true;
        if (document.getElementById(spanId).style.visibility === "hidden" && value.length > 20) {
            document.getElementById(spanId).style.visibility = "visible";
            isValid = false;
        }
        return isValid;
};
ValidateForm.prototype.validateNumber = function (value, spanId) {
    let isValid = true;
    if (value.length < 4 || value.length > 4 || value < 0 || isNaN(value)) {
        document.getElementById(spanId).style.visibility = "visible";
        isValid = false;
    } else if (value < 1970 || value > 2025) {
        document.getElementById(spanId).style.visibility = "visible";
        isValid = false;
    } else {
        document.getElementById(spanId).style.visibility = "hidden";
        isValid = true;
    }
    return isValid;
};
ValidateForm.prototype.validateStudentAge = function (value, spanId) {
    let isValid = true;
    if (value < 0 || value > 100) {
        document.getElementById(spanId).style.visibility = "visible";
        isValid = false;
    } else {
        document.getElementById(spanId).style.visibility = "hidden";
        isValid = true;
    }
    return isValid;
};
ValidateForm.prototype.checkStartYear = function (spanId) {
    let year1 = document.getElementById("endYear");
    let year2 = document.getElementById("startYear");
    if (year1.value < year2.value) {
        document.getElementById(spanId).style.visibility = "visible";
    } else {
        document.getElementById(spanId).style.visibility = "hidden";
    }
};
//экземпляр функции класса валидации формы
let myFormValidation = new ValidateForm();
myFormValidation.validateName = function () {
    let that = this;
    document.getElementById("firstName").addEventListener('input', function (event) {
        let target = event.target;
        that.validateStrToSymbols(target.value, "message-name");
        that.validateStringToLength(target.value, "message-name");
    });
    return document.getElementById("message-name").style.visibility !== "visible";
};
myFormValidation.validateSurname = function () {
    let that = this;
   document.getElementById("lastName").addEventListener('input', function (event) {
       let target = event.target;
        that.validateStrToSymbols(target.value, "message-surname");
        that.validateStringToLength(target.value, "message-surname");
    });
   return document.getElementById("message-surname").style.visibility !== "visible";
};
myFormValidation.validateStartYear = function () {
    let that = this;
    document.getElementById("startYear").addEventListener('input', function (event) {
        let target = event.target;
        that.validateNumber(target.value, "message-sYear");
    });
    return document.getElementById("message-sYear").style.visibility !== "visible";
};
myFormValidation.validateEndYear = function () {
    let that = this;
    document.getElementById("endYear").addEventListener('input', function (event) {
        let target = event.target;
        that.validateNumber(target.value, "message-eYear");
    });
    return document.getElementById("message-eYear").style.visibility !== "visible";
};
myFormValidation.validateAge = function () {
    let that = this;
    document.getElementById("age").addEventListener('input', function (event) {
        let target = event.target;
        that.validateStudentAge(target.value, "message-age");
    });
    return document.getElementById("message-age").style.visibility !== "visible";
};
myFormValidation.validateYear = function () {
    let that = this;
    document.getElementById("endYear").addEventListener('input', function () {
        that.checkStartYear("message-checkYear");
    });
    document.getElementById("startYear").addEventListener('blur', function () {
        that.checkStartYear("message-checkYear");
    });
    return document.getElementById("message-checkYear").style.visibility !== "visible";
};
myFormValidation.checkInputs = function () {
    let that = this;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let startYear = document.getElementById("startYear").value;
    let endYear = document.getElementById("endYear").value;
    let age = document.getElementById("age").value;
    let saveBtn = document.getElementById("button_save");
    if (that.validateName() && that.validateSurname() && that.validateStartYear() &&
        that.validateEndYear() && that.validateAge() && that.validateYear() && firstName.length !== 0 &&
        lastName.length !== 0 && startYear.length !== 0 && endYear.length !== 0 && age.length !== 0) {
        saveBtn.removeAttribute('disabled');
        saveBtn.classList.remove('button_save_inactive');
        saveBtn.classList.add('button_save_active');
    } else {
        saveBtn.setAttribute('disabled', "true");
        saveBtn.classList.remove('button_save_active');
        saveBtn.classList.add('button_save_inactive');
    }
};
myFormValidation.checkCorrectnessInputs = function () {
    let that = this;
    let allInputs = document.querySelectorAll(".section__database_input input");
    for ( let i = 0; i < allInputs.length; i++) {
        allInputs[i].addEventListener('keyup', function () {
            that.checkInputs();
        });
    }
};
myFormValidation.start = function () {
    this.checkCorrectnessInputs();
};
myFormValidation.start();

//функция класс создания таблицы
function CreateTable() {}
CreateTable.prototype.init = function () {
    this.tableStudents = document.getElementById("student-table");
    this.tbody = this.tableStudents.getElementsByTagName('tbody')[0];
    this.saveBtn = document.getElementById("button_save");
    this.clearBtn = document.getElementById('button_clear');
    this.editBtn = document.getElementById('button_edit');
    this.masOfStudents = [];
    this.id = 1;
};
CreateTable.prototype.addRows = function () {
    let arrayOfInto = [];
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let startYear = document.getElementById("startYear").value;
    let endYear = document.getElementById("endYear").value;
    let age = document.getElementById("age").value;
    let editTd = '<button class="btn_edit"> ✎ </button>';
    let deleteTd ='<button class="btn_delete"> ✕ </button>';
    let studentId = this.id;
    arrayOfInto.push([studentId, firstName, lastName, startYear, endYear, age, editTd, deleteTd]);
    for (let i = 0; i <= arrayOfInto.length - 1; i++) {
        let tr = this.tbody.insertRow(-1);
        for (let j = 0; j < 8; j++) {
            let td = document.createElement('td');
            td = tr.insertCell(-1);
            td.innerHTML = arrayOfInto[i][j];
        }
    }
    let student = {
        id: studentId,
        name: firstName,
        surname: lastName,
        sYear: startYear,
        eYear: endYear,
        age: age
    };
    this.masOfStudents.push(student);
    this.id++;
    console.log(this.masOfStudents);
};
CreateTable.prototype.resetForm = function () {
    document.getElementById('student-form').reset();
    this.saveBtn.setAttribute('disabled', "true");
    this. saveBtn.classList.remove('button_save_active');
    this.saveBtn.classList.add('button_save_inactive');
};
CreateTable.prototype.deleteRows = function (btn) {
    let rows = document.getElementsByTagName('tr');
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    for (let i = 0; i < this.masOfStudents.length; i++) {
        if (this.masOfStudents[i].id === +row.cells[0].textContent) {
            this.masOfStudents.splice(i, 1);
            this.masOfStudents[i].id--;
            break;
        }
    }
    for (let i = 1; i < rows.length; i++) {
        rows[i].cells[0].innerHTML = i;
    }
    this.id--;
};
CreateTable.prototype.editRows = function (btn) {
    let row = btn.parentNode.parentNode;
    let arrOfStudents = this.masOfStudents;
    let lengthOfMas = this.masOfStudents.length;
    for (let i = 0; i < lengthOfMas; i++) {
        if (arrOfStudents[i].id === +row.rowIndex) {
            document.getElementById("firstName").value = arrOfStudents[i].name;
            document.getElementById("lastName").value = arrOfStudents[i].surname;
            document.getElementById("startYear").value = arrOfStudents[i].sYear;
            document.getElementById("endYear").value = arrOfStudents[i].eYear;
            document.getElementById("age").value = arrOfStudents[i].age;
            break;
        }
    }
    return row;
};

//экземпляр функции класса создания таблицы
let myTable = new CreateTable();
myTable.createRows = function () {
    let that = this;
    that.saveBtn.addEventListener('click', function () {
        that.addRows();
        that.resetForm();
    });
};
myTable.deleteRow = function () {
    let that = this;
    that.tableStudents.addEventListener('click', function (event) {
        let target = event.target; // где был клик?
        if (target.className !== 'btn_delete') return; // не на btn_delete тогда не интересует
        that.deleteRows(target);
    });
};
myTable.editRow = function () {
    let that = this;
    that.tableStudents.addEventListener('click', function (event) {
        let target = event.target;
        if (target.className !== 'btn_edit') return;
        let row = that.editRows(target);
        that.editBtn.onclick =  function () {
            let tr = that.tableStudents.getElementsByTagName('tr')[+row.rowIndex];
            tr.childNodes[1].innerHTML = document.getElementById("firstName").value;
            tr.childNodes[2].innerHTML = document.getElementById("lastName").value;
            tr.childNodes[3].innerHTML = document.getElementById("startYear").value;
            tr.childNodes[4].innerHTML = document.getElementById("endYear").value;
            tr.childNodes[5].innerHTML = document.getElementById("age").value;
            for (let i = 0; i < that.masOfStudents.length; i++) {
                if (that.masOfStudents[i].id === +row.cells[0].textContent) {
                    that.masOfStudents[i].name = tr.childNodes[1].textContent;
                    that.masOfStudents[i].surname = tr.childNodes[2].textContent;
                    that.masOfStudents[i].sYear = tr.childNodes[3].textContent;
                    that.masOfStudents[i].eYear = tr.childNodes[4].textContent;
                    that.masOfStudents[i].age = tr.childNodes[5].textContent;
                    break;
                }
            }
            console.log(that.masOfStudents);
        };
    });
};
myTable.resetInfo = function () {
    let that = this;
    that.clearBtn.addEventListener('click', function () {
        that.resetForm();
    });
};
myTable.drawTable = function () {
    this.init();
    this.createRows();
    this.resetInfo();
    this.deleteRow();
    this.editRow();
};
myTable.drawTable();

