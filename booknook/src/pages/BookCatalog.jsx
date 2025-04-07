import './css/BookCatalog.css';
import BookBC from '../components/Book-BC';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function BookCatalog() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get(
                "https://booknook-server.onrender.com/api/books"
            );
            const allBooks = response.data;

            //only need books 1-12 for this page (for now at least)
            const filteredBooks = allBooks.filter(book => book.id >= 1 && book.id <= 12);
            setBooks(filteredBooks);
        })();
    }, []);

    return(
        <>
          <main className="main-container-bc">
            <div className="container1-bc">
                <section className="genre-menu">
                    <h4 id="h4-bc">Genre Menu Placeholder</h4>
                </section>
                <section className="price-menu">
                    <h4 id="h4-bc">Price Menu Placeholder</h4>
                </section>
                <section className="category-menu">
                    <h4 id="h4-bc">Category Menu Placeholder</h4>
                </section>
                <section className="format-menu">
                    <h4 id="h4-bc">Format Menu Placeholder</h4>
                </section>
                <section className="publication-date-menu">
                    <h4 id="h4-bc">Publication Date Menu Placeholder</h4>
                </section>
                <section className="ratings-menu">
                    <h4 id="h4-bc">Ratings Menu Placeholder</h4>
                </section>
            </div>
            <div className="container2-bc">
                {books.map((book) => (
                    <section key={book.id} className="book-container-bc">
                        <Link to={`/bookdetails/${book.id}`}>
                            <BookBC title={book.title} author={book.author} image={book.image} />
                        </Link>
                    </section>
                ))}
            </div>
        </main>  
        </>
    );
}

export default BookCatalog;