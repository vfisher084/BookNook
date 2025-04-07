import './css/Home.css';
import BookHome from '../components/Book-Home';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {

  const [books, setBooks] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get(
                //"http://localhost:3001/api/books"
                "https://booknook-server.onrender.com/api/books"
            );
            setBooks(response.data);
        })();
    }, []);

  const newBooks = books.filter((book) => [13, 14, 15, 16].includes(book.id));
  const classics = books.filter((book) => [17, 18, 19, 20].includes(book.id));
  const fiction = books.filter((book) => [21, 9, 4, 22].includes(book.id));
  const nonFiction = books.filter((book) => [23, 24, 25, 26].includes(book.id));


  return (
    <>
      <main>
            <div className="container1">
                <section className="new-and-popular">
                    <h2>New & Popular</h2>
                    <div id="home-imgs">
                        {newBooks.map((book) => (
                          <section key={book.id} className="book-home">
                            <Link to={`/bookdetails/${book.id}`}>
                              <BookHome image={book.image} />
                            </Link>
                          </section>
                        ))}
                    </div>
                    <p>This month's showcase of new releases that have been eagerly talked about and are flying off the shelves.</p>
                </section>
                <section className="classics">
                    <h2>Popular Classics</h2>
                    <div id="home-imgs">
                        {classics.map((book) => (
                          <section key={book.id} className="book-home">
                            <Link to={`/bookdetails/${book.id}`}>
                              <BookHome image={book.image} />
                            </Link>
                          </section>
                        ))}
                    </div>
                    <p>Trending classic novels that we like to consider "oldies but goodies".</p>
                </section>
                <section className="fiction">
                    <h2>Popular Fiction & Fantasy</h2>
                    <div id="home-imgs">
                        {fiction.map((book) => (
                          <section key={book.id} className="book-home">
                            <Link to={`/bookdetails/${book.id}`}>
                              <BookHome image={book.image} alt={book.title} />
                            </Link>
                          </section>
                        ))}
                    </div>
                    <p>Dive into these trending fiction and fantasy books that will take you on a journey in a whole new world...</p>
                </section>
                <section className="non-fiction">
                    <h2>Popular Non-fiction</h2>
                    <div id="home-imgs">
                    {nonFiction.map((book) => (
                          <section key={book.id} className="book-home">
                            <Link to={`/bookdetails/${book.id}`}>
                              <BookHome image={book.image} alt={book.title} />
                            </Link>
                          </section>
                        ))}
                    </div>
                    <p>If your thirst for knowledge needs to be quenched, check out some of these trending non-fiction novels.</p>
                </section>
            </div>
        </main>
    </>
  );
}

export default Home;
