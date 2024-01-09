import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.auth';
import { useGetIndividualBookingsQuery } from '../../redux/slices/booking/bookingApi';
import Loading from '../shared/Loading';
import { FileDoneOutlined, SafetyOutlined, UnorderedListOutlined } from '@ant-design/icons';

const UserOverview = () => {
    const [user] = useAuthState(auth)
    const { data: bookings, isLoading } = useGetIndividualBookingsQuery({ email: user?.email })
    const approvedBookingsCount = bookings?.filter((booking) => booking.status === 'Approved').length;
    const pendingBookingsCount = bookings?.filter((booking) => booking.status === 'Pending').length;
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center items-center mt-4'>
            <div className="rounded-lg p-12 hover:shadow-2xl hover:scale-[102%] transition-all bg-gray-800 text-white flex justify-between gap-2 items-center">
                <FileDoneOutlined className='text-6xl' />
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-3xl'>{approvedBookingsCount}</p>
                    <p>Approved Booking</p>
                </div>
            </div>
            <div className="rounded-lg p-12 hover:shadow-2xl hover:scale-[102%] transition-all bg-gray-800 text-white flex justify-between gap-2 items-center">
                <UnorderedListOutlined className='text-6xl' />
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-3xl'>{pendingBookingsCount}</p>
                    <p>Pending Booking</p>
                </div>
            </div>
            <div className="rounded-lg p-12 hover:shadow-2xl hover:scale-[102%] transition-all bg-gray-800 text-white flex justify-between gap-2 items-center">
                <SafetyOutlined className='text-6xl' />
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-3xl'>{approvedBookingsCount}</p>
                    <p>Approved Review</p>
                </div>
            </div>
        </div>
    );
};

export default UserOverview;