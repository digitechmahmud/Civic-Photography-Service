import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import img1 from '../../assets/images/civic.jpg'
import img2 from '../../assets/images/civic1.jpg'
import img3 from '../../assets/images/civic2.jpg'
import img from '../../assets/images/civicimg.jpg';

const Home = () => {
    const services = useLoaderData();
    useTitle('Home');
    return (
        <div>
            <div>
                <div className="carousel w-full mb-5">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={img1} alt=""  className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={img2} alt=""  className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} alt="" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 '>
                {
                    services.map(service => <div key={service._id}>
                        <div className="card card-compact w-96 bg-base-100   shadow-xl">
                            <PhotoProvider>
                                <PhotoView src={service.img}>
                                    <figure><img src={service.img} alt="" /></figure>
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
                <div className="hero  mt-5">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img} alt=""  className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h2 className="text-5xl font-bold">Professional photography services for your website and digital marketing use.</h2>
                            <p className="py-6">Introduce the world to your business with authentic, high-resolution photos of your team, locations, products, customers and events.Our in-house photography services team made up of professional photographers can add value to your website with high-resolution team photos, corporate event photography and product photography.
</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h2 className="mb-5 text-5xl font-bold">We believe in building strong brands, good clean design, well-crafted content, and integrated strategies.</h2>
                            
                            <Link to="/services"><button className="btn btn-primary">Get Started</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='text-5xl font-bold text-center'>Some our photography collection</h2>
                <section className="overflow-hidden text-gray-700 ">
                    <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"/>
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"/>
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;