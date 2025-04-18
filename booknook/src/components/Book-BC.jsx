import "./css/Book-BC.css";
import React, { use, useState } from "react";
import EditBook from "./EditBook";
import DeleteBook from "./DeleteBook";
import { Link } from "react-router-dom";

function BookBC({_id, title, author, image}) {
    const [book, setBook] = useState({});
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showBook, setShowBook] = useState(true);

    const openEditDialog = () => {
        setShowEditDialog(true);
    };

    const closeEditDialog = () => {
        setShowEditDialog(false);
    };

    const openDeleteDialog = () => {
        setShowDeleteDialog(true);
    };

    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
    };

    const hideBook = () => {
        setShowBook(false);
    };

    const editBook = (book) => {
        setBook(book);
    };


    return (
        <>
        {showBook?(
            <div>
                {showDeleteDialog?(
                    <DeleteBook
                    title={title}
                    _id={_id}
                    closeDeleteDialog = {closeDeleteDialog}
                    hideBook = {hideBook}
                    />):("")}

                {showEditDialog?(
                    <EditBook
                    title={title}
                    author={author}
                    image={image}
                    _id={_id}
                    closeEditDialog = {closeEditDialog}
                    editBook = {editBook}
                    />):("")}
            
            <section id="change-buttons">
                <a href="#" onClick={openEditDialog} >
                    &#9998;
                </a>
                <a href="#" onClick={openDeleteDialog} >
                    &#x2715;
                </a>
            </section>
            <Link to={`/bookdetails/${_id}`}>
                <section id="book-img-bc">
                    <img id="img-bc" src={image} alt={title} />
                </section>
                <section id="title-author-info">
                    <p>{title}<br />by {author}</p>
                </section>
            </Link>
            </div>
        ):("")}
        </>
    )
}

export default BookBC;