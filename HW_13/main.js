console.log("Цепочка вызовов математических выражений: ");
let num = +prompt("Введите число:", 10);
let maths = {
    userNumber: num,
    sum: function(){
        this.userNumber++;
        return this;
    },
    minus: function(){
        this.userNumber--;
        return this;
    },
    multiply: function(){
        this.userNumber *= this.userNumber;
        return this;
    },
    showResult: function(){
        console.log(this.userNumber);
        return this;
    }
};
maths.sum().sum().minus().multiply().showResult().sum().multiply().showResult();


console.log("Исправить работу функции 3 разными способами: ");

for(var i = 0; i < 10; i++){
    (function(index){
        setTimeout(function(){
            console.log(index);
        }, 10);
    }(i));
}

for(var i = 0; i < 10; i++){
    let index = i;
    setTimeout(function(){
        console.log(index);
    }, 10);
}

for(var i = 0; i < 10; i++){
    setTimeout(function(i){
        console.log(i);
    }, 10, i);
}

for(var i = 0; i < 10; i++){
    setTimeout(function(){
        console.log(this);
    }.bind(i), 10);
}


