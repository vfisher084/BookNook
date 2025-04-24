import "./css/Dialog.css";
import React, { useState } from "react";

const EditBook = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    console.log("EditBook received _id:", props._id);
    
    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const onSubmit = async(event)=>{
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch(`https://booknook-server.onrender.com/api/books/${props._id}` , {
            method:"PUT",
            body: formData,
        });

        if(response.status === 200){
            setResult("Book edited successfully");
            event.target.reset();
            props.closeEditDialog();
            const updatedBook = await response.json();
            props.editBook(updatedBook);
            props.editBookInCatalog(updatedBook);
        }
        else{
            setResult("Error editing book. Please try again.");
        }
    };

    return (
        <div id="edit-dialog">
      <div className="modal-content">
        <div className="modal-container">
          <span
            id="dialog-close"
            className="modal-close"
            onClick={props.closeEditDialog}
          >
            &times;
          </span>
          <form id="edit-book-form" onSubmit={onSubmit}>
            <h3>Edit Book</h3>
            <p>
              <label htmlFor="title">Book Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={props.title}
                required
              />
            </p>
            <p>
              <label htmlFor="author">Author:</label>
              <input
                type="text"
                id="author"
                name="author"
                defaultValue={props.author}
                required
              />
            </p>
            <section className="columns">
                    <div>
                        <p id="img-prev-section">
                            {prevSrc!==""?
                            (<img id="img-prev" src={prevSrc}></img>):
                            ("")
                            }
                        </p>
                    </div>
                    <p id="img-upload">
                        <label htmlFor="img">Upload Image:</label>
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

export default EditBook;