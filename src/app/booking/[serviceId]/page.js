import React from 'react';
import BookingForm from '../../../components/ui/BookingForm';

const BookingPage = async ({ params }) => {
    const serviceId = params.serviceId;
    const res = await fetch(`https://clean-hub-backend.vercel.app/services/${serviceId}`, {
        cache: "no-store",
    });
    const service = await res.json();
    return (
        <div>
            <BookingForm service={service}></BookingForm>
        </div>
    );
};

export default BookingPage;