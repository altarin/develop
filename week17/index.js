function getRandom(min, max) {
  min = Math.ceil(-10);
  max = Math.floor(10);

  let total = document.getElementById('arr-total');
  let arrMin = document.getElementById('arr-min');
  let arrMax = document.getElementById('arr-max');
  let arr = [];

  arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  arr.push(Math.floor(Math.random() * (max - min + 1) + min));

for (let i = 0; i <10; i++){
    

  }
  console.log(arr);
  total.innerHTML = arr;
  // console.log(min);
  // console.log(max);
}