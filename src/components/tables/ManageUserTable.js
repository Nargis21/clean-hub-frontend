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
                        <Button type="primary" danger onClick={() => handleDelete(record._id)}>Delete</Button>
                    );
                }
            },
        },

    ];
    return (
        <div className="bg-gray-900 lg:p-6 md:p-6 p-4 rounded-xl text-white lg:min-h-screen">
            <h1 className="text-2xl pb-4">
                Manage Users
            </h1>
            <hr />
            <Table dataSource={users} columns={columns} scroll={{ x: '100%' }} className="mt-4"
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
                }} />;
        </div>
    );
};

export default ManageUserTable;