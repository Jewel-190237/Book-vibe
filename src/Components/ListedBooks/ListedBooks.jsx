
const ListedBooks = () => {
    return (
        <div>
            <div className="card bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">Books</h2>
                </div>
            </div>
            <div className=" text-center flex justify-center mt-8">
                <details className="dropdown">
                    <summary className="m-1 btn px-12">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                        <li><a>Rating</a></li>
                        <li><a>Number of Pages</a></li>
                        <li><a>Publisher Year</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <div className="hero min-h-screen bg-base-200 rounded-xl">
                    <div className="hero-content flex-col lg:flex-row md:justify-start gap-8">
                        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div >
                            <h1 className="text-2xl font-bold">Box Office News!</h1>
                            <p className="py-4">By</p>
                            <div className="flex">
                                <p className="py-2 mr-4">Tag</p>
                                <p className="py-2 mr-4">Tag</p>
                                <p className="py-2 mr-4">Tag</p>
                                <p className="py-2 mr-4">Tag</p>
                            </div>
                            <div className="flex">
                                <p className="py-2 mr-4">Tag</p>
                                <p className="py-2 mr-4">Tag</p>
                            </div>
                            <hr />
                            <div className="flex">
                                <p className="py-2 m-4 bg-gray-500 rounded-3xl p-8">Category</p>
                                <p className="py-2 m-4 bg-gray-500 rounded-3xl p-8">Rating</p>
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

export default ListedBooks;