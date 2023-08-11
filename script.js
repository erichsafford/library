let myLibrary = [
    {title: "1984", author: "George Orwell", genre: "Science Fiction"},
    {title: "Dune", author: "Frank Herbert", genre: "Science Fiction"},
    {title: "The Fellowship of the Ring", author:"J.R.R. Tolkien", genre: "Fantasy"},
    {title: "Practical Magic", author: "Alice Hoffman", genre: "Magical Realism"},
    {title: "Jurassic Park", author: "Michael Crichton", genre: "Science Fiction"},
];

let cardCounter = 0
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const genreInput = document.querySelector('#genre')
const submitBtn = document.querySelector('#submitButton')
const showBooksBtn = document.querySelector('#showAll')
const myShelf = document.querySelector('.myShelf')
const removeBtn = document.querySelectorAll('.removeBtn')

submitBtn.addEventListener('click', () => {
    addBookToLibrary()
})

function Book() {
    // the constructor
}

function isBookInLibrary(newBook) {
    for (const book of myLibrary) {
        if (
            book.title === newBook.title &&
            book.author === newBook.author &&
            book.genre === newBook.genre
        ) {
            return true
        }
    }
    return false
}

function addBookToLibrary() {
    const newBook = {
        title: titleInput.value,
        author: authorInput.value,
        genre: genreInput.value
    }
    if (!isBookInLibrary(newBook)) {
        myLibrary.push(newBook)
        displayBook()
    } else {
        console.log('Book already exists in the library')
    }
}

function displayBook() {
    cardCounter++
    const bookCard = document.createElement('div')
    const titleText = document.createElement('h1')
    const authorText = document.createElement('p')
    const genreText = document.createElement('p')
    const divider = document.createElement('hr')
    const removeBtn = document.createElement('button')
    const readBtn = document.createElement('button')
    bookCard.classList.add('bookCard')
    bookCard.classList.add(`bookCard-${cardCounter}`)
    titleText.textContent = `${myLibrary[myLibrary.length - 1].title}`
    titleText.classList.add('titleText')
    authorText.textContent = `${myLibrary[myLibrary.length -1].author}`
    authorText.classList.add('authorText')
    genreText.textContent = `${myLibrary[myLibrary.length -1].genre}`
    genreText.classList.add('genreText')
    readBtn.textContent = 'Read'
    readBtn.classList.add('readBtn')
    removeBtn.textContent = 'Remove from library'
    removeBtn.classList.add('removeBtn')
    readBtn.addEventListener('click', toggleReadStatus)
    bookCard.appendChild(titleText)
    bookCard.appendChild(divider)
    bookCard.appendChild(authorText)
    bookCard.appendChild(genreText)
    bookCard.appendChild(readBtn)
    bookCard.appendChild(removeBtn)
    myShelf.appendChild(bookCard)
}

function displayAllBooks() {
    myLibrary.forEach(book => {
        cardCounter++
        const bookCard = document.createElement('div')
        const titleText = document.createElement('h1')
        const authorText = document.createElement('p')
        const genreText = document.createElement('p')
        const divider = document.createElement('hr')
        const removeBtn = document.createElement('button')
        const readBtn = document.createElement('button')
        bookCard.classList.add('bookCard')
        bookCard.classList.add(`bookCard-${cardCounter}`)
        titleText.textContent = `${book.title}`
        titleText.classList.add('titleText')
        authorText.textContent = `${book.author}`
        authorText.classList.add('authorText')
        genreText.textContent = `${book.genre}`
        genreText.classList.add('genreText')
        readBtn.textContent = 'Read'
        readBtn.classList.add('readBtn')
        readBtn.addEventListener('click', toggleReadStatus)
        removeBtn.textContent = 'Remove from library'
        removeBtn.classList.add('removeBtn')
        bookCard.appendChild(titleText)
        bookCard.appendChild(divider)
        bookCard.appendChild(authorText)
        bookCard.appendChild(genreText)
        bookCard.appendChild(readBtn)
        bookCard.appendChild(removeBtn)
        myShelf.appendChild(bookCard)
    })
}

function toggleReadStatus(event) {
    const card = event.target.closest('.bookCard')
    let cardId
    if (card) {
        cardId = card.classList[1];
    }
    if (cardId) {
        const clickedCard = document.querySelector(`.${cardId}`)
        clickedCard.classList.toggle('yesReadStatus')
    }
}

displayAllBooks()



