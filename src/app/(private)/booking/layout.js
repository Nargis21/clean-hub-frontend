'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isLoggedIn } from '../../../utils/auth-service'
import Loading from "../../../components/shared/Loading"

const PrivateLayout = ({ children }) => {

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
        <div>
            {children}
        </div>
    );
};

export default PrivateLayout;