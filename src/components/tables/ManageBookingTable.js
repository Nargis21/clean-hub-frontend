'use client'
import { Button, Dropdown, Table } from "antd";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { SmallDashOutlined } from '@ant-design/icons'
import { useDeleteBookingMutation, useEditBookingMutation } from "../../redux/slices/booking/bookingApi";

const ManageBookingTable = ({ bookings }) => {
    const [deleteBooking, deleteData] = useDeleteBookingMutation()
    const [editBooking, editData] = useEditBookingMutation()


    const handleDelete = (id) => {
        const options = {
            id: id
        }
        deleteBooking(options)
    }
    const handleEdit = (id) => {
        const options = {
            id: id
        }
        editBooking(options)
    }

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

    const approvedDropdownMenuItems = (id) => [
        {
            key: "3",
            label: <span>Delete</span>,
            onClick: () => {
                handleDelete(id);
            },
        },
    ];
    const pendingDropdownMenuItems = (id) => [
        {
            key: "3",
            label: <span>Delete</span>,
            onClick: () => {
                handleDelete(id);
            },
        },
        {
            key: "4",
            label: <span>Approved</span>,
            onClick: () => {
                handleEdit(id);
            },
        },
    ];
    const columns = [
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
            title: "Action",
            key: "action",
            render: (record) => {
                let items;
                {
                    record.status === 'Pending' ? items = pendingDropdownMenuItems(record._id) : items = approvedDropdownMenuItems(record._id)
                }
                //   console.log(record);
                return (
                    <Dropdown
                        placement="bottomLeft"
                        overlayClassName="min-w-[150px]"
                        menu={{
                            items: items,
                        }}
                    >
                        <Button>
                            <SmallDashOutlined />
                        </Button>
                    </Dropdown>
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
            <Table dataSource={bookings} columns={columns} scroll={{ x: '100%' }}
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