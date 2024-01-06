'use client'
import { Button, Dropdown, Table } from "antd";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { PlusOutlined, SmallDashOutlined } from '@ant-design/icons'
import { useDeleteServiceMutation, } from "../../redux/slices/service/serviceApi";
import { useRouter } from "next/navigation";

const ManageServiceTable = ({ services }) => {
    const router = useRouter()
    const [deleteService, data] = useDeleteServiceMutation()

    const handleDelete = (id) => {
        const options = {
            id: id
        }
        deleteService(options)
    }

    useEffect(() => {
        if (data?.isSuccess) {
            toast.success(`Service deleted successfully!`);
        }
    }, [data])

    const getDropdownMenuItems = (id) => [
        {
            key: "3",
            label: <span>Delete</span>,
            onClick: () => {
                handleDelete(id);
            },
        }
    ];
    const columns = [

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
                const items = getDropdownMenuItems(record._id)
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
            <div className="flex justify-between items-center pb-4">
                <h1 className="text-2xl ">
                    Manage Services
                </h1>
                <Button size="large" ghost onClick={() => router.push('/admin/add-service')}> Add Service <PlusOutlined /></Button>
            </div>
            <hr />
            <Table
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