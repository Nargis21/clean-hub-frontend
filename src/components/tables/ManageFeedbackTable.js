'use client'
import { Avatar, Button, Dropdown, Modal, Switch, Table } from "antd";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DeleteFilled, } from '@ant-design/icons'
import { useDeleteFeedbackMutation, useEditFeedbackMutation, useGetFeedbacksQuery } from "../../redux/slices/feedback/feedbackApi";
import Loading from "../shared/Loading";

const ManageFeedbackTable = () => {
    const { data: reviews, isLoading } = useGetFeedbacksQuery()
    const [deleteFeedback, deleteData] = useDeleteFeedbackMutation()
    const [editFeedback, editData] = useEditFeedbackMutation()

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const handleTableChange = (pagination) => {
        setCurrentPage(pagination.current);
        setPageSize(pagination.pageSize);
    };


    const handleDeleteWithConfirmation = (id) => {
        const handleOk = () => {
            deleteFeedback({ id });
        };

        Modal.confirm({
            title: 'Are you sure you want to delete this feedback?',
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

    const handleEdit = (id) => {
        const options = {
            id: id
        }
        editFeedback(options)
    }

    useEffect(() => {
        if (deleteData?.isSuccess) {
            toast.success(`Feedback deleted successfully!`);
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
            title: "Image",
            key: "img",
            render: (record) => {
                return <Avatar src={record.img || "https://i.ibb.co/SRF75vM/avatar.png"} size={50} />
            },
        },
        {
            title: "Name",
            dataIndex: "fullName",
            key: "fullName",
        },
        {
            title: "Feedback",
            dataIndex: "comment",
            key: "comment",
        },
        {
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
        },
        {
            title: "Visibility",
            key: "visibility",
            render: (record) => {
                return (
                    <Switch
                        checked={record.status !== false} // Set initial checked state based on status
                        onChange={() => handleEdit(record._id)}
                        size="small"
                    />
                );
            }
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
                Manage Feedbacks
            </h1>
            <hr />
            <Table onChange={(pagination) => handleTableChange(pagination)} dataSource={reviews} columns={columns} scroll={{ x: '100%' }}
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

export default ManageFeedbackTable;