function getSum() {
    let num1 = Number( document.getElementById('firstNumber').value );
    let num2 = Number( document.getElementById('secondNumber').value );
    document.getElementById('sum').value = num1 + num2;
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
    document.getElementById('private').value = num1 / num2;
    }