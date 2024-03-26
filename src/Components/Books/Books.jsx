
// import Book from "../Book/Book";

import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[books])

    

    return (
        <div className="grid md:grid-cols-3"> 
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
    );
};

export default Books;