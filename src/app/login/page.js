'use client'
import { Button, Col, Divider, Input, Row } from 'antd';
import React from 'react';
import loginImage from '../../assets/images/login.png'
import Image from 'next/image';
import { useForm } from 'react-hook-form';



const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

    };
    return (
        <Row justify="center" align='middle' style={{ minHeight: '100vh' }}>
            <Col sm={24} md={12} lg={10}>
                <Image src={loginImage} alt='login Image' sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }} />
            </Col>
            <Col sm={24} md={10} lg={8}>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-6 shadow-lg rounded ">
                        <h1 className='text-2xl pb-6 text-center'>Login</h1>
                        <div className='mb-4'>
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full mt-2  p-3 border border-gray-500 rounded-md"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required",
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid email",
                                    },
                                })}
                            />
                            {errors.email?.type === "required" && (
                                <span className="label-text-alt text-red-500 text-sm">
                                    {errors.email.message}
                                </span>
                            )}
                            {errors.email?.type === "pattern" && (
                                <span className="label-text-alt text-red-500 text-sm">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                        <div className='mb-4'>
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full mt-2 p-3 border border-gray-500 rounded-md"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password should be contains 6 characters",
                                    },
                                })}
                            />
                            {errors.password?.type === "required" && (
                                <span className="label-text-alt text-red-500 text-sm">
                                    {errors.password.message}
                                </span>
                            )}
                            {errors.password?.type === "minLength" && (
                                <span className="label-text-alt text-red-500 text-sm">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>
                        <Button type='primary' block size='large' htmlType='submit'>Submit</Button>
                        <Divider plain>or</Divider>
                        <Button type='primary' block size='large' htmlType='submit' className='flex items-center justify-center gap-2 font-semibold w-full text-black' ghost>
                            <Image
                                src='https://cdn-icons-png.flaticon.com/512/2965/2965278.png'
                                sizes="100vw"
                                width={30}
                                height={30}
                                alt="product image"
                            />
                            <p>Continue With Google</p>
                        </Button>
                    </form>
                </div>
            </Col>
        </Row>
    );
};

export default LoginPage;