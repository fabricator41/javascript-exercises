const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (args) {
  let total = 0;
  args.forEach((element) => {
    total += element;
  });
  return total;
};

const multiply = function (args) {
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
  let result = 1;
  if (num === 0 && num === 1) {
    return result;
  } else {
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
  }
  return result;
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
