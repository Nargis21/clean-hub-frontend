'use client'
import Link from 'next/link';
import Image from 'next/image';
import BannerImage from '../../assets/images/banner4.png'
import { Button } from 'antd';
import { RightCircleTwoTone, RightCircleFilled } from '@ant-design/icons'

const Banner = () => {
    return (
        <div className='flex flex-col items-center gap-10 lg:flex-row lg:py-16 py-8 lg:px-12 md:px-6 px-2 bg-blue-950 h-screen'>
            <div className='w-full text-white text-center lg:text-left'>
                <h1 className='lg:text-7xl md:text-5xl text-3xl mb-2'>Professional</h1>
                <p className='font-thin lg:text-6xl md:text-4xl text-2xl mb-4'>Cleaning service</p>
                <p className='mb-4'>Revitalize Your Space with Our Expert Cleaning Services,Spotless Cleanliness, Every Time Your Trusted Cleaning Partner</p>
                <p className='mb-2 flex items-center lg:justify-start justify-center  gap-2 font-semibold'><RightCircleFilled className='text-yellow-500 text-xl' /> Standard Cleaning</p>
                <p className='mb-2 flex items-center lg:justify-start justify-center  gap-2 font-semibold'><RightCircleFilled className='text-yellow-500 text-xl' /> Residential Cleaning</p>
                <p className='mb-2 flex items-center lg:justify-start justify-center  gap-2 font-semibold'><RightCircleFilled className='text-yellow-500 text-xl' /> Commercial Cleaning</p>

                <Link href='/services'>
                    <Button type='primary' size='large' className=' mt-4'>
                        <div className='flex items-center gap-1'>
                            <p > Explore Now</p> <RightCircleTwoTone className='text-xl' />
                        </div>
                    </Button>
                </Link>

            </div>
            <div className='w-full text-center'>
                <Image src={BannerImage} alt='login Image'></Image>
            </div>
        </div>
    );
};

export default Banner;