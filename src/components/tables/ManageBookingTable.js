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
        <div>
            <div className="p-4 bg-blue-950 text-center text-white">
                <p className="text-2xl ">Manage Booking</p>
            </div>
            <Table dataSource={bookings} columns={columns} />;
        </div>
    );
};

export default ManageBookingTable;