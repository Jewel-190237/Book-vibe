
import image from '../images/book1.png';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-[#1313130D]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-1/2 ' src={image}/>
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;