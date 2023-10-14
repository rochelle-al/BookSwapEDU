import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Update = () => {
    // State to store book information
    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: "null",
        cover: "",
    });

    // React Router's navigate function to redirect to different routes
    const navigate = useNavigate();

    // Get the current location object to extract the book ID from the URL
    const location = useLocation();
    const bookId = location.pathname.split("/")[2];

    // Function to handle input changes and update the book state
    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Function to handle the "Update" button click event
    const handleClick = async e => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            // Send a PUT request to update the book by ID
            await axios.put("http://localhost:8800/books/" + bookId, book);
            // Redirect to the home page after successfully updating the book
            navigate("/");
        } catch (err) {
            console.log(err); // Log any errors to the console
        }
    }

    console.log(book); // Log the current book state to the console
    return (
        <div className='form'>
            <h1>UPDATE BOOK</h1>
            {/* Input fields for title, desc, price, and cover */}
            <input type="text" placeholder='title' onChange={handleChange} name="title" />
            <input type="text" placeholder='desc' onChange={handleChange} name="desc" />
            <input type="number" placeholder='price' onChange={handleChange} name="price" />
            <input type="text" placeholder='cover' onChange={handleChange} name="cover" />
            {/* "Update" button with a click event handler */}
            <button className="formButton" onClick={handleClick}>Update</button>
        </div>
    )
}

export default Update;
