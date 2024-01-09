"use client"

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.auth";
import useAdmin from "../../../hooks/useAdmin";
import UserOverview from "../../../components/ui/UserOverview"
import AdminOverview from "../../../components/ui/AdminOverview"

const Overview = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="bg-gray-900 lg:p-6 md:p-6 p-4 rounded-xl text-white lg:min-h-screen">
            <h1 className="text-2xl pb-4">
                Overview
            </h1>
            <hr />
            {admin ? (
                <AdminOverview />

            ) : (
                <UserOverview />
            )}

        </div>
    );
};

export default Overview;