// var operator; 
// function calc() {
//     var result;
//     var num1 = Number(document.getElementById("num1").value);
//     var num2 = Number(document.getElementById("num2").value);
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2=='0') {
//             result = 'На ноль делить нельзя!';
//         } else {
//             result = num1 / num2;
//         }
//         break;
//     default:
//         result = 'выберите операцию';
//     }
//     document.getElementById("result").innerHTML = result;
// }

class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    static amount(numeric){
        return (numeric.a + numeric.b);
    }
    // static subtraction(){
    //     return this.firstNum - this.secondNum;
    // }
    // static multiplication(){
    //     return this.firstNum * this.secondNum;
    // }
    // static quotient(){
    //     return this.firstNum / this.secondNum;
    // }


}
let calculator = new Calculator('5', '7');
console.log(Calculator.amount());



