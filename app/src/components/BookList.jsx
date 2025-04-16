import React, { useEffect, useState } from "react";
import "./BookList.css";
import axios from "axios"; 


//fetch the book list
const BookList = () => {
    const [books, setBooks] = useState([]); 
    const [selectedBook, setSelectedBook] = useState(null); // state to store the selected book
    const [favouriteBooks, setFavoriteBooks] = useState([]); // state to store the favorite books

useEffect(() => {
    const fetchBooks = async () => {
        try {
            const response = await axios.get("/books.json"); //fetch book data from the file
            setBooks(response.data.slice(0, 20)); //set first 20 books
        } catch (error) {
            console.error("Error fetching the books:", error);
        }
    };
    fetchBooks();
}, []);

//handle the click event
const handleReadMore = (book) => {
    setSelectedBook(book); //set the selected book
    console.log("Book selected:", book);
};

//handle the add to favorite event
const handleFavorite = (book) => {
    setFavoriteBooks((prevFavorites) => {
        const favouriteBook = [...prevFavorites, book]; //add the book to the favorite list
        return favouriteBook;
    });
    
};

const handleRemove = (book) => {
    setFavoriteBooks((prevFavorites) => {
        const favouriteBook = prevFavorites.filter((favBook) => favBook.id !== book.id); //remove the book from the favorite list
        return favouriteBook;
    });
    console.log("Book removed:", book);
}


  return (
    <div className="container">
         <div className="main-content">
         <h1>Books</h1>
         {/* detail selected book card */}
         {selectedBook && (
            <div className="selected-book-card">
            <img className="book-cover-detail" src={selectedBook.imageLink} alt="book-img"/>
            <div className="selected-book-info">
            <h2>{selectedBook.title}</h2>
            <h3>{selectedBook.author}</h3>
            <p>{selectedBook.pages} pages</p>
            <p>{selectedBook.year}</p>
            <p>{selectedBook.description}</p>
            <p>{selectedBook.language}</p>
            <a href={selectedBook.link}
            target="_blank">
            More info </a>
            </div>
            </div>
       )}

        <div className="card-container">
            {books.map((book) => (
                <div className="card" key={book.id}>
                    <h3>{book.author}</h3>
                    <h2>{book.title}</h2>
                    <p>{book.pages} pages</p>
                    <img className="book-cover" src={book.imageLink} alt="book-img"/>
                    <button className="read-more-btn"
                    onClick={() => handleReadMore(book)}
                    >Read More
                    </button>
                    <button className="fav-btn"
                    onClick={() => handleFavorite(book)}
                    >Add</button>
                </div>
            ))}
        </div>
    </div>
        {/* favourite book card */}

        <div className="favourite-books-container">
        <h1> Favourites </h1>
        {favouriteBooks.map((book) => (
            <div className="favourite-book-card" key={book.id}>
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <img className="book-cover" src={book.imageLink} alt="book-img"/>
                <button
        className="remove-btn"
        onClick={() => handleRemove(book)}
      >
        Remove
      </button>
            </div>
        ))}
        </div>
        </div>
    
  );
  
};

export default BookList;