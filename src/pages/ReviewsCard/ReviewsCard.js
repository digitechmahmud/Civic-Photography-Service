import React from 'react';

const Reviews = ({ review }) => {
    const {customer, rating, message, img} = review
    return (
        <div className="card w-full shadow-xl">
            <div className="card-body">
                <img width={40} height={30} src={img} alt="" />
                <h2 className="card-title">{customer}</h2>
                <p>{message}</p>
                
            </div>
        </div>
    );
};

export default Reviews;