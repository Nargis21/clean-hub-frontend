'use client'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.auth";
import Image from 'next/image';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='flex flex-col justify-center items-center min-h-[100vh] '>
            <Image src='https://cdn-icons-png.flaticon.com/512/9131/9131529.png' alt='login Image' sizes="100vw"
                height={150}
                width={150}
                className="mb-4"
            />
            <h1 className="text-xl font-semibold text-black mb-2">Name:{user?.displayName}</h1>
            <h1 className="text-xl font-semibold text-black mb-2">Email:{user?.email}</h1>
        </div>
    );
};

export default MyProfile;