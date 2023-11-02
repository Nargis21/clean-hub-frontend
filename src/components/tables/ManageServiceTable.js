'use client'
import { Button, Dropdown, Table } from "antd";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { SmallDashOutlined } from '@ant-design/icons'
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
        <div>
            <div className="p-4 bg-blue-950 text-center items-center justify-center text-white flex flex-col lg:flex-row md:flex-row gap-2">
                <p className="text-2xl ">Manage User</p>
                <Button size="large" ghost onClick={() => router.push('/admin/add-service')}>Add New Service</Button>
            </div>
            <Table dataSource={services} columns={columns} />;
        </div>
    );
};

export default ManageServiceTable;