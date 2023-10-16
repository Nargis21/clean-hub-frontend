'use client'
import { Button, Table } from "antd";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDeleteUserMutation } from "../../redux/slices/user/userApi";

const ManageUserTable = ({ users }) => {
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
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Role",
            key: "action",
            render: (record) => {
                if (record.role === "Admin") {
                    return (
                        <p className="font-bold">Admin</p>
                    );
                } else {
                    return (
                        <p>User</p>
                    );
                }
            },
        },
        {
            title: "Action",
            key: "action",
            render: (record) => {
                if (record.role === "Admin") {
                    return (
                        <Button disabled>Delete</Button>
                    );
                } else {
                    return (
                        <Button onClick={() => handleDelete(record._id)}>Delete</Button>
                    );
                }
            },
        },

    ];
    return (
        <div>
            <Table dataSource={users} columns={columns} />;
        </div>
    );
};

export default ManageUserTable;