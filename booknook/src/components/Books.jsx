/**import {useState, useEffect} from "react";
import axios from "axios";
import BookBC from './Book-BC';



const Books = () => {
    const [books, setBooks] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    //after page loaded to asynch json retrieval
    useEffect(()=>{
        //automatically execute the async function
        (async () => {
            const response = await axios.get("https://booknook-server.onrender.com/api/books");
            setBooks(response.data);
        })();
    },[]);

    const openAddDialog = () => {
        setShowAddDialog(true);
    }

    const closeAddDialog = () => {
        console.log("I'm in the close method");
        setShowAddDialog(false);
    }

    const updateBooks = (book) => {
        setBooks((books)=>[...books, book]);

    }


    return (
    <>
        <button id="add-book" onClick={openAddDialog}>+</button>
        
        {showAddDialog?(<AddBook
            closeAddDialog={closeAddDialog}
            updateBooks={updateBooks}
        />):("")}

        <div id="all-books">
            {books.map((book) => (
                <BookBC 
                    key = {book.title}
                    _id = {book._id}
                    title = {book.title}
                    author = {book.author}
                    image = {book.image}
                />
            ))}
            
        </div>
    </>
    )
};

export default Books;
*/