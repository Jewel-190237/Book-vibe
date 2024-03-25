
// import Book from "../Book/Book";

import { useEffect, useState } from "react";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[books])

    console.log(books)

    return (
        <div>
            <h3>Books: {books.length}</h3>
        </div>
    );
};

export default Books;