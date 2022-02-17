//Поле в котором выводядтся вычисления
let input = document.querySelector('.content__computing');

//Поле в котором выводится результат
let result = document.querySelector('.content__result');

//Вставить символ
function insert(num) {
     if (input.textContent == 0) {
         input.textContent = "";
        input.textContent += num;
     } else
        input.textContent += num;
}

//Очистить все поле
function clean() {
    input.textContent = "0";
    result.textContent = "";
}

//Удалить символ
function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent === 0) {
        input.textContent = "0";
    }
}

  //Посчитать выражение
function equal() {
    let exp = input.textContent;
    result.textContent = eval(exp);
   
}   







