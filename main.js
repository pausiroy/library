//Empty array for library

let myLibrary = [];

// Object Constructor
function Book(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
}

// function for adding book to array

function addBooktoLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
    displayBooksOnPage();
}


//function to display Library array to cards
function displayBooksOnPage() {
    const books = document.querySelector(".books");

    //Remove all previously displayed cards before I loop over array
    const removeDivs = document.querySelectorAll(".card");
    for(let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }

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
// Start event listener/display form to add a new book to library
const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", displayTheForm);

function displayTheForm() {
    document.getElementById("add-book-form").style.display = "";
}

// Start event listener/display form to add a new book to library
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", intakeFormData);

// Transform form data into variables for intake

function intakeFormData() {
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Read = document.getElementById("Read").value;

    // Break out if form is incomplete
    if((Title == "") || (Author == "") || (Pages == "") || (Read == "")) {
        return;
    }

    // Call function to input the book data to array
    addBooktoLibrary(Title, Author, Pages, Read);

    // Reset form after successful submission
    document.getElementById("add-book").reset();

}   


//addBooktoLibrary("The Hobbit", "J.R.R. Tolkien", "295 Pages", "Not Read yet");
//addBooktoLibrary("The Seven Habits of Highly Effective People", "Steven Covey", "200 pages", "Read");
//addBooktoLibrary("The Hobbit", "J.R.R. Tolkien", "295 Pages", "Not Read yet");
//addBooktoLibrary("The Seven Habits of Highly Effective People", "Steven Covey", "200 pages", "Read");