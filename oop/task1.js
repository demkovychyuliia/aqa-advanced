//Create Book and EBook instances and test their methods

import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new Book(
    "Harry Potter and the Philosopher's Stone",
    "J. K. Rowling",
    1997
);

const book2 = new Book(
    "The Lord of the Rings",
    "J. R. R. Tolkien",
    1954
);

const book3 = new Book(
    "The Hobbit",
    "J. R. R. Tolkien",
    1937
);

book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook1 = new EBook(
    "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    "C. S. Lewis",
    1950,
    "PDF"
);

ebook1.printInfo();

//Test getters

console.log(book1.title);
console.log(book1.author);
console.log(book1.year);

console.log(ebook1.title);
console.log(ebook1.author);
console.log(ebook1.year);
console.log(ebook1.fileFormat);

//Test setters

book1.title = "The Hunger Games";
book1.year = 2008;

ebook1.fileFormat = "EPUB";

console.log(book1.title);
console.log(book1.year);
console.log(ebook1.fileFormat);

//Test static method

const books = [book1, book2, book3, ebook1];

const oldestBook = Book.getOldestBook(books);

oldestBook.printInfo();

//Create EBook from Book

const ebook2 = EBook.createEBook(book2, "PDF");

ebook2.printInfo();