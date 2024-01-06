'use client'

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { ArrowLeftOutlined, EditOutlined } from "@ant-design/icons";
import auth from "../../firebase/firebase.auth";
import Image from "next/image";
import { Avatar, Button } from "antd";
const MyProfile = ({ user: userInfo }) => {
    const [user] = useAuthState(auth);
    console.log(user);
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

    const [currentImage, setCurrentImage] = useState(userInfo?.img || user?.photoURL || "https://i.ibb.co/SRF75vM/avatar.png");


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
        <div className="bg-gray-900 lg:p-6 md:p-6 p-4 rounded-xl text-white lg:h-screen">
            <div className="flex justify-between items-center pb-4">
                <h1 className="text-2xl ">
                    My Profile
                </h1>
                <Button
                    onClick={handleEdit}
                    type='link'
                >

                    <EditOutlined />
                    EDIT
                </Button>
            </div>
            <hr />
            {!edit && (
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 py-10 gap-y-8">
                    <div className=" flex flex-col justify-center items-center">
                        <Avatar src={userInfo?.img || user?.photoURL || "https://i.ibb.co/SRF75vM/avatar.png"} size={180} />
                        <h1 className="text-2xl mt-6">
                            {userInfo?.name || user?.displayName}
                        </h1>
                    </div>
                    <div>
                        {/* <p className="text-gray-600 pb-2 font-semibold text-md">Full Name</p>
                        <h1 className="text-xl pb-6">
                            {userInfo?.name || user?.displayName}
                        </h1> */}
                        <p className="text-gray-600 pb-2 font-semibold">Email</p>
                        <h1 className="text-xl pb-6">{user?.email}</h1>
                        <p className="text-gray-600 pb-2 font-semibold">Phone</p>
                        {userInfo?.phone ? (
                            <h1 className="text-xl pb-6">{userInfo?.phone}</h1>
                        ) : (
                            <Button onClick={handleEdit} type='link'>
                                Add now +
                            </Button>
                        )}
                        <p className="text-gray-600 pb-2 font-semibold">Address</p>
                        {userInfo?.state || userInfo?.city || userInfo?.country ? (
                            <h1 className="text-xl pb-6">
                                {userInfo?.state}, {userInfo?.city}, {userInfo?.country}
                            </h1>
                        ) : (
                            <Button onClick={handleEdit} type="link">
                                Add now +
                            </Button>
                        )}
                    </div>
                </div>
            )}
            {edit && (
                <div>
                    <ArrowLeftOutlined onClick={reverseEdit} className="py-4" />

                    <div className="flex flex-col justify-center items-center">
                        <div className="pb-10 lg:w-8/12 md:w-10/12 w-full">
                            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex lg:flex-row flex-col gap-4 justify-center items-center">
                                    <div className="form-control w-full max-w-x mb-2">
                                        <label>
                                            <span className=" text-gray-600 font-semibold">
                                                Full Name
                                            </span>
                                        </label>
                                        <input
                                            className="p-3 rounded border border-slate-950 w-full max-w-x my-2"
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
                                    <div className="form-control w-full max-w-x mb-2">
                                        <label>
                                            <span className=" text-gray-600 font-semibold">
                                                Email
                                            </span>
                                        </label>
                                        <input
                                            className="p-3 text-white rounded border border-slate-950 w-full max-w-x my-2"
                                            type="text"
                                            disabled
                                            defaultValue={userInfo?.email}
                                            {...register("email", {
                                            })}
                                        />
                                    </div>
                                </div>

                                <div className="flex lg:flex-row flex-col gap-4 justify-center items-center">
                                    <div className="form-control w-full max-w-x mb-2">
                                        <label >
                                            <span className=" text-gray-600 font-semibold">
                                                Phone Number
                                            </span>
                                        </label>
                                        <input
                                            className="p-3 rounded border border-slate-950 w-full max-w-x my-2"
                                            placeholder="Phone"
                                            type="text"
                                            defaultValue={userInfo?.phone}
                                            {...register("phone", {

                                            })}
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-x mb-2">
                                        <label>
                                            <span className=" text-gray-600 font-semibold">
                                                City
                                            </span>
                                        </label>
                                        <input
                                            className="p-3 rounded border border-slate-950 w-full max-w-x my-2"
                                            placeholder="City"
                                            type="text"
                                            defaultValue={userInfo?.city}
                                            {...register("city", {

                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="flex lg:flex-row flex-col gap-4 justify-center items-center">
                                    <div className="form-control w-full max-w-x mb-2">
                                        <label>
                                            <span className=" text-gray-600 font-semibold">
                                                State
                                            </span>
                                        </label>
                                        <input
                                            className="p-3 rounded border border-slate-950 w-full max-w-x my-2"
                                            placeholder="State"
                                            type="text"
                                            defaultValue={userInfo?.state}
                                            {...register("state", {

                                            })}
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-x mb-2">
                                        <label>
                                            <span className=" text-gray-600 font-semibold">
                                                Country
                                            </span>
                                        </label>
                                        <input
                                            className="p-3 rounded border border-slate-950 w-full max-w-x my-2"
                                            placeholder="Country"
                                            type="text"
                                            defaultValue={userInfo?.country}
                                            {...register("country", {

                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="flex lg:flex-row flex-col gap-4 justify-center lg:items-center mt-2">
                                    <div>
                                        <Avatar src={currentImage} size={120} className="" />
                                    </div>
                                    <div className="form-control w-full max-w-x">
                                        <label className="label">
                                            <span className="label-text text-gray-600 font-semibold">Profile Image</span>
                                        </label>
                                        <input
                                            type="file"
                                            placeholder="Image"
                                            className="input input-bordered input-warning w-full max-w-x mt-2"
                                            {...register("image", {
                                                onChange: (e) => {
                                                    const file = e.target.files[0];
                                                    if (file) {
                                                        const reader = new FileReader();
                                                        reader.onloadend = () => {
                                                            setCurrentImage(reader.result);
                                                        };
                                                        reader.readAsDataURL(file);
                                                    } else {
                                                        setCurrentImage(currentImage);
                                                    }
                                                },

                                            })}
                                        />
                                    </div>
                                </div>

                                <div className="justify-end flex">
                                    <input
                                        className="bg-blue-500 p-2 rounded  text-white font-semibold cursor-pointer border-0"
                                        name="submit"
                                        type="submit"
                                        value="Save Changes"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyProfile;
