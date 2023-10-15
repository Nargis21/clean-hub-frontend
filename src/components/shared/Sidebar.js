"use client";

import { onSidebarClose } from "../../redux/slices/sidebarSlice";
import { Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useDispatch, useSelector, } from "react-redux";
const { Content, Sider } = Layout;

const items = [
    { key: "1", label: "My Profile", href: "/dashboard/my-profile" },
    { key: "2", label: "My Bookings", href: "/dashboard/my-bookings" },
    { key: "2", label: "My Reviews", href: "/dashboard/my-reviews" },
];

const Sidebar = ({
    children,
}) => {
    const open = useSelector((state) => state.sidebar.open)
    console.log(open);
    const dispatch = useDispatch();
    const pathname = usePathname();
    const getSelectedKey = () => {
        return items.find((item) => item.href === pathname)?.key || "";
    };
    return (
        <Layout>
            <Content>
                <Layout className="lg:flex hidden">
                    <Sider width={250} className="min-h-screen bg-gray-300">
                        <Menu
                            className="h-full px-3 bg-transparent py-1 bg-gray-300"
                            mode="inline"
                            defaultSelectedKeys={[getSelectedKey()]}
                            selectedKeys={[getSelectedKey()]}
                        >
                            {items?.map((item) => (
                                <Menu.Item key={item.key}>
                                    <Link href={item.href}>{item.label}</Link>
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Sider>
                    <Content className="bg-white p-4">{children}</Content>
                </Layout>
                <Layout className="lg:hidden">
                    <Drawer
                        title="Dashboard"
                        placement="left"
                        onClose={() => {
                            dispatch(onSidebarClose());
                        }}
                        visible={open}
                    >
                        <Menu
                            className="h-full px-3"
                            mode="inline"
                            defaultSelectedKeys={["1"]}
                            defaultOpenKeys={["sub1"]}
                        >
                            {items?.map((item) => (
                                <Menu.Item key={item.key}>
                                    <Link href={item.href}>{item.label}</Link>
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Drawer>
                    <Content className="bg-white p-4">{children}</Content>
                </Layout>
            </Content>
        </Layout>
    );
};

export default Sidebar;
