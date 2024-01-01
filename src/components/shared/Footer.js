'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import logo from "../../assets/images/logo.png"
import { FacebookFilled, TwitterSquareFilled, InstagramFilled, RightCircleFilled, HomeFilled, MailFilled, PhoneFilled } from "@ant-design/icons"
import Link from "next/link"

const Footer = () => {
    const router = useRouter()
    return (
        <div className='bg-slate-900 px-12 lg:pt-24 md:pt-16 pt-10 pb-12'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 pb-4'>
                <div className='lg:text-left md:text-left text-center'>
                    <div className='flex items-center lg:justify-start md:justify-start justify-center'>
                        <Image
                            onClick={() => router.push('/')}
                            src={logo}
                            alt="logo image"
                            width={60}
                        />
                        <p className='text-2xl text-white font-semibold'>Clean Hub</p>
                    </div>
                    <p className='text-gray-400 text-sm'>Revitalize Your Space with Our Expert Cleaning Services,Spotless Cleanliness, Every Time Your Trusted Cleaning Partner</p>
                    <p className='text-xl font-semibold mt-6 text-white'>Follow Us On:</p>
                    <div className=' space-x-3 mt-2 mb-4'>
                        <Link href='/' className='text-xl text-yellow-500'><FacebookFilled /></Link>
                        <Link href='/' className='text-xl text-yellow-500'><TwitterSquareFilled /></Link>
                        <Link href='/' className='text-xl text-yellow-500'><InstagramFilled /></Link>
                    </div>
                </div>

                <div className='text-gray-400 lg:text-left md:text-left text-center'>
                    <p className='text-xl font-semibold text-white mb-4'>Services</p>
                    <p className='mb-2 flex items-center lg:justify-start md:justify-start justify-center  gap-2 text-sm'><RightCircleFilled className='text-yellow-500 text-xl' /> Standard Cleaning</p>
                    <p className='mb-2 flex items-center lg:justify-start md:justify-start justify-center  gap-2 text-sm'><RightCircleFilled className='text-yellow-500 text-xl' /> Residential Cleaning</p>
                    <p className='mb-2 flex items-center lg:justify-start md:justify-start justify-center  gap-2 text-sm'><RightCircleFilled className='text-yellow-500 text-xl' /> Commercial Cleaning</p>
                </div>
                <div className=' lg:text-left md:text-left text-center'>
                    <p className='text-xl font-semibold text-white mb-4'>Links</p>
                    <Link href='/services' className='text-gray-400 mb-2 text-sm'>Services</Link> <br /><br />
                    <Link href='/privacy-policy' className='text-gray-400 mb-2 text-sm'>Privacy Policy</Link><br /><br />
                    <Link href='/terms-and-condition' className='text-gray-400 mb-2 text-sm'>Terms and Conditions</Link><br /><br />
                    <Link href='/cancellation-policy' className='text-gray-400 mb-2 text-sm'>Cancellation Policy</Link><br /><br />
                </div>
                <div className='text-gray-400 lg:text-left md:text-left text-center'>
                    <p className='text-xl font-semibold text-white mb-4'>Information</p>
                    <p className='mb-2 flex items-center lg:justify-start md:justify-start justify-center  gap-2 text-sm'><HomeFilled className='text-yellow-500 text-xl' /> 59 Street, B4 Apartment, Australia</p>
                    <p className='mb-2 flex items-center lg:justify-start md:justify-start justify-center  gap-2 text-sm'><PhoneFilled className='text-yellow-500 text-xl' />  +985-8844-000</p>
                    <p className='mb-2 flex items-center lg:justify-start md:justify-start justify-center  gap-2 text-sm'><MailFilled className='text-yellow-500 text-xl' /> info@cleanhub.com</p>
                </div>
            </div>
            <hr />
            <div className='pt-10 text-center text-gray-400 text-sm'>
                <p>Copyright © {new Date().getFullYear()} Clean Hub. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;