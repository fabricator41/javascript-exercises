const leapYears = function (isLeapYear) {
  if (isLeapYear % 4 === 0) {
    if (isLeapYear % 100 === 0) {
      if (isLeapYear % 400 === 0) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
