let money = prompt("Ваш месячный доход?");
let income = "Распродажа";
let addExpenses = prompt("Перечислите возможные расходы\n за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 200000;
let period = 10;
let expenses1 = prompt("Введите обязательную статью расходов?");
let expenses2 = prompt("Введите обязательную статью расходов?");
let amount1 = prompt("Во сколько это обойдется?");
let amount2 = prompt("Во сколько это обойдется?");

let budgetMonth = money-(amount1 - amount2);

let budgetDay = money/30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log("Период равен" + period + " месяцев. " + 
  "Цель заработать " + mission + " рублей" );

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

console.log("месячный бюджет:", budgetMonth);
console.log("дневной бюджет:", Math.floor(budgetDay));
console.log("количество месяцев до цели:", Math.ceil(mission/budgetMonth));  

if (budgetDay > 1200) {
    console.log("У вас высокий уровень дохода");
} else if (budgetDay > 600) {
    console.log("У вас средний уровень дохода");
} else if (budgetDay <600) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
} else if (budgetDay < 0) {
    console.log("Что то пошло не так");
}