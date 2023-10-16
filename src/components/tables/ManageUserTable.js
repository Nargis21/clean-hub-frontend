'use client'
import { Button, Table } from "antd";

const ManageUserTable = ({ users }) => {
    const columns = [
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
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
                        <Button onClick={() => handleAction(record)}>Delete</Button>
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