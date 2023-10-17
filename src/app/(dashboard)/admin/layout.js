'use client'

import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../../components/shared/Loading';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import auth from '../../../firebase/firebase.auth';
import useAdmin from '../../../hooks/useAdmin';
import { signOut } from 'firebase/auth';

const AdminLayout = ({ children }) => {

    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!admin) {
            signOut(auth)
            localStorage.removeItem('accessToken')
            router.push("/login");
        }
        setIsLoading(true);
    }, [router, isLoading, setIsLoading, admin]);

    if (!isLoading) {
        return <Loading />;
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default AdminLayout;