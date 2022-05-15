function check(){
    let fio = document.getElementById("input-firstname");
    let phone = document.getElementById("input-telephone");
    let email = document.getElementById("input-email");
    let birthday = document.getElementById("input-birthday");

    let password = document.getElementById('input-password');
    let password_conf = document.getElementById('input-confirm');

    let city = document.getElementById("input-city");
    let street = document.getElementById("input-street");
    let house = document.getElementById("input-house");
    let apart = document.getElementById("input-apart");

    let check_mark = document.getElementById("checked"); 
    
    document.getElementById('errorMessage').innerHTML = "";

// проверка полей с личными данными

    if (fio.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле 'имя' не заполнено<br>";
    }
    if (phone.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле 'телефон' не заполнено<br>";
    }
    if (phone.value.length < 11){
    document.getElementById('errorMessage').innerHTML += "Номер телефона слишком короткий<br>";
    } else if (phone.value.length > 11) {
    document.getElementById('errorMessage').innerHTML += "Номер телефона слишком длинный<br>";
    }
    if (email.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле 'e-mail' не заполнено<br>";
    }
    if (birthday.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле 'дата рождения' не заполнено<br>";
    }

// проверка полей паролей

    if (password.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле 'пароль' не заполнено<br>";
    }
    if (password_conf.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле 'повторный пароль' не заполнено<br>";
    }
    if (password.value !== password_conf.value) {
        document.getElementById('errorMessage').innerHTML += "Пароли не совпадают<br>";
    }

// проверка полей с адресом

    if (city.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле 'город' не заполнено<br>";
    }
    if (street.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле 'улица' не заполнено<br>";
    }
    if (house.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле 'дом' не заполнено<br>";
    }
    if (apart.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле 'квартира' не заполнено<br>";
    }

// проверка checkbox

    if (check_mark.checked) {
        document.getElementById('errorMessage').innerHTML += "";
    } else {
        document.getElementById('errorMessage').innerHTML += "Нет галочки Согласен с политикой обработки персональных данных";
    }
}
