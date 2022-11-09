import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    const services = useLoaderData();
    useTitle('Home');
    return (
        <div>
            <div>
                <div className="carousel w-full mb-5">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" alt=""  className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" alt=""  className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" alt="" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" alt=""  className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 '>
                {
                    services.map(service => <div key={service._id}>
                        <div className="card card-compact w-96 bg-base-100   shadow-xl">
                            <PhotoProvider>
                                <PhotoView>
                                    <figure><img src="https://placeimg.com/400/225/arch" alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                            <div className="card-body">
                                <h2 className="card-title">{service.name}</h2>
                                <div className='flex font-bold'>
                                    <p>Rating: {service.rating}</p>
                                    <p>Price: ${service.price}</p>
                                </div>
                                <div>
                                    <p>{service.details.length > 100 ? <>{service.details.slice(0, 100) + '...'} <Link className='link text-blue-700 font-bold' to={`/services/${service._id}`}>Read More</Link></>
                                        : service.details}</p>
                                </div>
                                <div className="card-actions justify-start">
                                    <Link to={`/services/${service._id}`}><button className="btn btn-primary">View Details</button></Link>
                                </div>

                            </div>
                        </div>
                    </div>)
                }

            </div>
            <div className='md:mx-96'>
                <Link to='/services'><button className='btn btn-ghost w-96 bg-amber-200 '>See All</button></Link>
            </div>
            <div>
                <div className="hero min-h-screen mt-5">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://placeimg.com/260/400/arch" alt=""  className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;