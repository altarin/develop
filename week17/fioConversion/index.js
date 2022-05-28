function getConversionFio(){
    let str = document.getElementById('input-fio').value;
    let surname = document.getElementById('input-surname');
    let name = document.getElementById('input-name');
    let patronymic = document.getElementById('input-patronymic');

    let arr = str.split(/\s+/).map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
    
    surname.value = arr[0];
    name.value = arr[1];
    patronymic.value = arr[2];
}