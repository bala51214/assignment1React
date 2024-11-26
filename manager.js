

import { Books } from './books.js';


const getHighRatedBooks = () => {
    const highRatedBooks = Books.filter(book => book.rating > 4.5).map(book => book.title);
    console.log("Books with ratings higher than 4.5:", highRatedBooks);
};


const printBookDetails = () => {
    Books.forEach(({ title, author, rating, genre }) => {
        console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`);
    });
};
const getFictionBooks = () => {
    const fictionBooks = Books.filter(book => book.genre === "Fiction").map(book => book.title);
    console.log("Fiction Books:", fictionBooks);
};


const getBookAuthors = () => {
    const authors = Books.map(book => book.author);
    console.log("Authors:", authors);
};


getHighRatedBooks();
printBookDetails();
getFictionBooks();
getBookAuthors();