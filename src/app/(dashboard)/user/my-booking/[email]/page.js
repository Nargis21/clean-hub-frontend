import MyBookingTable from "../../../../../components/tables/MyBookingTable";


const MyBooking = async ({ params }) => {

    const res = await fetch(`https://clean-hub-backend.vercel.app/booking/${params.email}`,
        {
            cache: 'no-store'
        }
    );
    const bookings = await res.json();

    return (
        <div>
            <MyBookingTable bookings={bookings}></MyBookingTable>
        </div>
    );
};

export default MyBooking;