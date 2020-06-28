'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    income = 'Фриланс',
    //addExpenses = prompt('Перечислите возможные расходы, через запятую','Кино, спорт, коммуналка, бензин'),
    //deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 1000000, //Копим
    period = 6; //Период

// let expenses1 = prompt('Введите обязательную статью расходов?', 'садик'),
//     amount1 = +prompt('Во сколько это обойдется?'),
//     expenses2 = prompt('Введите обязательную статью расходов?', 'Бензин'),
//     amount2 = +prompt('Во сколько это обойдется?'),
let amounts = [];

let start = function () {
    do {
        money = prompt('Ваш месячный доход?', '');
    }
    while (!isNumber(money));
};
start();


const getExpensesMonth = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {

        amounts[i] = prompt('Введите обязательную статью расходов?');
        let checkPrompt = prompt('Во сколько это обойдется?');

        while (!isNumber(checkPrompt)) {
            checkPrompt = prompt('Во сколько это обойдется?');
        }
        sum += +checkPrompt;
    }
    return sum;
};

let appData = {
    budget: money,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
};
console.log(appData);

let addExpenses;
          addExpenses = prompt('Перечислите возможные расходы, через запятую','Кино, спорт, коммуналка, бензин');
          appData.addExpenses = addExpenses.toLowerCase().split(', ');
          appData.deposit = confirm('Есть ли у вас депозит в банке?');
          console.log('возможные расходы за месяц: ', addExpenses.toLowerCase().split(', '));


let expensesAmout = getExpensesMonth();

appData.getExpensesMonth = function() {
    console.log('Сумма всех обязательных расходов за месяц: ', expensesAmout);
};
appData.getExpensesMonth();




appData.getAccumulatedMonth = function (a, b) {
    return a - b;
};
appData.getAccumulatedMonth();

let accumulatedMonth = appData.getAccumulatedMonth(money, expensesAmout);


// Функция расчета срока достижения цели
appData.getTargetMonth = function (a, b) {
    let splitNumber = Math.ceil(a / b);
    if (splitNumber < 0) {
        return `Цель не будет достигнута! Расходы превышают доходы!`;
    } else {
        return `Cрок достижения цели, в месяцах: ${splitNumber}`;
    }
};
console.log(appData.getTargetMonth(mission, accumulatedMonth));
appData.getTargetMonth();



let budgetDay = Math.floor(accumulatedMonth / 30);
appData.budgetDay = function() {
    console.log('Бюджет на день, в рублях: ', budgetDay);
};
appData.budgetDay();


appData.getStatusIncome = function (a) {
    if (a >= 0) {
        if (a > 1200) {
            return 'У вас высокий уровень дохода!';
        } else if (a < 600) {
            return 'К сожалению у вас уровень дохода ниже среднего';
        } else {
            return 'У вас средний уровень дохода';
        }
    } else if (a < 0) {
        return 'Что-то пошло не так...';
    }
};
console.log('Статус Вашего дохода: ', appData.getStatusIncome(budgetDay));
appData.getStatusIncome();



//console.log('Сумма всех обязательных расходов за месяц: ', expensesAmout);
//console.log('возможные расходы за месяц: ', addExpenses.toLowerCase().split(', '));
//console.log(getTargetMonth(mission, accumulatedMonth));
//console.log('Бюджет на день, в рублях: ', budgetDay);
//console.log('Статус Вашего дохода: ', getStatusIncome(budgetDay));

