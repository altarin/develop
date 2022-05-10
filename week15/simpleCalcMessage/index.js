var a = document.getElementById('firstNumber').value;
var b = document.getElementById('secondNumber').value;

function getSum(a,b) {
    
    // let num1 = Number( document.getElementById('firstNumber').value );
    // let num2 = Number( document.getElementById('secondNumber').value );
    document.getElementById('sum') = a + b;
    }

function getDifference(){
    let num1 = Number( document.getElementById('firstNumber').value );
    let num2 = Number( document.getElementById('secondNumber').value );
    document.getElementById('difference').value = num1 - num2;
    }

function getWork(){
    let num1 = Number( document.getElementById('firstNumber').value );
    let num2 = Number( document.getElementById('secondNumber').value );
    document.getElementById('work').value = num1 * num2;
    }

function getPrivate(){

    let num1 = Number( document.getElementById('firstNumber').value );
    let num2 = Number( document.getElementById('secondNumber').value );

    if (num2=='0'){
        alert('На ноль делить нельзя!');
    }

    document.getElementById('private').value = num1 / num2;
    }