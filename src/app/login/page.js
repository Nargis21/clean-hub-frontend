'use client'
import { Button, Divider, Tooltip, } from 'antd';
import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import loginImage from '../../assets/images/login.png'
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import auth from '../../firebase/firebase.auth';
import { useRouter } from 'next/navigation';
import useToken from '../../hooks/useToken'
import { toast } from 'react-toastify';
import Link from "next/link";
import Loading from '../../components/shared/Loading';


const LoginPage = () => {
    const router = useRouter();

    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    const [token] = useToken(user || googleUser)

    const handleResetPassword = async () => {
        const email = getValues('email')
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Email Send!')
        }
    }

    useEffect(() => {
        if (token) {
            router.push("/profile");
        }
    }, [token, router])


    let signInError
    if (error || googleError || resetError) {
        signInError = <span className='text-red-500'>{error?.message || googleError?.message}</span>
    }
    if (loading || googleLoading || sending) {
        return <Loading />
    }

    return (
        <div className='bg-sky-900 p-24'>
            <div className='flex lg:flex-row flex-col items-center gap-6 p-12 rounded-2xl bg-white w-100 h-auto'>
                <div>
                    <h1 className='text-4xl font-semibold text-center'>Welcome Back</h1>
                    <p className='pt-6 text-center'>New to <span className='font-semibold'>Clean Hub</span>? <Link className='no-underline text-sky-600' href='/register'>Create a new account</Link></p>
                    <Image src={loginImage} alt='login Image' sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </div>

                <div className="p-10 shadow-xl bg-white w-full">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <h1 className='text-2xl pb-6 text-center'>Login</h1>
                        <div className='my-4 p-6 shadow-lg text-center border-black border-2 flex justify-evenly '>
                            <Tooltip title="Email: admin@gmail.com
                                Password: 212121" color='geekblue' key='geekblue'>
                                <p className='cursor-pointer underline text-sky-600'>Admin Credentials</p>
                            </Tooltip>
                            <Tooltip title="Email: user@gmail.com
                                Password: 212121" color='geekblue' key='geekblue'>
                                <p className='cursor-pointer underline text-sky-600'>User Credentials</p>
                            </Tooltip>
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

                            <Button
                                type='link'
                                onClick={handleResetPassword}
                            ><p>Forget Password?</p></Button>

                        </div>
                        <div className='mb-2'>
                            {signInError}
                        </div>
                        <Button type='primary' block size='large' htmlType='submit'>Login</Button>
                    </form>
                    <Divider plain >or</Divider>
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
            </div>

        </div>
    );
};

export default LoginPage;