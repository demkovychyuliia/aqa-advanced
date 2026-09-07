//Create the EBook class that extends Book and adds file format functionality

import Book from "./Book.js";

class EBook extends Book {
    #fileFormat;

    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this.#fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("File format must be a non-empty string");
        }

        this.#fileFormat = value;
    }

    printInfo() {
        console.log(
            `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Format: ${this.fileFormat}`
        );
    }

    static createEBook(book, fileFormat) {
        return new EBook(
            book.title,
            book.author,
            book.year,
            fileFormat      
        );
    }
}

export default EBook;