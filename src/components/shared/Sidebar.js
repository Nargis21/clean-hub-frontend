"use client";

import { onSidebarClose } from "../../redux/slices/sidebarSlice";
import { Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector, } from "react-redux";
import auth from "../../firebase/firebase.auth";
import useAdmin from "../../hooks/useAdmin";
const { Content, Sider } = Layout;


const Sidebar = ({
    children,
}) => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    const userItems = [
        { key: "<UserOutlined />", label: "My Profile", href: `/profile/${user?.email}` },
        { key: "2", label: "My Bookings", href: `/user/my-booking/${user?.email}` },
        // { key: "3", label: "My Reviews", href: `/user/my-review/${user?.email}` },
    ];
    const adminItems = [
        { key: "1", label: "My Profile", href: `/profile/${user?.email}` },
        { key: "2", label: "Manage Users", href: "/admin/manage-user" },
        { key: "3", label: "Manage Bookings", href: "/admin/manage-booking" },
        { key: "4", label: "Manage Services", href: "/admin/manage-service" },
        { key: "5", label: "Manage Feedbacks", href: "/admin/manage-feedback" },
    ];

    const open = useSelector((state) => state.sidebar.open)
    const dispatch = useDispatch();
    const pathname = usePathname();
    const getSelectedKey = () => {
        return (
            !admin ? userItems.find((item) => item.href === pathname)?.key || "" : adminItems.find((item) => item.href === pathname)?.key || ""
        )
    };
    return (
        <Layout>
            <Content>
                <Layout className="lg:flex bg-gray-950 hidden">
                    <Sider width={250} className="min-h-screen bg-slate-900 m-6 py-2 rounded-xl">
                        <Menu
                            className="h-full px-3 font-semibold text-white bg-transparent py-1"
                            mode="inline"
                            defaultSelectedKeys={[getSelectedKey()]}
                            selectedKeys={[getSelectedKey()]}
                        >
                            {
                                !admin ? userItems?.map((item) => (
                                    <Menu.Item key={item.key}>
                                        <Link href={item.href}>{item.label}</Link>
                                    </Menu.Item>
                                )) : adminItems?.map((item) => (
                                    <Menu.Item key={item.key}>
                                        <Link href={item.href}>{item.label}</Link>
                                    </Menu.Item>
                                ))
                            }
                        </Menu>
                    </Sider>
                    <Content className="bg-gray-950 p-6 pl-0 min-h-screen">{children}</Content>
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
                            {
                                !admin ? userItems?.map((item) => (
                                    <Menu.Item key={item.key}>
                                        <Link href={item.href}>{item.label}</Link>
                                    </Menu.Item>
                                )) : adminItems?.map((item) => (
                                    <Menu.Item key={item.key}>
                                        <Link href={item.href}>{item.label}</Link>
                                    </Menu.Item>
                                ))
                            }
                        </Menu>
                    </Drawer>
                    <Content className="bg-gray-950 p-4 min-h-screen">{children}</Content>
                </Layout>
            </Content>
        </Layout>
    );
};

export default Sidebar;
