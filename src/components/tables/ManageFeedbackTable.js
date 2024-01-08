'use client'
import { Avatar, Button, Dropdown, Table } from "antd";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { SmallDashOutlined } from '@ant-design/icons'
import { useDeleteBookingMutation, useEditBookingMutation } from "../../redux/slices/booking/bookingApi";
import { useDeleteFeedbackMutation, useGetFeedbacksQuery } from "../../redux/slices/feedback/feedbackApi";
import Loading from "../shared/Loading";

const ManageFeedbackTable = () => {
    const { data: reviews, isLoading } = useGetFeedbacksQuery()
    const [deleteFeedback, deleteData] = useDeleteFeedbackMutation()
    const [editBooking, editData] = useEditBookingMutation()


    const handleDelete = (id) => {
        const options = {
            id: id
        }
        deleteFeedback(options)
    }
    const handleEdit = (id) => {
        const options = {
            id: id
        }
        editBooking(options)
    }

    useEffect(() => {
        if (deleteData?.isSuccess) {
            toast.success(`Feedback deleted successfully!`);
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

    const visibleDropdownMenuItems = (id) => [
        {
            key: "3",
            label: <Button type="primary" danger size="small">Delete</Button>,
            onClick: () => {
                handleDelete(id);
            },
        },
        {
            key: "4",
            label: <Button type="primary" size="small">Hide</Button>,
            onClick: () => {
                handleEdit(id);
            },
        },
    ];
    const hiddenDropdownMenuItems = (id) => [
        {
            key: "3",
            label: <Button type="primary" danger size="small">Delete</Button>,
            onClick: () => {
                handleDelete(id);
            },
        },
        {
            key: "4",
            label: <Button type="primary" size="small">Visible</Button>,
            onClick: () => {
                handleEdit(id);
            },
        },
    ];
    const columns = [
        {
            title: "Image",
            key: "img",
            render: (record) => {
                return <Avatar src={record.img || "https://i.ibb.co/SRF75vM/avatar.png"} size={60} />
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
            title: "Status",
            key: "status",
            render: (record) => {
                if (record.status === 0) {
                    return (
                        <p>Hidden</p>
                    );
                } else {
                    return (
                        <p>Visible</p>
                    );
                }
            },
        },
        {
            title: "Action",
            key: "action",
            render: (record) => {
                let items;
                {
                    record.status === 0 ? items = hiddenDropdownMenuItems(record._id) : items = visibleDropdownMenuItems(record._id)
                }
                //   console.log(record);
                return (
                    <Dropdown
                        placement="bottomLeft"
                        overlayClassName="min-w-[100px]"
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
                Manage Feedbacks
            </h1>
            <hr />
            <Table dataSource={reviews} columns={columns} scroll={{ x: '100%' }}
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