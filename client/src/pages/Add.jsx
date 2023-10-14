import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    // State to store book information
    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: "null",
        cover: "",
    });

    // React Router's navigate function to redirect to different routes
    const navigate = useNavigate()

    // Function to handle input changes and update the book state
    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Function to handle the "Add" button click event
    const handleClick = async e => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            // Send a POST request to add a new book
            await axios.post("http://localhost:8800/books", book);
            // Redirect to the home page after successfully adding the book
            navigate("/");
        } catch (err) {
            console.log(err); // Log any errors to the console
        }
    }

    console.log(book); // Log the current book state to the console
    return (
        <div className='form'>
            <h1>ADD NEW BOOK</h1>
            {/* Input fields for title, desc, price, and cover */}
            <input type="text" placeholder='title' onChange={handleChange} name="title" />
            <input type="text" placeholder='desc' onChange={handleChange} name="desc" />
            <input type="number" placeholder='price' onChange={handleChange} name="price" />
            <input type="text" placeholder='cover' onChange={handleChange} name="cover" />
            {/* "Add" button with a click event handler */}
            <button className="formButton" onClick={handleClick}>Add</button>
        </div>
    )
}

export default Add;
