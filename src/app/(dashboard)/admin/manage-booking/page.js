import ManageBookingTable from '../../../../components/tables/ManageBookingTable'

const ManageBooking = async () => {
    const res = await fetch("https://clean-hub-backend.vercel.app/bookings", {
        cache: "no-store",
    });
    const bookings = await res.json();

    return (
        <div>
            <ManageBookingTable bookings={bookings}></ManageBookingTable>
        </div>
    );
};

export default ManageBooking;