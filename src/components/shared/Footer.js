'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import logo from "../../assets/images/logo2.png"
import { FacebookFilled, TwitterSquareFilled, InstagramFilled, RightCircleFilled, HomeFilled, MailFilled, PhoneFilled } from "@ant-design/icons"
import Link from "next/link"

const Footer = () => {
    const router = useRouter()
    return (
        <div className='bg-slate-900 px-12 py-24'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 '>
                <div className='lg:text-left md:text-left text-center'>
                    <div className='flex items-center lg:justify-start md:justify-start justify-center gap-2'>
                        <Image
                            onClick={() => router.push('/')}
                            src={logo}
                            alt="logo image"
                        />
                        <p className='text-2xl text-white'>Clean Hub</p>
                    </div>
                    <p className='text-gray-400 my-4'>Revitalize Your Space with Our Expert Cleaning Services,Spotless Cleanliness, Every Time Your Trusted Cleaning Partner</p>
                    <p className='text-2xl font-semibold text-white'>Follow Us On:</p>
                    <div className='text-2xl text-yellow-500 space-x-3 my-4 cursor-pointer'>
                        <FacebookFilled />
                        <TwitterSquareFilled />
                        <InstagramFilled />
                    </div>
                </div>

                <div className='text-gray-400 lg:text-left md:text-left text-center'>
                    <p className='text-2xl font-semibold text-white mb-6'>Services</p>
                    <p className='mb-2 flex items-center lg:justify-start justify-center  gap-2 font-semibold'><RightCircleFilled className='text-yellow-500 text-xl' /> Standard Cleaning</p>
                    <p className='mb-2 flex items-center lg:justify-start justify-center  gap-2 font-semibold'><RightCircleFilled className='text-yellow-500 text-xl' /> Residential Cleaning</p>
                    <p className='mb-2 flex items-center lg:justify-start justify-center  gap-2 font-semibold'><RightCircleFilled className='text-yellow-500 text-xl' /> Commercial Cleaning</p>
                </div>
                <div className='space-y-3 lg:text-left md:text-left text-center'>
                    <p className='text-2xl font-semibold text-white mb-6'>Links</p>
                    <Link href='/services' className='text-gray-400 mb-2'>Services</Link> <br /><br />
                    <Link href='/privacy-policy' className='text-gray-400 mb-2'>Privacy Policy</Link><br /><br />
                    <Link href='/terms-and-condition' className='text-gray-400 mb-2'>Terms and Conditions</Link><br /><br />
                    <Link href='/cancellation-policy' className='text-gray-400 mb-2'>Cancellation Policy</Link><br /><br />
                </div>
                <div className='text-gray-400 lg:text-left md:text-left text-center'>
                    <p className='text-2xl font-semibold text-white mb-6'>Information</p>
                    <p className='mb-2 flex items-center lg:justify-start justify-center  gap-2 font-semibold'><HomeFilled className='text-yellow-500 text-xl' /> 59 Street, B4 Appartment, Australia</p>
                    <p className='mb-2 flex items-center lg:justify-start justify-center  gap-2 font-semibold'><PhoneFilled className='text-yellow-500 text-xl' />  +985-8844-000</p>
                    <p className='mb-2 flex items-center lg:justify-start justify-center  gap-2 font-semibold'><MailFilled className='text-yellow-500 text-xl' /> info@cleanix.com</p>
                </div>
            </div>
            <hr />
            <div className='pt-12 text-center text-gray-400'>
                <p>Copyright © 2023 Clean Hub. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;