import ManageBookingTable from '../../../../components/tables/ManageBookingTable'

const ManageBooking = async () => {
    const res = await fetch("http://localhost:5000/bookings", {
        cache: "no-cache",
    });
    const bookings = await res.json();

    return (
        <div>
            <ManageBookingTable bookings={bookings}></ManageBookingTable>
        </div>
    );
};

export default ManageBooking;