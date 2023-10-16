import Link from 'next/link';
import Image from 'next/image';
import BannerImage from '../../assets/images/banner.jpg'
import { Button } from 'antd';

const Banner = () => {
    return (
        <div className='flex flex-col items-center gap-5 lg:flex-row lg:py-16 py-8 lg:px-12 md:px-6 px-2'>
            <div className='w-full font-semibold text-gray-600 text-center lg:text-left'>
                <h1 className='lg:text-6xl text-4xl  leading-[5rem] text-gray-600'>Professional
                    Cleaning service</h1>
                <p className='mt-4'>Revitalize Your Space with Our Expert Cleaning Services,Spotless Cleanliness, Every Time Your Trusted Cleaning Partner</p>
                <Link href='/services'>
                    <Button type='primary' size='large' className=' mt-4'>Explore Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    </Button>
                </Link>

            </div>
            <div className='w-full'>
                <Image src={BannerImage} alt='login Image' sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }} />
            </div>
        </div>
    );
};

export default Banner;