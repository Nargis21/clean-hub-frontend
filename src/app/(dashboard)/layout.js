'use client'

import Loading from '../../components/shared/Loading';
import Sidebar from '../../components/shared/Sidebar';
import { isLoggedIn } from '../../utils/auth-service';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }) => {

    const userLoggedIn = isLoggedIn();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!userLoggedIn) {
            router.push("/login");
        }
        setIsLoading(true);
    }, [router, isLoading, setIsLoading, userLoggedIn]);

    if (!isLoading) {
        return <Loading />;
    }

    return (
        <div className="min-h-[calc(100vh-64px)]">
            <Sidebar>{children}</Sidebar>
        </div>
    );
};

export default DashboardLayout;