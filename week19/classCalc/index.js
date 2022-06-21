class Calculator {

    static amount(first, second){
        return first + second;
    }
    static subtraction(){
        return first - second;
    }
    static multiplication(){
        return first * second;
    }
    static quotient(){
        return first / second;
    }
}

//Глобальная переменная, которая хранит значение выбранной операции
let currentOperation = "amount";
// let currentOperationS = "subtraction";

//Создаем функцию, которая будет возвращать массив со значениями инпута.
function getNumbers() {
    return [Number(document.querySelector('#num1').value), Number(document.querySelector('#num2').value)];
}
//Функция показа результата
function showResult(result){
    document.querySelector('#result').innerHTML = result;
}

const buttons = document.querySelectorAll('.operator'),
    buttonResult = document.querySelector('#calcul');

//Прикрепляем события на нажатие кнопок операций
buttons.forEach(button => {
    button.addEventListener('click', e => {
//выясняем, какая операция назначена на кнопку через дата-атрибут и добавляем ее в глобальную переменную
        currentOperation = e.target.dataset.operation;
        // currentOperationS = e.target.dataset.operation; 
    });
});

//событие на кнопке 
buttonResult.addEventListener('click', () => {
    const values = getNumbers(); //берем числа [2,2]
//используем метод класса и переменную как ключ, деструктурируем массив со значениями
    const result = Calculator[currentOperation](...values);
    // result = Calculator[currentOperationS](...values);

//показываем результат
    showResult(result);
});


