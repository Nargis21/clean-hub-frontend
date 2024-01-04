import React from 'react';
import MyProfile from '../../../../components/ui/MyProfile'

const MyProfilePage = async ({ params }) => {
    const res = await fetch(`https://clean-hub-backend.vercel.app/user/${params.email}`,
        {
            cache: 'no-store'
        }
    );
    const user = await res.json();
    return (
        <div>
            <MyProfile user={user}></MyProfile>
        </div>
    );
};

export default MyProfilePage;