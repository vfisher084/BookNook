import {useState, useEffect} from "react";
import axios from "axios";
import BookBC from './Book-BC';
import BookHome from './Book-Home';


const Books = () => {
    const [books, setBooks] = useState([]);

    //after page loaded to asynch json retrieval
    useEffect(()=>{
        //automatically execute the async function
        (async () => {
            const response = await axios.get("http://localhost:3001/api/books");
            setBooks(response.data);
        })();
    },[]);


    return (
        <div id="all-books">
            {books.map((book) => (
                <Books 
                    id = {book.id}
                    isbn = {book.isbn}
                    title = {book.title}
                    author = {book.author}
                    description = {book.description}
                    image = {book.image}
                    price = {book.price}
                    format = {book.format}
                    genre = {book.genre}
                    category = {book.category}
                    year = {book.year}
                    reviews = {book.reviews}
                    rating = {book.rating}
                    quantity = {book.quantity}
                />
            ))}
            
        </div>
    )
};

export default Books;