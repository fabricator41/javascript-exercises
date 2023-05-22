const sumAll = function (firstNumber, secondNumber) {
  let sum = 0;
  if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
    return 'ERROR';
  } else if (firstNumber < 0 || secondNumber < 0) {
    return 'ERROR';
  }
  const deneme = [firstNumber, secondNumber];
  deneme.sort((a, b) => a - b);

  for (let i = deneme[0]; i <= deneme[1]; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
