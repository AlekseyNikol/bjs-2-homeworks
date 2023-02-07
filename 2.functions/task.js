function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = 0;
  //console.log(max)

  arr.forEach(arr => {
    sum += arr;
  })

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}
//---------------------------------------------------------
function summElementsWorker(...arr) {

  let sumValue;

  sumValue = arr.reduce((a, b) => a + b);

  return sumValue
   
}

function differenceMaxMinWorker(...arr) {
  let maxValue = Math.max(...arr);
  let minValue = Math.min(...arr);

  return maxValue - minValue
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sumOddElement += arr[i];
    }
    else {
      sumEvenElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement

}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }

  return sumEvenElement / countEvenElement
}
//-----------------------------------------------

function makeWork (arrOfArr, func) {

}
