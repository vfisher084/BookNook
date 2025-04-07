import "./css/Book-Home.css";

function BookHome({image, title}) {
    return (
        <>
            <section className="book-home">
                <img id="img-home" src={image} alt={title} />
            </section>
        </>
    )
}

export default BookHome;