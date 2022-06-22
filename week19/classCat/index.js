class Cat {
    constructor(nickname, ownerName, ownerPhone, ownerEmail) {
        this.nickname = nickname;
        this.ownerName = ownerName;
        this.ownerPhone = ownerPhone;
        this.ownerEmail = ownerEmail;
    }
}
//создаем функцию, которая возвращает массив со значениями инпутов
function getInputs() {
    return [document.querySelector('#name_pet').value, document.querySelector('#name').value, document.querySelector('#phone').value, document.querySelector('#email').value];
}
//Функция показа результата
function showResult(result){
    document.querySelector('#result').innerHTML = result;
}

let button = document.querySelector('#elem');
//при клике на кнопку массив с данными сохраняется в переменной value
button.addEventListener('click', () => {
    const value = getInputs();
});

let cat = new Cat('Феликс', 'Илья Иванович', '+7-921-123-4567', 'abc@gmail.com');
//показываем результат
showResult(result);

console.log(cat.nickname);
console.log(cat.ownerName);
console.log(cat.ownerPhone);
console.log(cat.ownerEmail);