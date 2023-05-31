const getTheTitles = function (books) {
  const deneme = [];
  books.forEach((element) => {
    if (element.hasOwnProperty('title')) {
      deneme.push(element['title']);
    }
  });
  return deneme;
};

// Do not edit below this line
module.exports = getTheTitles;
