"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4 * a * c;
  if (discriminant === 0) {
    let rootOne = -b / 2 * a;
    arr.push(rootOne);
  } else if (discriminant > 0) {
    let rootOne = (-b + Math.sqrt(discriminant)) / 2 * a;
    let rootSecond = (-b - Math.sqrt(discriminant)) / 2 * a;
    arr.push(rootOne, rootSecond);
  };
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / ((Math.pow((1 + monthlyPercent), countMonths)) - 1)));
  let totalAmount = (monthlyPayment * countMonths).toFixed(2);
  return Number(totalAmount);
}