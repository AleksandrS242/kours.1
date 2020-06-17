function searchNumber (min, max) {
    
    let randomNumber = Math.floor(Math.random() * (max- min + 1)) + min;
     
    cycleStart: while( true ) {
 
        let userNumber =  prompt(`Введите число от 1 до 100`);
 
        if (userNumber) {
 
            if (userNumber < randomNumber ) {
                alert(`Загаданное число больше`);
            }
            else if (userNumber > randomNumber) {
                alert(`Загаданное число меньше`);  
            }
            else if (userNumber == randomNumber)  {
                alert(`Правильно!`);
                
                if(confirm()) {
                    searchNumber (1, 100)
                }
                else {
                    break;
                }
                
            } else {
                alert('Необходимо ввести число!')
            }
 
        }
        
 
        
           
    }
 
}
 
searchNumber(1 , 100);


