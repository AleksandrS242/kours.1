"use strict";

let money = +prompt("Ваш месячный доход?", 1200),
    income = "Распродажа",
    addExpenses = prompt("Перечислите возможные расходы\n за рассчитываемый период через запятую", "Статья"),
    deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 200000;
let period = 10;
let expenses1 = prompt("Введите обязательную статью расходов?", "Расх1");
let expenses2 = prompt("Введите обязательную статью расходов?", "Расх2");
let amount1 = +prompt("Во сколько это обойдется?", 1000);
let amount2 = +prompt("Во сколько это обойдется?", 2000);

let showTypeof = function (data) {
      console.log(data, typeof (data));
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

const getExpensesMonth = function (a, b) {
      return a + b;
};
let res = getExpensesMonth(amount1, amount2);
console.log("обязательные расходы:", res);

function getAccumulatedMonth() {
      console.log("Накопления за месяц: " + (money - (amount1 + amount2)));
}
getAccumulatedMonth();

let accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);

function getTargetMonth() {
      console.log("Период для цели: " + Math.ceil(mission / accumulatedMonth));
} 
getTargetMonth();

function  budgetDay() {
      console.log("Дневной бюджет: " + (accumulatedMonth / 30));
}
budgetDay();

function addExp() {
      console.log("Возможные рассходы :", addExpenses.split(', ') );
}
addExp();

function getStatusIncome() {
      console.log(" Вызов! ");
}
getStatusIncome();


// let budgetDay = money / 30;


// console.log(addExpenses.length);
// console.log("Период равен" + period + " месяцев. " +
//       "Цель заработать " + mission + " рублей");

// console.log(addExpenses.toLowerCase());
// console.log(addExpenses.split(', '));

// console.log("месячный бюджет:", budgetMonth);
// console.log("дневной бюджет:", Math.floor(budgetDay));
// console.log("всего количество месяцев до цели:", Math.ceil(mission / budgetMonth));

// if (budgetDay > 1200) {
//       console.log("У вас высокий уровень дохода");
// } else if (budgetDay > 600) {
//       console.log("У вас средний уровень дохода");
// } else if (budgetDay < 600) {
//       console.log("К сожалению у вас уровень дохода ниже среднего");
// } else if (budgetDay < 0) {
//       console.log("Что то пошло не так");
// }




