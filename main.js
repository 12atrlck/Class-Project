function checkOdd() {
    let result = document.getElementById('result');
        //this line access the input 
    let user = document.getElementById('inputNo');

    //this line access the value input
    let userInput = user.value;

    let numberToBeChecked = parseInt(userInput)

    if(typeof numberToBeChecked === 'number'){
       if(numberToBeChecked < 18){
       // document.getElementById().innerHTML
       result.innerHTML = 'you are not allowed to take alcohol'
       } else{
        result.innerHTML = 'you are allowed to take alcohol'
       }
    } else{
       result.innerHTML = ('You have entered an invalid character')

    }
}