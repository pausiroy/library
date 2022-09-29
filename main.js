//Empty array for library

let myLibrary = [];

// Object Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//function to display Library array to cards
function displayBooksOnPage() {
    const books = document.querySelector(".books");

    //loop over library array and display cards
    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for (let key in myLibrary) {
            const para = document.createElement("p");
            para.textContent = ( `${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
}

// function for adding book to array

function addBooktoLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBooktoLibrary("The Hobbit", "J.R.R. Tolkien", "295 Pages", "Not Read yet");
addBooktoLibrary("The Seven Habits of Highly Effective People", "Steven Covey", "200 pages", "Read");
addBooktoLibrary("The Hobbit", "J.R.R. Tolkien", "295 Pages", "Not Read yet");
addBooktoLibrary("The Seven Habits of Highly Effective People", "Steven Covey", "200 pages", "Read");

displayBooksOnPage();