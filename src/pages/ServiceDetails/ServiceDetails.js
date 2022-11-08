import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import ReviewsCard from '../ReviewsCard/ReviewsCard';


const ServiceDetails = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { name, img, rating, price, details, _id } = service;

    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const message = form.message.value;

        const review = {
            customer: user?.displayName,
            img: user?.photoURL,
            email: user?.email,
            service: name,
            id: _id,
            rating,
            message,
        }
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                alert('Review successfully submitted');
            })
    }

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
            .catch(err => console.error(err));
    }, [])
    return (
        <div className=''>
            <div className="card w-2/3 shadow-xl mx-auto mb-10">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Service Name: {name}</h2>
                    <p>Public Rating: {rating}</p>
                    <p>Price: ${price}</p>
                    <p>Details: {details}</p>
                    
                </div>
                
            </div>
            <div className='card w-2/3 shadow-xl mx-auto'>
                {
                    user?.uid ?
                        <>

                            <img width={40} height={40} className="rounded-full" src={user.photoURL} alt="" />
                            <p>{user.displayName}</p>
                            <div className="rating mb-4">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask  mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <form onSubmit={handleReview}>
                                <textarea className="textarea textarea-primary textarea-bordered h-24 w-full" name="message" placeholder="Short Message"></textarea>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Review Submit</button>
                                </div>
                            </form>

                        </>
                        :
                        <Link to="/login">Please Login</Link>
                }
            </div>
            <div className='card w-2/3 shadow-xl mx-auto mb-10'>
                {
                    reviews.map(review =><ReviewsCard key={review._id} review={review}></ReviewsCard>)
                }
            </div>
           
        </div>
    );
};

export default ServiceDetails;