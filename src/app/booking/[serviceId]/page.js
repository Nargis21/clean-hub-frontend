import React from 'react';
import BookingForm from '../../../components/ui/BookingForm';

const BookingPage = async ({ params }) => {
    const serviceId = params.serviceId;
    const res = await fetch(`http://localhost:5000/services/${serviceId}`, {
        // cache: "no-cache",
    });
    const service = await res.json();
    return (
        <div>
            <BookingForm service={service}></BookingForm>
        </div>
    );
};

export default BookingPage;