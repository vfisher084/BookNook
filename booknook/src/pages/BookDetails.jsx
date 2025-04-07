import "./css/BookDetails.css";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function BookDetails() {

    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        (async () => {
            const response = await axios.get(
                //"http://localhost:3001/api/books"
                "https://https://booknook-server.onrender.com/api/books"
            );
            const allBooks = response.data;

            const selectedBook = allBooks.find((book) => book.id === parseInt(id));
            setBook(selectedBook);
        })();
    }, [id]);

    if(!book) {
        return <div>Loading...</div>;
    }

    console.log("book.image:", book.image);

    return(
        <>
            <main className="main-container-bd">
                <div className="container1-bd">
                    <section id="book-img-bd">
                        <img id="img-bd" src={`/${book.image}`} alt={book.title} />
                    </section>
                    <section id="book-info">
                        <h3 id="h3-bd">${book.price}</h3>
                        <p><strong>Book Title:</strong> {book.title}
                            <br/>
                            <strong>Author:</strong> {book.author}
                        </p>
                        <p>
                            <strong>Description:</strong> {book.description}
                        </p>
                    </section>
                </div>
                <div className="container2-bd">
                    <section id="r-q-f">
                        <section id="reviews">
                            <h4 id="h4-bd"><strong>Top Reviews</strong></h4>
                            {book.reviews && book.reviews.length > 0 ? (
                                book.reviews.map((review, index) => (
                                <p key={index}>{review}</p>
                                ))
                                ) : (
                                    <p>No reviews available.</p>
                            )}
                        </section>
                        <section id="quantity">
                            <h4 id="h4-bd">Quantity Available: {book.quantity}</h4>
                        </section>
                        <section id="format">
                            <h4 id="h4-bd">Available Formats: {book.format}</h4>
                        </section>
                    </section>
                    <section id="add-to-cart">
                        <h3 id="h3-bd">Add to Cart Button Here</h3>
                    </section>
                    <section id="similar-section">
                        <section id="similar-title">
                            <h4 id="h4-bd">Discover similar books & more information:</h4>
                        </section>
                        <section id="similar-books">
                        </section>
                    </section>
                </div>
            </main>
        </>
    );
}

export default BookDetails;