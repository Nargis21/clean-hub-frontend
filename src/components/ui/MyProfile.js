'use client'

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { ArrowLeftOutlined } from "@ant-design/icons";
import auth from "../../firebase/firebase.auth";
import Image from "next/image";
const MyProfile = ({ user: userInfo }) => {
    const [user] = useAuthState(auth);
    const [edit, setEdit] = useState(null);
    const handleEdit = () => {
        setEdit("set");
    };
    const reverseEdit = () => {
        setEdit(null);
    };

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const imageStoragekey = '68cb5fb5d48334a60f021c30aff06ada'
        const image = data.image[0]
        console.log(image, "Image");
        const formData = new FormData()
        formData.append('image', image)
        fetch(`https://api.imgbb.com/1/upload?key=${imageStoragekey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const userData = {
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        city: data.city,
                        state: data.state,
                        country: data.country,
                        img: img
                    }

                    fetch(`https://clean-hub-backend.vercel.app/user/update/${user?.email}`, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(userData),
                    })
                        .then((res) => res.json())
                        .then(() => {
                            reset();
                            toast.success("Profile Updated!");
                            setEdit(null);
                        });
                } else {
                    const userData = {
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        city: data.city,
                        state: data.state,
                        country: data.country,
                        img: userInfo?.img
                    }

                    fetch(`https://clean-hub-backend.vercel.app/user/update/${user?.email}`, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(userData),
                    })
                        .then((res) => res.json())
                        .then(() => {
                            reset();
                            toast.success("Profile Updated!");
                            setEdit(null);
                        });
                }
            })
    };

    return (
        <div className="p-10">
            <h1 className="text-3xl text-red-900 pb-6 border-b-2 border-gray-500">
                My Profile
            </h1>
            {!edit && (
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="py-10 flex flex-col justify-center items-center">
                        <div className="avatar">
                            <div className="w-48 rounded-full">
                                <Image src={userInfo?.img || "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"} alt='login Image' sizes="100vw"
                                    height={150}
                                    width={150}
                                    className="mb-4"
                                />
                            </div>
                        </div>
                        <button
                            onClick={handleEdit}
                            className="btn btn-link normal-case"
                        >
                            Edit Profile
                        </button>
                    </div>
                    <div className="py-10 ">
                        <h1 className="text-gray-600 pb-2 font-semibold">Full Name</h1>
                        <h1 className="text-xl text-gray-800 pb-6">
                            {userInfo?.name || user?.displayName}
                        </h1>
                        <h1 className="text-gray-600 pb-2 font-semibold">Email</h1>
                        <h1 className="text-xl text-gray-800 pb-6">{user?.email}</h1>
                        <h1 className="text-gray-600 pb-2 font-semibold">Phone</h1>
                        {userInfo?.phone ? (
                            <h1 className="text-xl text-gray-800 pb-6">{userInfo?.phone}</h1>
                        ) : (
                            <button onClick={handleEdit} className="btn btn-link normal-case">
                                Add now +
                            </button>
                        )}
                        <h1 className="text-gray-600 pb-2 font-semibold">Address</h1>
                        {userInfo?.state || userInfo?.city || userInfo?.country ? (
                            <h1 className="text-xl text-gray-800 pb-6">
                                {userInfo?.state}, {userInfo?.city}, {userInfo?.country}
                            </h1>
                        ) : (
                            <button onClick={handleEdit} className="btn btn-link normal-case">
                                Add now +
                            </button>
                        )}
                    </div>
                </div>
            )}
            {edit && (
                <div>
                    <button className="pt-6 text-xl font-xl" onClick={reverseEdit}>
                        <ArrowLeftOutlined />
                    </button>
                    <div className="flex flex-col justify-center items-center text-center backCol">
                        <h1 className="text-2xl meriFont pb-6 text-center ">
                            Profile Information
                        </h1>
                        <div className="pb-10 lg:w-6/12 md:w-8/12 w-full">
                            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full max-w-x">
                                    <label className="label">
                                        <span className="label-text text-gray-600 font-semibold">
                                            Full Name
                                        </span>
                                    </label>
                                    <input
                                        className="input input-bordered input-warning w-full max-w-x mb-2"
                                        placeholder="Name"
                                        type="text"
                                        defaultValue={userInfo?.name || user?.displayName}
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: "Name is Required",
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-x">
                                    <label className="label">
                                        <span className="label-text text-gray-600 font-semibold">
                                            Email
                                        </span>
                                    </label>
                                    <input
                                        className="input input-bordered input-warning w-full max-w-x mb-2"
                                        placeholder="Name"
                                        type="text"
                                        disabled
                                        defaultValue={userInfo?.email}
                                        {...register("email", {
                                        })}
                                    />
                                </div>
                                <div className="form-control w-full max-w-x">
                                    <label className="label">
                                        <span className="label-text text-gray-600 font-semibold">
                                            Phone Number
                                        </span>
                                    </label>
                                    <input
                                        className="input input-bordered input-warning w-full max-w-x mb-2"
                                        placeholder="Phone"
                                        type="text"
                                        defaultValue={userInfo?.phone}
                                        {...register("phone", {

                                        })}
                                    />
                                </div>
                                <div className="form-control w-full max-w-x">
                                    <label className="label">
                                        <span className="label-text text-gray-600 font-semibold">
                                            City
                                        </span>
                                    </label>
                                    <input
                                        className="input input-bordered input-warning w-full max-w-x mb-4"
                                        placeholder="City"
                                        type="text"
                                        defaultValue={userInfo?.city}
                                        {...register("city", {

                                        })}
                                    />
                                </div>
                                <div className="form-control w-full max-w-x">
                                    <label className="label">
                                        <span className="label-text text-gray-600 font-semibold">
                                            State
                                        </span>
                                    </label>
                                    <input
                                        className="input input-bordered input-warning w-full max-w-x mb-4"
                                        placeholder="State"
                                        type="text"
                                        defaultValue={userInfo?.state}
                                        {...register("state", {

                                        })}
                                    />
                                </div>
                                <div className="form-control w-full max-w-x">
                                    <label className="label">
                                        <span className="label-text text-gray-600 font-semibold">
                                            Country
                                        </span>
                                    </label>
                                    <input
                                        className="input input-bordered input-warning w-full max-w-x mb-4"
                                        placeholder="Country"
                                        type="text"
                                        defaultValue={userInfo?.country}
                                        {...register("country", {

                                        })}
                                    />
                                </div>
                                <div className="form-control w-full max-w-x">
                                    <label className="label">
                                        <span className="label-text text-gray-600 font-semibold">Photo</span>
                                    </label>
                                    <input
                                        type="file"
                                        placeholder="Image"
                                        className="input input-bordered input-warning w-full max-w-x mb-4"
                                        {...register("image", {

                                        })}
                                    />
                                </div>
                                <input
                                    className="bg-red-900 p-2 rounded-lg text-white font-semibold w-full max-w-sm cursor-pointer"
                                    name="submit"
                                    type="submit"
                                    value="Save Changes"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyProfile;
