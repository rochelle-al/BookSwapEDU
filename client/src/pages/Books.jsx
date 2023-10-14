import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import bookImage from '../images/bookImage.png';

const Books = () => {
    // State to store the list of books and the search query
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Use an effect to fetch all books when the component mounts
    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllBooks();
    }, []);

    // Function to handle the deletion of a book by its ID
    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/books/" + id);
            window.location.reload(); // Reload the page after deleting a book
        } catch (err) {
            console.log(err);
        }
    }

    // Function to convert URLs in text to clickable links
    const textWithLinks = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, (url) => (
            `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
        ));
    };

    // Filter books based on the search query
    const filteredBooks = books.filter(book => {
        return book.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div>
            {/* Add the search bar at the top */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <h1>BookSwapEDU</h1>
            <table className="custom-font">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBooks.map((book, index) => (
                        <tr key={book.id} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff' }}>
                            <td><img src={bookImage} alt="Default" /></td>
                            <td>{book.title}</td>
                            <td style={{ textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: textWithLinks(book.desc) }}></td>
                            <td>{book.price}</td>
                            <td>
                                <button className='update'>
                                    <Link to={`/update/${book.id}`}>Update</Link>
                                </button>
                                <button className='download'>
                                    <a href={`http://localhost:8800/books/download/${book.id}`} target="_blank" rel="noopener noreferrer">Download</a>
                                </button>
                                <button className='delete' onClick={() => handleDelete(book.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='addnewbook'><Link to="/add">Add New Book</Link></button>
        </div>
    );
}

export default Books;

