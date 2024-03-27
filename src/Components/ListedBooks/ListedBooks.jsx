import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getListedBooks } from "../Utility/LocalStorage";
import SingleListedBook from "../SingleListedBook/SingleListedBook";

const ListedBooks = () => {

    const [displayBooks, setDisplayBooks] = useState([])

    const books = useLoaderData();

    useEffect(() => {
        const storeBookIds = getListedBooks()

        if (books.length > 0) {
            const booksListed = books.filter(book => storeBookIds.includes(book.bookId));
            setDisplayBooks(booksListed)
        }
    }, [])
    return (
        <div>

            <div className="card bg-[#1313130D]">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">Books </h2>
                </div>
            </div>

            <div className=" text-center flex justify-center m-8">
                <details className="dropdown">
                    <summary className="m-1 btn px-12 bg-[#23BE0A]">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                        <li><a>Rating</a></li>
                        <li><a>Number of Pages</a></li>
                        <li><a>Publisher Year</a></li>
                    </ul>
                </details>
            </div>


            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read List" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

                    {
                        displayBooks.map(book => <SingleListedBook key={book.bookId} book={book}></SingleListedBook>)
                    }

                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wish List" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

                    {
                        displayBooks.map(book => <SingleListedBook key={book.bookId} book={book}></SingleListedBook>)
                    }

                </div>

            </div>
        </div>
    );
};

export default ListedBooks;