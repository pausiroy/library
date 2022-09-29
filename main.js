//Empty array for library

let myLibrary = [];

// Object Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
    //     return (title + " " + author + ", " + pages + read)
    // }
}

// function for adding book to array

function addBooktoLibrary() {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "by J.R.R. Tolkien", "295 pages", " not read yet")
console.log(theHobbit.info());