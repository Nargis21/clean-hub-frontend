'use client'
import { Avatar, Button, Dropdown, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DeleteFilled, PlusOutlined, SmallDashOutlined } from '@ant-design/icons'
import { useDeleteServiceMutation, useGetServicesQuery, } from "../../redux/slices/service/serviceApi";
import { useRouter } from "next/navigation";
import Loading from "../shared/Loading";

const ManageServiceTable = () => {
    const { data: services, isLoading } = useGetServicesQuery()
    const router = useRouter()
    const [deleteService, data] = useDeleteServiceMutation()

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const handleTableChange = (pagination) => {
        setCurrentPage(pagination.current);
        setPageSize(pagination.pageSize);
    };

    const handleDeleteWithConfirmation = (id) => {
        const handleOk = () => {
            deleteService({ id });
        };

        Modal.confirm({
            title: 'Are you sure you want to delete this service?',
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
            toast.success(`Service deleted successfully!`);
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
            title: "Image",
            key: "img",
            render: (record) => {
                return <Avatar src={record.image} shape="square" size={60} />
            },
        },

        {
            title: "Service",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Pricing",
            dataIndex: "pricing",
            key: "pricing",
        },
        {
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
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
            <div className="flex justify-between items-center pb-4">
                <h1 className="text-2xl ">
                    Manage Services
                </h1>
                <Button type="link" onClick={() => router.push('/admin/add-service')}><PlusOutlined /> Add New Service </Button>
            </div>
            <hr />
            <Table
                onChange={(pagination) => handleTableChange(pagination)}
                className="mt-4"
                dataSource={services}
                columns={columns}
                scroll={{ x: '100%' }}
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

export default ManageServiceTable;