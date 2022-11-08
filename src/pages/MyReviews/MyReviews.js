import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyReviews = () => {
    const [myReviews, setMyReviews] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);
            })
    },[user?.email])
    return (
        <div className='flex-grow h-screen'>
            {
                myReviews.map(mr => <div key={mr._id} className="card card-side bg-base-100 shadow-xl mx-10">
                    <figure className='w-20'><img src={user?.photoURL} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{mr.customer}</h2>
                        <p>{mr.message}</p>

                    </div>
                </div>)
            }
        </div>
    );
};

export default MyReviews;