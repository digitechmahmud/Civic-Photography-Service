
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {

    const { name, price, rating, details, _id } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex font-bold'>
                        <p>Rating: {rating}</p>
                        <p>Price: ${price}</p>
                    </div>
                    <div>
                        <p>{details.length > 100 ? <>{details.slice(0, 100) + '...'} <Link className='link text-blue-700 font-bold' to={`/services/${service._id}`}>Read More</Link></>
                            : details}</p>
                    </div>
                    <div className="card-actions justify-start">
                        <Link to={`/services/${service._id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;