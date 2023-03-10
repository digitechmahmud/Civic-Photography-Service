import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const { user, loading } = useContext(AuthContext);
    const services = useLoaderData();

    useTitle("Services");
    if (loading) {
        return <progress className="progress w-56"></progress>
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5'>
            {
                services.map(service=><ServiceCard service={service}></ServiceCard>)
            }
            
        </div>
    );
};

export default Services;