import React from 'react';
import BookingForm from '../../../components/ui/BookingForm';
import getSingleService from '../../../apiServices/services/getSingleService';

const BookingPage = async ({ params }) => {
    console.log(params);
    const serviceId = params.serviceId;
    const service = await getSingleService(serviceId)
    return (
        <div>
            <BookingForm service={service}></BookingForm>
        </div>
    );
};

export default BookingPage;