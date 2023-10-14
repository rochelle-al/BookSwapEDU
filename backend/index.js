// Import required packages and modules
import express from "express";
import mysql from "mysql2";
import cors from "cors";
import { config as dotenvConfig } from 'dotenv';

// Load environment variables from a .env file
dotenvConfig();

// Create an Express application
const app = express();

// Create a MySQL database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "test"
});

// Middleware to parse incoming JSON data and enable Cross-Origin Resource Sharing (CORS)
app.use(express.json());
app.use(cors());

// Define a route for the root endpoint
app.get("/", (req, res) => {
    res.json({ message: "Hello, this is the backend" });
});

// Define a route to retrieve all books from the database
app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.json(data);
    });
});

// Define a route to create a new book in the database
app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.json({ message: "Book has been created successfully." });
    });
});

// Define a route to delete a book by ID from the database
app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";

    db.query(q, [bookId], (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.json({ message: "Book has been deleted successfully." });
    });
});

// Define a route to update a book by ID in the database
app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
        bookId,
    ];

    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.json({ message: "Book has been updated successfully." });
    });
});

// Set the server to listen on a specified port or a default port
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

