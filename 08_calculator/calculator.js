const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (...args) {
  let total = 0;
  args.forEach((element) => {
    total += element;
  });
  return total;
};

const multiply = function (...args) {
  let total = 1;
  args.forEach((element) => {
    total = total * element;
  });
  return total;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  let total = 1;
  if (num === 1 && num === 0) {
    return total;
  } else {
    for (let i = 1; i <= num; i++) {
      total *= i;
    }
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
