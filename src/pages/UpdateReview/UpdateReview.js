import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const UpdateReview = () => {
    const storedReview = useLoaderData();
    const [review, setReview] = useState(storedReview);

    console.log(review);

    const handleUpdateReview = (e) => {
        e.preventDefault();
        fetch(`https://civic-photography-server.vercel.app/reviews/${storedReview.id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast('Data Updated');
                }
                setReview(data);
            })
    }

    const handleInputChange = (event) => {
        const value = event.target.value;
        const field = event.target.name;

        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);

    }
    // console.log(storedReview);
    return (
        <div>
            <form onSubmit={handleUpdateReview}>
                <input onChange={handleInputChange} defaultValue={storedReview.message} type="text" name="message" placeholder='Message' required />
                <button type="submit">Update</button>
            </form>
            <Toaster />
        </div>
    );
};

export default UpdateReview;