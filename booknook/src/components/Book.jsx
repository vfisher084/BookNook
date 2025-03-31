import "./css/Book.css";

function Book({title, author, image}) {
    return (
        <>
            <section id="book-img-bc">
                <img id="img-bc" src={image} alt={title} />
            </section>
            <section id="title-author-info">
                <p>{title}<br />by {author}</p>
            </section>
        </>
    )
}

export default Book;