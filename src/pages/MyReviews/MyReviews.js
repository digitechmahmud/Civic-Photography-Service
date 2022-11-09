import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyReviews = () => {
    const [myReviews, setMyReviews] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://civic-photography-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);
            })
    }, [user?.email]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(`https://civic-photography-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',   
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }
    return (
        <div className='flex-grow h-screen'>
            {
                myReviews.map(mr => <div key={mr._id} className="card card-side bg-base-100 shadow-xl mx-10">
                    <figure className='w-20'><img src={user?.photoURL} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{mr.customer}</h2>
                        <p>{mr.message}</p>
                        <div className='flex'>
                            <button onClick={()=>handleDelete(mr._id)} className='mr-2 btn btn-sm'>Delete</button>
                            <button className='btn btn-sm'>Edit</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyReviews;