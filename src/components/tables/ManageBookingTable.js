'use client'
import { Button, Table } from "antd";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDeleteUserMutation } from "../../redux/slices/user/userApi";

const ManageBookingTable = ({ bookings }) => {
    const [deleteUser, data] = useDeleteUserMutation()

    const handleDelete = (id) => {
        const options = {
            id: id
        }
        deleteUser(options)
    }

    useEffect(() => {
        if (data?.isSuccess) {
            toast.success(`User deleted successfully!`);
        }
    }, [data])
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

    ];
    return (
        <div>
            <Table dataSource={bookings} columns={columns} />;
        </div>
    );
};

export default ManageBookingTable;