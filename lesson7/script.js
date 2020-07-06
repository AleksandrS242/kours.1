' use strict ';

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
        let addExpenses;
        do {
            addExpenses = prompt('Перечислите возможные расходы, через запятую','Кино, спорт, коммуналка, бензин');
        } while (addExpenses === null);

            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');


           let a, b;
           for (let i = 0; i < 2; i++) {
               do {
                   a = prompt('Введите обязательную статью расходов?');
               }while (a === null);
               b = +prompt('Во сколько это обойдется?');
               while (!isNumber(b) || b === 0) {
                b = +prompt('Во сколько это обойдется?');   
               }
               appData.expenses[a] = b;
           } 
           while (Object.keys(appData.expenses).length === 1) {
            alert('Укажите расходы, отличные от предыдущих!');
            a = prompt('Введите обязательную статью расходов?');
            b = +prompt('Во сколько это обойдется?');
            appData.expenses[a] = b;
           }
        },

     getExpensesMonth: function (){
        let sum = 0;
        for (let key in appData.expenses) {
            sum += +appData.expenses[key];
         }
         return sum;
         },
         
    
         getBudget: function(){
            appData.budgetMonth = appData.budget - appData.getExpensesMonth(); 
             appData.budgetDay = Math.floor(appData.budgetMonth / 30);
             return appData.budgetMonth;  
             },

         getTargetMonth: function(){
            let splitNumber = Math.ceil(appData.mission /appData.getBudget());
            if (splitNumber < 0) {
                return `Цель не будет достигнута! Расходы превышают доходы!`;
            } else {
                return `Cрок достижения цели, в месяцах: ${splitNumber}`;
            }
            // return appData.mission / appData.budgetMonth;
                 
         },

         getStatusIncome : function () {
            if (appData.budgetDay >= 0) {
                if (appData.budgetDay > 1200) {
                    return 'У вас высокий уровень дохода!';
                } else if (appData.budgetDay < 600) {
                    return 'К сожалению у вас уровень дохода ниже среднего';
                } else {
                    return 'У вас средний уровень дохода';
                }
            } else if (appData.budgetDay < 0) {
                return 'Что-то пошло не так...';
            }
        },
        
};


     appData.asking();
     appData.getExpensesMonth();
     appData.getBudget();
     appData.getTargetMonth();
     appData.getStatusIncome();



     console.log(appData);
     console.log('Бюджет на день, в рублях: ', appData.budgetDay);
     console.log('Статус Вашего дохода: ', appData.getStatusIncome(appData.budgetDay));
  
     

     let allinformation = function () {
        for(let key in appData) {
          console.log(
            "Наша программа включает в себя данные:",
            key,
            appData[key]
          );
        }
     };
        allinformation();








/*let expensesAmout = appData.getExpensesMonth();

 appData.getAccumulatedMonth = function (a, b) {
    return a - b;
};*/






     



//let accumulatedMonth = appData.getAccumulatedMonth(money, expensesAmout);
//appData.budgetDay = Math.floor(accumulatedMonth / 30);






//console.log(money, showTypeOf(money));
//console.log(appData.income, showTypeOf(appData.income));
//console.log(appData.deposit, showTypeOf(appData.deposit));
//console.log('Сумма всех обязательных расходов за месяц: ', expensesAmout);
//console.log(appData.getTargetMonth(appData.mission, accumulatedMonth));





