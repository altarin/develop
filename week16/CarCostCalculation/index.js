// let total = document.getElementById('total');
function calc(){

let brand = document.getElementById('car-brand');
let model = document.getElementById('car-model');
let year = document.getElementById('car-year');
let c_body = document.getElementById('car-coupe');
let ca_body = document.getElementById('car-sedan');
let car_body = document.getElementById('car-hatchback');
let type_mech = document.getElementById('car-type-mechanics');
let type_auto = document.getElementById('car-type-automate');
let type_benz = document.getElementById('car-type-benz');
let type_diesel = document.getElementById('car-type-diesel');

let sum = 0;

sum = parseInt(brand.value) + parseInt(model.value) + parseInt(year.value);
sum += (c_body.checked == true) ? parseInt(c_body.value) : 0;
sum += (ca_body.checked == true) ? parseInt(ca_body.value) : 0;
sum += (car_body.checked == true) ? parseInt(car_body.value) : 0;
sum += (type_mech.checked == true) ? parseInt(type_mech.value) : 0;
sum += (type_auto.checked == true) ? parseInt(type_auto.value) : 0;
sum += (type_benz.checked == true) ? parseInt(type_benz.value) : 0;
sum += (type_diesel.checked == true) ? parseInt(type_diesel.value) : 0;
total.innerHTML = sum;
}

