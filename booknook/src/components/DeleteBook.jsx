import "./css/Dialog.css";
import React, { useState } from "react";

const DeleteBook = (props) => {
    const [result, setResult] = useState("");

    const deleteBook = async() => {
        const response = await fetch(`https://booknook-server.onrender.com/api/books/${props._id}`, {
            method: "DELETE",
        });

        if(response.status === 200){
            setResult("Book deleted successfully");
            props.closeDeleteDialog();
            props.hideBook();
        }
        else {
            setResult("Sorry, we couldn't delete your book right now");
        }
    };

    return (
        <div id="delete-dialog">
      <div className="modal-content">
        <div className="modal-container">
          <span
            id="dialog-close"
            className="modal-close"
            onClick = {props.closeDeleteDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete {props.title}?</h3>
            <section>
            <button onClick={deleteBook}>Yes</button>
              <button onClick = {props.closeDeleteDialog}>No</button>            
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default DeleteBook;