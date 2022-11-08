
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {

    const { name, price, rating, details, _id } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex font-bold'>
                        <p>Rating: {rating}</p>
                        <p>Price: ${price}</p>
                    </div>
                    <div>
                        <p>{details.length > 100 ? <>{details.slice(0, 150) + '...'} <Link>Read More</Link></>
                            : details}</p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;