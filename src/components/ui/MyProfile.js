'use client'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.auth";

const MyProfile = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='flex flex-col justify-center items-center min-h-[100vh]'>
            <h1 className="text-xl font-semibold text-black"><span>Name:</span>{user?.displayName}</h1>
        </div>
    );
};

export default MyProfile;