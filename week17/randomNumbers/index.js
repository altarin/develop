function getRandom(min, max) {
  min = Math.ceil(-10);
  max = Math.floor(10);

  let total = document.getElementById('arr-total');
  let arrMin = document.getElementById('arr-min');
  let arrMax = document.getElementById('arr-max');
  let arrAverage = document.getElementById('arr-average');
  let arrSum = document.getElementById('arr-sum');
  let arrWork = document.getElementById('arr-work');
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

  let minNumber = Math.min.apply(null, arr);
  let maxNumber = Math.max.apply(null, arr);

  let sum = 0;
  let productOfNumber = 1;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    productOfNumber = productOfNumber * arr[i];
  }
  
  let averNum = sum / arr.length;

  total.innerHTML = arr;
  arrMin.innerHTML = minNumber;
  arrMax.innerHTML = maxNumber;
  arrAverage.innerHTML = averNum;
  arrSum.innerHTML = sum;
  arrWork.innerHTML = productOfNumber;
}