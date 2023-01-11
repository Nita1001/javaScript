// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book, that
// will return the following description from your book object:
// ‘The book <book name> was written by <author name> in
// the year <publishing year>’
const book = {
  author: "James Collins",
  bookName: "The Earth",
  publishYear: "2023",
  numberOfPages : 40,
  numberOdWords: 600,
};
const theBook = (bookData) => {
  return `The book "${book.bookName}" was written by ${book.author} in the year ${book.publishYear} year`;
}
let bookData = theBook();
console.log(bookData);
