'use client'
import { Button, Dropdown, Table } from "antd";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { SmallDashOutlined } from '@ant-design/icons'
import { useDeleteBookingMutation, } from "../../redux/slices/booking/bookingApi";

const MyBookingTable = ({ bookings }) => {
    const [deleteBooking, deleteData] = useDeleteBookingMutation()

    const handleDelete = (id) => {
        const options = {
            id: id
        }
        deleteBooking(options)
    }

    useEffect(() => {
        if (deleteData?.isSuccess) {
            toast.success(`Booking deleted successfully!`);
        }
    }, [deleteData])

    const approvedDropdownMenuItems = (id) => [
        {
            key: "3",
            label: <span>Delete</span>,
            onClick: () => {
                handleDelete(id);
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
            title: "Pricing",
            dataIndex: "servicePricing",
            key: "servicePricing",
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
                const items = approvedDropdownMenuItems(record._id)
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
            <Table dataSource={bookings} columns={columns} />;
        </div>
    );
};

export default MyBookingTable;