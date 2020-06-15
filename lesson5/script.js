"use strict";

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}



let money,
    income = "Распродажа",
    addExpenses = prompt("Перечислите возможные расходы\n за рассчитываемый период через запятую", "Статья"),
    deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 200000;
let period = 10;

let start = function() {
    money = prompt("Ваш месячный доход?");


    while (!isNumber(money)) {
        money = prompt("Ваш месячный доход?");
    }
};

start();

let showTypeof = function (data) {
      console.log(data, typeof (data));
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let expenses = [];

let getExpensesMonth = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        
       
            expenses[i] = prompt("Введите обязательную статью расходов?", "Расх1");
       
            sum += +prompt("Во сколько это обойдется?");
    }
    console.log(expenses);
    return sum;
};


get expensesAmount = getExpensesMonth();

console.log("обязательные расходы:" + expensesAmount);

let getAccumulatedMonth = function() {
    return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function() {


    return mission / accumulatedMonth
};

let budgetDay = accumulatedMonth / 30;


console.log("Цель будет достигнута за " + Math.ceil(getTargetMonth) + 'месяца');



let getStatusIncome = function() {
    
if (budgetDay > 1200) {
      console.log("У вас высокий уровень дохода");
 } else if (budgetDay > 600) {
       console.log("У вас средний уровень дохода");
 } else if (budgetDay < 600) {
       console.log("К сожалению у вас уровень дохода ниже среднего");
 } else if (budgetDay < 0) {
       console.log("Что то пошло не так");
 }
};
console.log(getStatusIncome());