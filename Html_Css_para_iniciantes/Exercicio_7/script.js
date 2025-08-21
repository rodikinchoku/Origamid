// function book(name, year, author) {
//   const UpperName = name.toUpperCase();
//   const totalYears = 2050 - year;
//   const phrase = name + ' por ' + author;

//   const returnBook = {
//     name: UpperName,
//     totalYears,
//     phrase
//   };

//   return returnBook;
// }

function book(name, year, author) {
  return {
    name: name.toUpperCase(),
    totalYears: 2050 - year,
    phrase: name + " por " + author,
  };
}

const test = book("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(test);
