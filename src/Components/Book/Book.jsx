/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Book = ({ book }) => {

    const {bookId, bookName, image, author, rating, category, tags } = book;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Book" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <div className="flex">
                            <p>{tags[0]}</p>
                            <p>{tags[1]}</p>
                        </div>
                        <h2 className={bookName}></h2>
                        <p>By {author}</p>

                    </div>
                    <div className="flex justify-between">
                        <p className="p-6">{category}</p>
                        <p className="p-6">{rating}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;