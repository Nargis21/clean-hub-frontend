'use client'
import { Button, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDeleteUserMutation, useGetUsersQuery } from "../../redux/slices/user/userApi";
import { DeleteFilled } from "@ant-design/icons";
import Loading from "../shared/Loading";

const ManageUserTable = () => {
    const { data: users, isLoading } = useGetUsersQuery()

    const [deleteUser, data] = useDeleteUserMutation()

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const handleTableChange = (pagination) => {
        setCurrentPage(pagination.current);
        setPageSize(pagination.pageSize);
    };

    const handleDeleteWithConfirmation = (id) => {
        const handleOk = () => {
            deleteUser({ id });
        };

        Modal.confirm({
            title: 'Are you sure you want to delete this user?',
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
        if (data?.isSuccess) {
            toast.success(`User deleted successfully!`);
        }
    }, [data])

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
                        <Button className="text-xl" type="link" disabled><DeleteFilled /></Button>
                    );
                } else {
                    return (
                        <Button className="text-xl" type="link" danger onClick={() => handleDeleteWithConfirmation(record._id)}><DeleteFilled /></Button>
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
            <Table onChange={(pagination) => handleTableChange(pagination)} dataSource={users} columns={columns} scroll={{ x: '100%' }} className="mt-4"
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

export default ManageUserTable;