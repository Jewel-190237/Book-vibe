/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    
    const books = useLoaderData();
    const { bookId } = useParams()
    const idInt = parseInt(bookId)
    const book = books.find(book => book.bookId == idInt)
    return (
        <div>
            <h2>Jewel: {book.bookId}</h2>
        </div>
    );
};

export default BookDetails;