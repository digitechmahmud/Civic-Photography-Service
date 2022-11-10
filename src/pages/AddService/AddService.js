import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';
import civicimg from '../../assets/images/civicimg.jpg';

const AddService = () => {
    const { user } = useContext(AuthContext);

    useTitle("Add Service")
    
    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const img = form.img.value;
        const details = form.details.value;

        const service = {
            email: user.email,
            name: name,
            price: price,
            rating: rating,
            img: img,
            details: details
        }

        fetch('https://civic-photography-server.vercel.app/services', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Service Successfully Added');
            })

    }
    return (
        <div>
            <div className="card-body w-1/2 mx-auto">
                <form onSubmit={handleAddService}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
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
                        <input type="text" name="img" placeholder="Service Photo" className="input input-bordered" required />
                    </div>
                    <textarea className="textarea textarea-primary textarea-bordered h-24 w-full" name="details" placeholder="Service Details" required></textarea>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-1/3">Add Service</button>
                    </div>
                </form>
                <Toaster />
            </div>
           
        </div>
        
    );
};

export default AddService;