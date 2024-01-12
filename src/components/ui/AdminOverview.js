import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.auth';
import { useGetBookingsQuery, useGetIndividualBookingsQuery } from '../../redux/slices/booking/bookingApi';
import Loading from '../shared/Loading';
import { CoffeeOutlined, FileDoneOutlined, OrderedListOutlined, SafetyOutlined, UnorderedListOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { useGetFeedbacksQuery } from '../../redux/slices/feedback/feedbackApi';
import { useGetUsersQuery } from '../../redux/slices/user/userApi';

const AdminOverview = () => {
    const [user] = useAuthState(auth)
    const { data: bookings, isLoading: bookingLoading } = useGetBookingsQuery()
    const { data: reviews, isLoading: feedbackLoading } = useGetFeedbacksQuery()
    const { data: users, isLoading: userLoading } = useGetUsersQuery()
    const approvedFeedbacksCount = reviews?.filter((review) => review.status === true).length;
    const approvedBookingsCount = bookings?.filter((booking) => booking.status === 'Approved').length;
    const pendingBookingsCount = bookings?.filter((booking) => booking.status === 'Pending').length;
    if (bookingLoading || feedbackLoading || userLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center items-center mt-4'>
            <div className="rounded-lg p-12 hover:shadow-2xl hover:scale-[102%] transition-all bg-gray-800 text-white flex justify-between gap-2 items-center">
                <OrderedListOutlined className='text-6xl' />
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-3xl text-yellow-500'>{bookings.length}</p>
                    <p>Total Bookings</p>
                </div>
            </div>

            <div className="rounded-lg p-12 hover:shadow-2xl hover:scale-[102%] transition-all bg-gray-800 text-white flex justify-between gap-2 items-center">
                <UsergroupAddOutlined className='text-6xl' />
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-3xl text-yellow-500'>{users.length}</p>
                    <p>Total Users</p>
                </div>
            </div>
            <div className="rounded-lg p-12 hover:shadow-2xl hover:scale-[102%] transition-all bg-gray-800 text-white flex justify-between gap-2 items-center">
                <CoffeeOutlined className='text-6xl' />
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-3xl text-yellow-500'>{reviews.length}</p>
                    <p>Total Feedbacks</p>
                </div>
            </div>
            <div className="rounded-lg p-12 hover:shadow-2xl hover:scale-[102%] transition-all bg-gray-800 text-white flex justify-between gap-2 items-center">
                <FileDoneOutlined className='text-6xl' />
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-3xl text-yellow-500'>{approvedBookingsCount}</p>
                    <p>Approved Booking</p>
                </div>
            </div>
            <div className="rounded-lg p-12 hover:shadow-2xl hover:scale-[102%] transition-all bg-gray-800 text-white flex justify-between gap-2 items-center">
                <UnorderedListOutlined className='text-6xl' />
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-3xl text-yellow-500'>{pendingBookingsCount}</p>
                    <p>Pending Booking</p>
                </div>
            </div>
            <div className="rounded-lg p-12 hover:shadow-2xl hover:scale-[102%] transition-all bg-gray-800 text-white flex justify-between gap-2 items-center">
                <SafetyOutlined className='text-6xl' />
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-3xl text-yellow-500'>{approvedFeedbacksCount}</p>
                    <p>Approved Feedback</p>
                </div>
            </div>

        </div>
    );
};

export default AdminOverview;