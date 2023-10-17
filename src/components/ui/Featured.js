import React from 'react';
import Services from './Services';

const Featured = ({ services }) => {
    return (
        <div>
            <div className='font-semibold text-center pt-10 bg-gray-200'>
                <h1 className='text-2xl'>Featured Services</h1>
                <p className='pt-2'>Check & Get Your Desired Service!</p>
            </div>
            <Services services={services}></Services>
        </div>
    );
};

export default Featured;