'use client'
import { Button, Dropdown, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DeleteFilled, SmallDashOutlined } from '@ant-design/icons'
import { useDeleteBookingMutation, useGetIndividualBookingsQuery, } from "../../redux/slices/booking/bookingApi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.auth";
import Loading from "../shared/Loading";

const MyBookingTable = () => {
    const [user] = useAuthState(auth)
    const { data: bookings, isLoading } = useGetIndividualBookingsQuery({ email: user?.email })
    const [deleteBooking, deleteData] = useDeleteBookingMutation()

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const handleTableChange = (pagination) => {
        setCurrentPage(pagination.current);
        setPageSize(pagination.pageSize);
    };


    const handleDeleteWithConfirmation = (id) => {
        const handleOk = () => {
            deleteBooking({ id });
        };

        Modal.confirm({
            title: 'Are you sure you want to delete this booking?',
            okText: 'Delete',
            okButtonProps: {
                style: {
                    backgroundColor: '#FF7875',
                    border: 'none',
                    color: 'white',
                },
            },
            onOk: () => handleOk(),
        });
    };
    const handleCancelWithConfirmation = (id) => {
        const handleOk = () => {
            deleteBooking({ id });
        };

        Modal.confirm({
            title: 'Are you sure you want to cancel this booking?',
            okText: 'Delete',
            okButtonProps: {
                style: {
                    backgroundColor: '#FF7875',
                    border: 'none',
                    color: 'white',
                },
            },
            onOk: () => handleOk(),
        });
    };


    useEffect(() => {
        if (deleteData?.isSuccess) {
            toast.success(`Booking deleted successfully!`);
        }
    }, [deleteData])

    if (isLoading) {
        return <Loading></Loading>
    }

    const columns = [
        {
            title: 'No.',
            key: 'no',
            render: (text, record, index) => index + 1 + (currentPage - 1) * pageSize,
        },
        {
            title: "Service",
            dataIndex: "serviceName",
            key: "serviceName",
        },
        {
            title: "Pricing",
            dataIndex: "servicePricing",
            key: "servicePricing",
        },
        {
            title: "Phone",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Action",
            key: "action",
            render: (record) => {
                if (record.status !== "Pending") {
                    return (
                        <Button className="text-xl" type="link" danger onClick={() => handleDeleteWithConfirmation(record._id)}><DeleteFilled /></Button>
                    );
                } else {
                    return (
                        <Button size="small" danger onClick={() => handleCancelWithConfirmation(record._id)}>Cancel</Button>
                    );
                }
            },
        },

    ];
    return (
        <div className="bg-gray-900 lg:p-6 md:p-6 p-4 rounded-xl text-white lg:h-screen">
            <h1 className="text-2xl pb-4">
                My Bookings
            </h1>
            <hr />
            <Table onChange={(pagination) => handleTableChange(pagination)} scroll={{ x: '100%' }}
                className="mt-4"
                style={{
                    backgroundColor: '#ffffff',
                    borderRadius: "10px"
                }}
                pagination={{
                    pageSize: 5,
                    style: {
                        backgroundColor: '#ffffff',
                        paddingRight: '15px'
                    },
                }} dataSource={bookings} columns={columns} />
        </div>
    );
};

export default MyBookingTable;