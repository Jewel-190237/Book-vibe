/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import Book from "../Book/Book";
import { Link } from "react-router-dom";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
     
    return (
        <div>
            <h2 className="text-3xl text-center font-bold">Books</h2>
            <div >
                <button className="grid md:grid-cols-3 gap-36 justify-between ml-10">
                    {
                        books.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </button>
            </div>

        </div>
    );
};

export default Books;