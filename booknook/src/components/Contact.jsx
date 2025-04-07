import "./css/Contact.css";
import "../pages/css/AboutUs.css";
import React from "react";
import {useState} from "react";

function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "42e8a5d8-0021-40b7-ae59-b0395aa69be3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
        <section id="contact-us">
        <h3><strong>Contact Us!</strong></h3>
      <form id="form" onSubmit={onSubmit}>
        <p id="enter-name">
            Name:
            <input type="text" name="name" required/>
        </p>
        <p id="enter-email">
            Email:
            <input type="email" name="email" required/>
        </p>
        
        <textarea id="textbox" name="message" required></textarea>

        <button id="submit-btn" type="submit">Submit Form</button>

      </form>
      <span>{result}</span>
      </section>
  );
}

export default Contact;