//Empty array for library

let myLibrary = [];

// Class Object
class Book {
   constructor (Title, Author, Pages, Read){
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
   } 
    
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

    //Remove all previously displayed DOM cards
    const removeDivs = document.querySelectorAll(".card");
    for (let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }

    //loop over library array and display cards
    let index = 0;
    myLibrary.forEach(myLibrarys => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);

        //Create remove book button and add class attribute for each array
        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("remove-book-button");
        removeBookButton.textContent="Remove From Library";

        //Link the data attribute of the remove button to the array and card
        removeBookButton.dataset.linkedArray = index;
        card.appendChild(removeBookButton)

        //Start event listener/ remove array item from array and card from parent div via data link
        removeBookButton.addEventListener("click", removeBookFromLibrary);

        function removeBookFromLibrary() {
            let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
            myLibrary.splice(parseInt(retrieveBookToRemove), 1);
            card.remove();
            displayBooksOnPage();
        }


        for (let key in myLibrarys) {
            const para = document.createElement("p");
            para.textContent = ( `${key}: ${myLibrarys[key]}`);
            card.appendChild(para);
        }

        index++
    });
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
    document.getElementById('add-book').reset();

}   

