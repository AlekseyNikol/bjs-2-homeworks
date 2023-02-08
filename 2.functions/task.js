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

  if (arr.length == 0) {
    sumValue = 0;
  } else {
    sumValue = arr.reduce((a, b) => a + b);
  }
  return sumValue
   
}

function differenceMaxMinWorker(...arr) {
  let maxValue;
  let minValue;
  let value;

  if (arr.length == 0) {
    value = 0;
  } else {
    maxValue = Math.max(...arr);
    minValue = Math.min(...arr);
    value = maxValue - minValue;
  }
 
  return value
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
  let value = 0;

  if (arr.length == 0) {
    value
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
    value = sumEvenElement / countEvenElement
  }

  return value
}
//-----------------------------------------------

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    summElementsWorker(...arr) = arrOfArr[i];
  }

  function summElementsWorker(...arr) {

    let sumValue;

    sumValue = arr.reduce((a, b) => a + b);

    return sumValue

  }

}
