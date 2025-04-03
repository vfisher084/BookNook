import "./css/Book-Home.css";
import { Link } from "react-router-dom";

function BookHome({id, image}) {
    return (
        <>
            <section className="book-home">
                <Link to={`/bookdetails/${id}`}>
                    <img id="img-home" src={image} />
                </Link>
            </section>
        </>
    )
}

export default BookHome;