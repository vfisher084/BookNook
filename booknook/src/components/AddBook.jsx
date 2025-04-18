import "./css/AddBook.css";
import "./css/Dialog.css";
import React, { useState } from "react";

const AddBook = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const addToServer = async(event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch("https://booknook-server.onrender.com/api/books" , {
            "method": "POST",
            "body": formData,
        });

        if(response.status == 200) {
            setResult("Book added successfully!");
            event.target.reset();
            props.closeAddDialog();
            props.updateBooks(await response.json());
        }
        else {
            setResult("Error adding book. Please try again.");
        }
    };

    return (
        <div id="add-dialog">
            <div className="modal-content">
                <div className="modal-container">
                    <span id="dialog-close" className="modal-close" onClick={props.closeAddDialog}>&times;</span>
                    <form id="add-book-form" onSubmit={addToServer}>
                        <h3>Add New Book</h3>
                        <p>
                            <label htmlFor="title">Book Title:</label>
                            <input type="text" id="title" name="title" required min="3"></input>
                        </p>

                        <p>
                            <label htmlFor="author">Author:</label>
                            <input type="text" id="author" name="author" min="3" required></input>
                        </p>

                        <section className="columns">
                            <div>
                                <p id="img-prev-section">
                                    {prevSrc!=""?
                                    (<img id="img-prev" src={prevSrc}></img>):
                                    ("")
                                    }
                                </p>
                            </div>
                            <p id="img-upload">
                                <label htmlFor="img">Upload Cover Image:</label>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                            </p>
                        </section>

                        <p>
                            <button type="submit">Submit</button>
                        </p>
                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBook;