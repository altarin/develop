class Cat {
    constructor(nickname, ownerName, ownerPhone, ownerEmail) {
        this.nickname = nickname;
        this.ownerName = ownerName;
        this.ownerPhone = ownerPhone;
        this.ownerEmail = ownerEmail;
    }
}

let cat = new Cat('Феликс', 'Илья Иванович', '+7-921-123-4567', 'abc@gmail.com');
elem.addEventListener("click", cat); 

console.log(cat.nickname);
console.log(cat.ownerName);
console.log(cat.ownerPhone);
console.log(cat.ownerEmail);

