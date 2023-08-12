let myLibrary = [];

let cardCounter = 1
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

function removeBook(event) {
    const card = event.target.closest('.bookCard')
    console.log(card)
    if (card) {
        const cardId = card.classList[1];
        const cardIndex = myLibrary.findIndex(book => book.bookId === cardId)
        if (cardIndex !== -1) {
            myLibrary.splice(cardIndex, 1)
            card.remove()
        }
    }
}

function addBookToLibrary() {
    const newBook = {
        title: titleInput.value,
        author: authorInput.value,
        genre: genreInput.value,
        bookId: `bookCard-${cardCounter}`
    }
    if (!isBookInLibrary(newBook)) {
        myLibrary.push(newBook)
        displayBook()
    } else {
        console.log('Book already exists in the library')
    }
}

function displayBook() {
    const bookCard = document.createElement('div')
    const titleText = document.createElement('h1')
    const authorText = document.createElement('p')
    const genreText = document.createElement('p')
    const divider = document.createElement('hr')
    const removeBtn = document.createElement('button')
    const readBtn = document.createElement('button')
    bookCard.classList.add('bookCard')
    bookCard.classList.add(`bookCard-${cardCounter}`)
    cardCounter++
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
    removeBtn.addEventListener('click', removeBook)
    bookCard.appendChild(titleText)
    bookCard.appendChild(divider)
    bookCard.appendChild(authorText)
    bookCard.appendChild(genreText)
    bookCard.appendChild(readBtn)
    bookCard.appendChild(removeBtn)
    myShelf.appendChild(bookCard)
}

// function displayAllBooks() {
//     myLibrary.forEach(book => {
//         cardCounter++
//         const bookCard = document.createElement('div')
//         const titleText = document.createElement('h1')
//         const authorText = document.createElement('p')
//         const genreText = document.createElement('p')
//         const divider = document.createElement('hr')
//         const removeBtn = document.createElement('button')
//         const readBtn = document.createElement('button')
//         bookCard.classList.add('bookCard')
//         bookCard.classList.add(`bookCard-${cardCounter}`)
//         titleText.textContent = `${book.title}`
//         titleText.classList.add('titleText')
//         authorText.textContent = `${book.author}`
//         authorText.classList.add('authorText')
//         genreText.textContent = `${book.genre}`
//         genreText.classList.add('genreText')
//         readBtn.textContent = 'Read'
//         readBtn.classList.add('readBtn')
//         readBtn.addEventListener('click', toggleReadStatus)
//         removeBtn.textContent = 'Remove from library'
//         removeBtn.classList.add('removeBtn')
//         removeBtn.addEventListener('click', removeBook)
//         bookCard.appendChild(titleText)
//         bookCard.appendChild(divider)
//         bookCard.appendChild(authorText)
//         bookCard.appendChild(genreText)
//         bookCard.appendChild(readBtn)
//         bookCard.appendChild(removeBtn)
//         myShelf.appendChild(bookCard)
//     })
// }





