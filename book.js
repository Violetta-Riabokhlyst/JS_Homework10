class Book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }
}

const library = new Map();
library.set("1", new Book("The Odyssey", "Homer", -700, "Epic"));
library.set("2", new Book("1984", "George Orwell", 1949, "Dystopian"));
library.set("3", new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Classic"));
library.set("4", new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Drama"));
library.set("5", new Book("Sapiens", "Yuval Noah Harari", 2011, "History"));

const bookArray = Array.from(library);
const filteredBooks = bookArray.filter((item) => item[1].year > 2000);
const json = JSON.stringify(filteredBooks, null, 2);

console.log("Serialized JSON:");
console.log(json);

const loadedArray = JSON.parse(json);
console.log("Loaded array:");
console.log(loadedArray);
const restoredLibrary = new Map();

loadedArray.forEach((item) => {
    restoredLibrary.set(item[0], new Book(
        item[1].title,
        item[1].author,
        item[1].year,
        item[1].genre
    ));
});

console.log("Restored Map:");
console.log(restoredLibrary);

const searchISBN = "3";
if (restoredLibrary.has(searchISBN)) {
    console.log("Found book:");
    console.log(restoredLibrary.get(searchISBN));
} else {
    console.log("Book not found");
}