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

    document.getElementById('errorMessage').innerHTML = "";

    if (fio.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле имя не заполнено;";
    }
    if (phone.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле телефон не заполнено;";
    }
    if (email.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле e-mail не заполнено;";
    }
    if (birthday.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле дата рождения не заполнено;";
    }

    if (password.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле пароль не заполнено;";
    }
    if (password_conf.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле повторный пароль не заполнено;";
    }

    if (city.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле город не заполнено;";
    }
    if (street.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле улица не заполнено;";
    }
    if (house.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле дом не заполнено;";
    }
    if (apart.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле квартира не заполнено;";
    }
}