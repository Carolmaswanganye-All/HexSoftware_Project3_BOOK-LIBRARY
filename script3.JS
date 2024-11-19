// Book Array to Store Book Details
let books = [];
let borrowingHistory = [];

// DOM Elements
const bookForm = document.getElementById("book-form");
const searchBar = document.getElementById("search-bar");
const bookList = document.getElementById("book-list");
const historyList = document.getElementById("history-list");

// Add Book
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;

  const newBook = { title, author, category, id: Date.now() };
  books.push(newBook);

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";

  updateBookList();
  alert("Book added successfully!");
});

// Search Books
searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
  );
  updateBookList(filteredBooks);
});

// Update Book List
function updateBookList(filteredBooks = books) {
  bookList.innerHTML = "";
  filteredBooks.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author} - [${book.category}]`;
    li.addEventListener("click", () => borrowBook(book));
    bookList.appendChild(li);
  });
}

// Borrow Book
function borrowBook(book) {
  const record = `Borrowed "${book.title}" by ${book.author}`;
  borrowingHistory.push(record);
  updateHistory();
}

// Update Borrowing History
function updateHistory() {
  historyList.innerHTML = "";
  borrowingHistory.forEach((record) => {
    const li = document.createElement("li");
    li.textContent = record;
    historyList.appendChild(li);
  });
}
