'use client'
import { Button, Dropdown, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DeleteFilled, SmallDashOutlined } from '@ant-design/icons'
import { useDeleteBookingMutation, useEditBookingMutation, useGetBookingsQuery } from "../../redux/slices/booking/bookingApi";
import Loading from "../shared/Loading";

const ManageBookingTable = () => {
    const { data: bookings, isLoading } = useGetBookingsQuery()
    const [deleteBooking, deleteData] = useDeleteBookingMutation()
    const [editBooking, editData] = useEditBookingMutation()

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const handleTableChange = (pagination) => {
        setCurrentPage(pagination.current);
        setPageSize(pagination.pageSize);
    };

    const handleEdit = (id) => {
        const options = {
            id: id
        }
        editBooking(options)
    }

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


    useEffect(() => {
        if (deleteData?.isSuccess) {
            toast.success(`Booking deleted successfully!`);
        }
    }, [deleteData])

    useEffect(() => {
        if (editData?.isSuccess) {
            toast.success(`Booking Approved successfully!`);
        }
    }, [editData])

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
            title: "Name",
            dataIndex: "fullName",
            key: "fullName",
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
            title: "Approval",
            key: "approval",
            render: (record) => {
                if (record.status === 'Pending') {
                    return (
                        <Button type="primary" onClick={() => handleEdit(record._id)}>Approve</Button>
                    );
                } else {
                    return (
                        <Button type="primary" disabled>Approve</Button>
                    );
                }
            },
        },
        {
            title: "Action",
            key: "action",
            render: (record) => {
                return (
                    <Button className="text-xl" type="link" danger onClick={() => handleDeleteWithConfirmation(record._id)}><DeleteFilled /></Button>
                );
            },
        },

    ];
    return (
        <div className="bg-gray-900 lg:p-6 md:p-6 p-4 rounded-xl text-white lg:min-h-screen">
            <h1 className="text-2xl pb-4">
                Manage Bookings
            </h1>
            <hr />
            <Table onChange={(pagination) => handleTableChange(pagination)} dataSource={bookings} columns={columns} scroll={{ x: '100%' }}
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
                }} />
        </div>
    );
};

export default ManageBookingTable;