'use client'
import { Button, Checkbox, Col, Divider, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import loginImage from '../../assets/images/login.png'
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import auth from '../../firebase/firebase.auth';
import { useRouter } from 'next/navigation';
import useToken from '../../hooks/useToken';
import Link from 'next/link';
import Loading from "../../components/shared/Loading"

const LoginPage = () => {
    const [agreed, setAgreed] = useState(false);

    const handleAgreedChange = (e) => {
        setAgreed(e.target.checked);
    };
    const router = useRouter();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [token] = useToken(user || googleUser)

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
    };

    useEffect(() => {
        if (token) {
            router.push("/profile");
        }
    }, [token, router])

    let signInError
    if (error || googleError || updateError) {
        signInError = <span className='text-red-500' >{error?.message || googleError?.message}</span>
    }
    if (loading || googleLoading || updating) {
        return <Loading />
    }

    return (
        <Row justify="center" align='middle' style={{ minHeight: '100vh' }} className='bg-sky-900'>
            <Col sm={24} md={12} lg={10}>
                <Image src={loginImage} alt='login Image' sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }} />
            </Col>
            <Col sm={24} md={10} lg={8}>
                <div className="p-6 shadow-lg bg-white">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-2xl pb-6 text-center'>Sign Up</h1>
                        <div className='mb-4'>
                            <label>Your Name</label>
                            <input
                                type="name"
                                placeholder="Name"
                                className="w-full mt-2  p-3 border border-gray-500 rounded-md"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required",
                                    },
                                })}
                            />
                            {errors.name?.type === "required" && (
                                <span className="label-text-alt text-red-500 text-sm">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>
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
                        <div className='mb-2'>
                            {signInError}
                        </div>
                        <Checkbox
                            checked={agreed}
                            onChange={handleAgreedChange}
                            className='mb-4'
                        >
                            I agree to the <Link href='/terms-and-condition'>Terms and Conditions</Link> and <Link href='/privacy-policy'>Privacy Policy</Link>
                        </Checkbox>
                        <Button type='primary' block size='large' disabled={!agreed} htmlType='submit'>Sign Up</Button>
                    </form>
                    <p className='text-sm pt-2'>Already have an Account? <Link className='text-sky-500' href='/login'>Please Login</Link></p>
                    <Divider plain>or</Divider>
                    <Button onClick={() => signInWithGoogle()} type='primary' block size='large' htmlType='submit' className='flex items-center justify-center gap-2 font-semibold w-full text-black' ghost>
                        <Image
                            src='https://cdn-icons-png.flaticon.com/512/2965/2965278.png'
                            sizes="100vw"
                            width={30}
                            height={30}
                            alt="product image"
                        />
                        <p>Continue With Google</p>
                    </Button>
                </div>
            </Col>
        </Row>
    );
};

export default LoginPage;