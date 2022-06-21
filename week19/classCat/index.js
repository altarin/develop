class Cat {
    constructor(nickname, ownerName, ownerPhone, ownerEmail) {
        this.nickname = nickname;
        this.ownerName = ownerName;
        this.ownerPhone = ownerPhone;
        this.ownerEmail = ownerEmail;
    }
}

function getInputs() {
    return [document.querySelector('#name_pet').value, document.querySelector('#name').value, document.querySelector('#phone').value, document.querySelector('#email').value];
}
let button = document.querySelector('#elem');
button.addEventListener('click', () => {
    const values = getInputs();
});
let cat = new Cat('Феликс', 'Илья Иванович', '+7-921-123-4567', 'abc@gmail.com');


console.log(cat.nickname);
console.log(cat.ownerName);
console.log(cat.ownerPhone);
console.log(cat.ownerEmail);