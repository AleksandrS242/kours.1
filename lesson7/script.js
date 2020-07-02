'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function () {
        do {
            money = prompt('Ваш месячный доход?', '');
        }
        while (!isNumber(money));
    };
start();



let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 100000,
    period: 6,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы, через запятую','Кино, спорт, коммуналка, бензин');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');


            let amounts = [];


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
    }
};

console.log(appData);



// let expenses1 = prompt('Введите обязательную статью расходов?', 'садик'),
//     amount1 = +prompt('Во сколько это обойдется?'),
//     expenses2 = prompt('Введите обязательную статью расходов?', 'Бензин'),
//     amount2 = +prompt('Во сколько это обойдется?'),

//let amounts = [];


/*const showTypeOf = function (data) {
   return typeof data;
};*/

/*appData.getExpensesMonth = function () {
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
    } 
};*/

/*let expensesAmout = appData.getExpensesMonth();

 appData.getAccumulatedMonth = function (a, b) {
    return a - b;
};*/

appData.getExpensesMonth = function (){
    for (let key in appData.expenses) {
        appData.expensesMonth += +appData.expenses[key];
     }
     };
     

     appData.Budget = function(){
        appData.budgetMonth = appData.budget - appData.expensesMonth; 
         appData.budgetDay = Math.floor(appData.budgetMonth / 30);
           
         },
     appData.TargetMonth = function(){
         return appData.mission / appData.budgetMonth;
             
     },




     appData.asking();
     appData.Budget();
     appData.getExpensesMonth();



//let accumulatedMonth = appData.getAccumulatedMonth(money, expensesAmout);
//appData.budgetDay = Math.floor(accumulatedMonth / 30);



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


let allinformation = function () {
    for(let key in appData) {
      console.log(
        "Наша программа включает в себя данные:",
        key,
        appData[key]
      );

      }

      allinformation();
//console.log(money, showTypeOf(money));
//console.log(appData.income, showTypeOf(appData.income));
//console.log(appData.deposit, showTypeOf(appData.deposit));
//console.log('Сумма всех обязательных расходов за месяц: ', expensesAmout);
//console.log(appData.getTargetMonth(appData.mission, accumulatedMonth));


console.log('Бюджет на день, в рублях: ', appData.budgetDay);
console.log('Статус Вашего дохода: ', appData.getStatusIncome(appData.budgetDay));




// Функция расчета срока достижения цели
appData.getTargetMonth = function (a, b) {
    let splitNumber = Math.ceil(a / b);
    if (splitNumber < 0) {
        return `Цель не будет достигнута! Расходы превышают доходы!`;
    } else {
        return `Cрок достижения цели, в месяцах: ${splitNumber}`;
    }
};

};