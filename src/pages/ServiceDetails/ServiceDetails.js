import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';



const ServiceDetails = () => {
    const [reviews, setReviews] = useState([]);
    const [reviewsById, setReviewsById] = useState({});
    const { user, loading } = useContext(AuthContext);
    const service = useLoaderData();
    const { name, img, rating, price, details, _id,  } = service;

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
        fetch('https://civic-photography-server.vercel.app/reviews', {
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
        fetch(`https://civic-photography-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviewsById(data);
            })
            .catch(err => console.error(err));
    }, [_id]);
    console.log(reviewsById);
    return (
        <div className=''>
            <div className="card w-2/3 shadow-xl mx-auto mb-10">
                <figure><img src={img} alt="Shoes" /></figure>
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
                        <p>If you want to submit review <Link className='link text-blue-700 font-bold' to="/login">Please Login</Link></p>
                }
            </div>
            <div className='card w-2/3 shadow-xl mx-auto mb-10 mt-5'>
                <div className="card w-full shadow-xl">
                    <div className="card-body">
                        <img width={40} height={30} src={reviewsById.img} alt="" />
                        <h2 className="card-title">{reviewsById.customer}</h2>
                        <p>{reviewsById.message}</p>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default ServiceDetails;