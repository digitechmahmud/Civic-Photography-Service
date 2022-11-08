import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import ServiceCard from './ServiceCard';

const Services = () => {
    const { user, loading } = useContext(AuthContext);
    const services = useLoaderData();

    if (loading) {
        return <progress className="progress w-56"></progress>
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                services.map(service=><ServiceCard service={service}></ServiceCard>)
            }
            
        </div>
    );
};

export default Services;