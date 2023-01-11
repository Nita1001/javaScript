// 1. create 2 book objects with properties: name, author, year.
// 2. create an empty object bookUtils (utils = short for utilities).
// 3. add to the bookUtils object a function getFirstPublished,
// that receives 2 books and returns the book with the
// smaller year.
// 4. add to the bookUtils object a function setNewEdition, that
// receives a book and an edition year and sets a new
// property latestEdition with the edition year, or updates an
// existing one.
// 5. add to the bookUtils object a setLanguage function, that
// receives a book and a language and sets a new property
// language with the language, or updates an existing one.
// 6. add to the bookUtils object a setTranslation function, that
// receives a book a language and a translator, and sets a
// new property of translation, which is an object that
// contains the translator and the language.
// 7. add to the bookUtils object a setPublisher function, that
// receives a book a name and location, and sets a new
// property named publisher, which is an object that contains
// the name and location.
// 8. add to the bookUtils object a function isSamePublisher,
// which receives 2 books and checks if the publisher name
// and location are identical in the 2 books.
const book1 = {
  name: 'Apple Pie', 
  author: 'Jack Draco', 
  year: '1993'
};
const book2 = {
  name: 'It was Just a Bad Dream', 
  author: 'Marc Rama', 
  year: '2005'
};
const bookUtils = {
  getFirstPublished(bookOne, bookTwo){
    return (bookOne.year > bookTwo.year) ? bookTwo.year : bookOne.year;
  },
  setNewEdition(book, year){
    book.latestEdition = year;
  },
  setLanguage(book, language){
    book.language = language;
  },
  setTranslation(book, language, translator){
    book.translation = {
      translator: translator,
      language: language
    };
  },
  setPublisher(book, name, location){
    book.publisher = {
      name: name,
      location: location
    }
  },
  isSamePublisher(book1, book2){
    return (book1.publisher.name === book2.publisher.name) && (book1.publisher.location === book2.publisher.location) ? true : false;
  }
};
console.log(bookUtils.getFirstPublished(book1, book2));
bookUtils.setNewEdition(book1, '2023');
console.log(book1.latestEdition);
bookUtils.setTranslation(book1,'English', 'Eric');
console.log(book1.translation.translator);
console.log(book1.translation.language);
bookUtils.setPublisher(book1, 'Nita', 'Israel');
bookUtils.setPublisher(book2, 'Nita', 'Israel');
console.log(bookUtils.isSamePublisher(book1, book2));