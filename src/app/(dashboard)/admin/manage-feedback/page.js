import React from 'react';
import ManageFeedbackTable from '../../../../components/tables/ManageFeedbackTable';

const res = await fetch(`https://clean-hub-backend.vercel.app/reviews`,
    {
        cache: 'no-store'
    }
);
const reviews = await res.json();

const ManageFeedback = () => {
    return (
        <div>
            <ManageFeedbackTable reviews={reviews} ></ManageFeedbackTable>
        </div>
    );
};

export default ManageFeedback;