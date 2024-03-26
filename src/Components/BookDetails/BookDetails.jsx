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
                <div className="hero min-h-screen bg-[#1313130D]">
                    <div className="hero-content flex-col lg:flex-row gap-8">
                        <img className='w-full' src={book.image} />
                        <div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat in delectus maiores quibusdam nesciunt tempore molestias sint eligendi ea nemo necessitatibus, esse harum atque eos nostrum, maxime assumenda amet a.</p>
                            <h1 className="text-5xl font-bold">{book.bookName}</h1>

                            <button className="btn btn-primary mt-8">View The List</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;