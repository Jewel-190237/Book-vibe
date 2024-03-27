/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const SingleListedBook = ({book}) => {

    const{bookName, image, author, rating, tags, totalPages, category, publisher, yearOfPublishing} = book
    console.log(book)
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200 rounded-xl">
                    <div className="hero-content flex-col lg:flex-row md:justify-start gap-8">
                        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                        <div >
                            <h1 className="text-2xl font-bold">{bookName}</h1>
                            <p className="py-4">By:</p>
                            <div className="flex">
                                <p className="py-2 mr-4 font-bold">Tag</p>
                                <p className="py-2 mr-4">#{tags[0]}</p>
                                <p className="py-2 mr-4">#{tags[1]}</p>
                                <p className="py-2 mr-4">Year of Publication: {yearOfPublishing}</p>
                            </div>
                            <div className="flex">
                                <p className="py-2 mr-4">Tag</p>
                                <p className="py-2 mr-4">Tag</p>
                            </div>
                            <hr />
                            <div className="flex">
                                <p className="py-2 m-4 bg-gray-500 rounded-3xl p-8">Category: {category}</p>
                                <p className="py-2 m-4 bg-gray-500 rounded-3xl p-8">Rating: {rating}</p>
                                <button>
                                    <p className="py-2 m-4 bg-gray-500 rounded-3xl p-8">view Details</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleListedBook;