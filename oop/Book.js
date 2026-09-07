//Create the Book class

class Book {
    #title;
    #author;
    #year;
    
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Title must be a non-empty string");
        }

        this.#title = value;
    }

    get author() {
        return this.#author;
    }

    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Author must be a non-empty string");
        }

        this.#author = value;
    }

    get year() {
        return this.#year;
    }

    set year(value) {
        if (!Number.isInteger(value) || value <= 0) {
            throw new Error("Year must be a positive integer");
        }

        this.#year = value;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }

    static getOldestBook(books) {
        let oldest = books[0];   
        
        for (const book of books) {
            if (book.year < oldest.year) {
                oldest = book;            
            }        
    
        }

    return oldest;
    }

}

export default Book;
