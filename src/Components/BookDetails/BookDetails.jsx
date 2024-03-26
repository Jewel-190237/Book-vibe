/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link, useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const books = useLoaderData();
    const { bookId } = useParams()
    const idInt = parseInt(bookId)
    const book = books.find(book => book.bookId == idInt)
    return (
        <div>
            <div>
                <div className="hero bg-[#1313130D]">
                    <div className="hero-content flex-col lg:flex-row gap-8">
                        <img className='w-80 bg-gray-50 rounded-2xl' src={book.image} />
                        <div>
                            <h1 className="text-3xl font-bold w-96 p-4">{book.bookName}</h1>
                            <p className="p-4">By : {book.author}</p>
                            <hr />
                            <p className="font-bold p-4">Review: <span className="font-thin">{book.review}</span></p>
                            <hr />

                            <div className="flex">
                                <p className="p-4 my-4 font-bold">Tag</p>
                                <p className="p-4 my-4 text-blue-700">#{book.tags[0]}</p>
                                <p className="p-4 my-4  text-blue-700">#{book.tags[1]}</p>
                            </div>
                            <hr />
                            <div >
                                <div className="flex mt-3">
                                    <p className="mr-32">Number of page:</p>
                                    <p className="font-bold">{book.totalPages}</p>
                                </div>
                                <div className="flex mt-3">
                                    <p className="mr-44">Publisher:</p>
                                    <p className="font-bold">{book.publisher}</p>
                                </div>
                                <div className="flex mt-3">
                                    <p className="mr-36">Year of Publish:</p>
                                    <p className="font-bold">{book.yearOfPublishing}</p>
                                </div>
                                <div className="flex mt-3">
                                    <p className="mr-52">Rating:</p>
                                    <p className="font-bold">{book.rating}</p>
                                </div>
                                
                            </div>
                            <div className="flex gap-8">
                                <button className="btn btn-primary mt-8">Read</button>
                                <button className="btn btn-primary mt-8">Wish List</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;