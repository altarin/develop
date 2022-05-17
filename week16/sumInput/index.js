// Напишите функцию `sumInput()`, которая:
//     + Просит пользователя ввести значения, используя `prompt` и сохраняет их в массив
//     + Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена»
//     + Выводит получившийся массив в отсортированном по возрастанию виде
//     + Подсчитывает и возвращает сумму элементов массива

function sumInput() {
    let arr = [];
    while (true) {
        let digit = prompt("Введите число", 0);
        if (digit === "" || digit === null || !isFinite(digit)) break;
        arr.push(+digit);
        console.log(arr.sort());
    }
    let total = 0;
    for (let digit of arr) {
    total += digit;
    }
    return total; 
}
alert(sumInput());

