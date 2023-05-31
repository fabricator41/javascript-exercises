const palindromes = function (str) {
  const newStr = str.toLowerCase().replace(/[^a-z]/g, '');
  return newStr === newStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
