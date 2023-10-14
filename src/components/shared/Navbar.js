"use client";

import { showSidebarDrawer } from "../../redux/slices/sidebarSlice";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu, Typography } from "antd";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import logo from '../../assets/images/logo.png'


const { Header, Content } = Layout;
const { Title } = Typography;

const items = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "Services", href: "/services" },
];

const Navbar = ({
    hasSider,
    session,
}) => {
    console.log(session, "session");
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout className="layout">
            <Header className="flex items-center">
                {hasSider && (
                    <Button
                        type="primary"
                        className="lg:hidden"
                        onClick={() => {
                            dispatch(showSidebarDrawer());
                        }}
                    >
                        <MenuOutlined />
                    </Button>
                )}
                <Content>
                    <Link href="/">
                        <Title
                            className={`m-0 text-2xl flex items-center text-white ${hasSider && "text-center lg:text-left"
                                }`}
                        >

                            <Image src={logo} alt="Logo"></Image>
                            <p className="m-0 ml-2">Clean Hub</p>

                        </Title>
                    </Link>
                </Content>
                <Menu
                    className="lg:block hidden"
                    disabledOverflow
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[pathname]}
                >
                    {items?.map((item) => (
                        <Menu.Item key={item.href}>
                            <Link href={item.href}>{item.label}</Link>
                        </Menu.Item>
                    ))}

                    {session ? (
                        <Button
                            className="ml-4"
                            ghost
                            size="large"
                            type="primary"
                            onClick={() => {
                                signOut();
                            }}
                        >
                            Logout
                        </Button>
                    ) : (
                        <Button
                            className="ml-4"
                            ghost
                            size="large"
                            type="primary"
                            onClick={() => {
                                router.push("/login");
                            }}
                        >
                            Login
                        </Button>
                    )}
                </Menu>

                <Button type="primary" className="lg:hidden" onClick={showDrawer}>
                    <MenuOutlined />
                </Button>
                <Drawer title="Menu" placement="right" onClose={onClose} visible={open}>
                    <Menu
                        theme="light"
                        mode="vertical"
                        selectedKeys={[pathname]}
                        style={{ borderRight: 0 }}
                    >
                        {items?.map((item) => (
                            <Menu.Item key={item.href}>
                                <Link href={item.href}>{item.label}</Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Drawer>
            </Header>
        </Layout>
    );
};

export default Navbar;
