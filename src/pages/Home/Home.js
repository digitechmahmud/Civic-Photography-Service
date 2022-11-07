import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const services = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                services.map(service =><div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.name}</h2>
                            <div className='flex font-bold'>
                                <p>Rating: {service.rating}</p>
                                <p>Price: ${service.price}</p>
                            </div>
                            <div>
                                <p>{service.details.length > 150 ? <>{service.details.slice(0, 150) + '...'} <Link>Read More</Link></>
                                    : service.details}</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Home;