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
          <main className="main-container-bc">
            <div className="container1-bc">
                <section className="genre-menu">
                    <h4>Genre Menu Placeholder</h4>
                </section>
                <section className="price-menu">
                    <h4>Price Menu Placeholder</h4>
                </section>
                <section className="category-menu">
                    <h4>Category Menu Placeholder</h4>
                </section>
                <section className="format-menu">
                    <h4>Format Menu Placeholder</h4>
                </section>
                <section className="publication-date-menu">
                    <h4>Publication Date Menu Placeholder</h4>
                </section>
                <section className="ratings-menu">
                    <h4>Ratings Menu Placeholder</h4>
                </section>
            </div>
            <div className="container2-bc">
                {books.map((book) => (
                    <section key={book.id} className="book-container-bc">
                        <Link to={`/bookdetails/${book.id}`}>
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