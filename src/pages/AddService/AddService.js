import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext);
    
    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const servicePhotoURL = form.servicePhotoURL.value;
        const details = form.details.value;

        const service = {
            email: user.email,
            name: serviceName,
            price: price,
            rating: rating,
            img: servicePhotoURL,
            details: details
        }

        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Service Successfully Added');
            })

    }
    return (
        <div className="card-body">
            <form onSubmit={handleAddService}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" name="serviceName" placeholder="Your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Price</span>
                    </label>
                    <input type="text" name="price" placeholder="price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name="rating" placeholder="rating" className="input input-bordered" required />
                </div>
                <div className="form-control mb-2">
                    <label className="label">
                        <span className="label-text">Service Photo</span>
                    </label>
                    <input type="text" name="servicePhotoURL" placeholder="Service Photo" className="input input-bordered" required />
                </div>
                <textarea className="textarea textarea-primary textarea-bordered h-24 w-full" name="details" placeholder="Service Details" required></textarea>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Service</button>
                </div>
            </form>
        </div>
        
    );
};

export default AddService;