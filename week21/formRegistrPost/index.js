const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = getValues();
    console.log(data);

});

function getValues() {
    const inputs = document.querySelectorAll('input');
    const data = {};

    inputs.forEach(item => {
        data[item.name] = item.value || '';
    })
return data;
}


let response = await fetch('/article/fetch/post/data', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
});

let result = await response.json();
alert(result.message);


// validation

// let errors = [];
// function checkValidity(input) {
//     let validity = input.validity;
//     if (validity.valueMissing) {
//         errors.push('Поле ' + input.placeholder + ' не заполнено');
//     }
// }

// function checkAll(){
// errors = [];
// let inputs = document.querySelectorAll('input');
//     for (let input of inputs){
//         checkValidity(input);
//     }
//     document.getElementById('errorMessage').innerHTML = errors.join('. <br>');
// }