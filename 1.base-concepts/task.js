"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let disc = Math.pow(b, 2) - 4 * a * c;

  if (disc === 0) {
    arr.push(-b / (2 * a));
  }
  else if (disc > 0) {
    arr.push((-b + Math.sqrt(disc)) / (2 * a));
    arr.push((-b - Math.sqrt(disc)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = 0;

  if (isNaN(percent) === true) {
    return console.log(`Параметр percent содержит неправильное значение '${percent}'`)
  }
  else if (isNaN(contribution) === true) {
    return console.log(`Параметр contribution содержит неправильное значение '${contribution}'`)
  }
  else if (isNaN(amount) === true) {
    return console.log(`Параметр amount содержит неправильное значение '${amount}'`)
  }
  percent = Number((percent / 100) / 12);
  contribution = Number(contribution);
  amount = Number(amount);
  date = Number(date);

  let creditBody = amount - contribution
  let monthlyPayment = creditBody * (percent + (percent / (((1 + percent) ** date) - 1)))
  totalAmount = Number((monthlyPayment * date).toFixed(2))
  return totalAmount;

}