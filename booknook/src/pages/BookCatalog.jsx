import './css/BookCatalog.css';
import Book from '../components/Book';
import { Link } from "react-router-dom";

function BookCatalog() {

    const books = [
        {id: 1, title: "Fourth Wing", author: "Rebecca Yarros", image: "images/fourthwing.jpg"},
        {id: 1, title: "Fourth Wing", author: "Rebecca Yarros", image: "images/fourthwing.jpg"},
        {id: 1, title: "Fourth Wing", author: "Rebecca Yarros", image: "images/fourthwing.jpg"},
        {id: 1, title: "Fourth Wing", author: "Rebecca Yarros", image: "images/fourthwing.jpg"},
        {id: 1, title: "Fourth Wing", author: "Rebecca Yarros", image: "images/fourthwing.jpg"},
        {id: 1, title: "Fourth Wing", author: "Rebecca Yarros", image: "images/fourthwing.jpg"},
        {id: 1, title: "Fourth Wing", author: "Rebecca Yarros", image: "images/fourthwing.jpg"},
        {id: 1, title: "Fourth Wing", author: "Rebecca Yarros", image: "images/fourthwing.jpg"},
        {id: 1, title: "Fourth Wing", author: "Rebecca Yarros", image: "images/fourthwing.jpg"},
        {id: 1, title: "Fourth Wing", author: "Rebecca Yarros", image: "images/fourthwing.jpg"},
        {id: 1, title: "Fourth Wing", author: "Rebecca Yarros", image: "images/fourthwing.jpg"},
        {id: 1, title: "Fourth Wing", author: "Rebecca Yarros", image: "images/fourthwing.jpg"}
    ]

    return(
        <>
          <main class="main-container">
            <div class="container1">
                <section class="genre-menu">
                    <h4>Genre Menu Placeholder</h4>
                </section>
                <section class="price-menu">
                    <h4>Price Menu Placeholder</h4>
                </section>
                <section class="category-menu">
                    <h4>Category Menu Placeholder</h4>
                </section>
                <section class="format-menu">
                    <h4>Format Menu Placeholder</h4>
                </section>
                <section class="publication-date-menu">
                    <h4>Publication Date Menu Placeholder</h4>
                </section>
                <section class="ratings-menu">
                    <h4>Ratings Menu Placeholder</h4>
                </section>
            </div>
            <div className="container2">
                {books.map((book) => (
                    <section class="book-container">
                        <Link to={'/BookDetails/${book.id}'}>
                            <Book title={book.title} author={book.author} image={book.image} />
                        </Link>
                    </section>
                ))}
            </div>
        </main>  
        </>
    );
}

export default BookCatalog;