// - 1. Дан массив `['js', 'css', 'html']`. Выведите на экран первый элемент

let items =  ['js', 'css', 'html'];
alert(items[0]);


// 2. Отфильтруйте массив [0, 1, false, 2, undefined, '', 3, null] от нежелательных значений, таких как false, undefined, пустые строки, ноль, null с помощью метода filter.  Ожидаемый результат: [1, 2, 3].

let values = [0, 1, false, 2, undefined, '', 3, null];
const filteredValues = values.filter(el=>el !== false && el !== '' && el !== undefined && el !== 0 && el !== null);
alert(filteredValues);


// Дан массив [[1,2], [1,2,3], [1,2,3,4]]. Найдите индекс массива, длина которого > 3.

let arr = [[1,2], [1,2,3], [1,2,3,4]];
for (let i = 0; i < arr.length; i++){
    if (arr[i].length > 3) {
        console.log(arr[i]);
    }
}
