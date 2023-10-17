'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import styles from '../../styles/Featured.module.css'
import Image from 'next/image';
import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'
import image4 from '../../assets/images/image4.jpg'
import image5 from '../../assets/images/image5.jpg'
import image6 from '../../assets/images/image6.jpg'
import image7 from '../../assets/images/image7.jpg'
import image8 from '../../assets/images/image8.jpg'
import image9 from '../../assets/images/image9.jpg'

const FeaturedServices = () => {
    return (
        <div className='pt-56 bg-gray-200'>
            <div>
                <p className="lg:text-6xl md:text-5xl text-4xl py-20 bg-blue-950 text-center text-white font-semibold">Meet Our <span className='text-yellow-500'>Teams</span></p>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className=" mySwiper p-12 bg-gray-200 w-[100%] py-16"
            >
                <SwiperSlide className={`${styles.swiperSlide}  shadow-lg`}>
                    <div >
                        <Image
                            src={image1}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            alt="service image"
                        />
                        <div className='text-center font-semibold text-white bg-sky-900 py-6'>
                            <p className='text-2xl  '>Sarah Anderson</p>
                            <p className=' text-yellow-500 text-xl pt-2'>Head Cleaner</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide}`}>
                    <div >
                        <Image
                            src={image2}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            alt="service image"
                        />
                        <div className='text-center font-semibold text-white bg-sky-900 py-6'>
                            <p className='text-2xl  '>Emily Martinez</p>
                            <p className=' text-yellow-500 text-xl pt-2'>Glass Cleaner</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide}`}>
                    <div >
                        <Image
                            src={image3}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            alt="service image"
                        />
                        <div className='text-center font-semibold text-white bg-sky-900 py-6'>
                            <p className='text-2xl  '>Olivia Johnson</p>
                            <p className=' text-yellow-500 text-xl pt-2'>Office Cleaner</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide}`}>
                    <div >
                        <Image
                            src={image4}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            alt="service image"
                        />
                        <div className='text-center font-semibold text-white bg-sky-900 py-6'>
                            <p className='text-2xl  '>Mia Brown</p>
                            <p className=' text-yellow-500 text-xl pt-2'>House Cleaner</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide}`}>
                    <div >
                        <Image
                            src={image5}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            alt="service image"
                        />
                        <div className='text-center font-semibold text-white bg-sky-900 py-6'>
                            <p className='text-2xl  '>Ava White</p>
                            <p className=' text-yellow-500 text-xl pt-2'>Elite Dust Buster</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide}`}>
                    <div >
                        <Image
                            src={image6}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            alt="service image"
                        />
                        <div className='text-center font-semibold text-white bg-sky-900 py-6'>
                            <p className='text-2xl  '>Isabella Davis</p>
                            <p className=' text-yellow-500 text-xl pt-2'>Hygiene Supervisor</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide}`}>
                    <div >
                        <Image
                            src={image7}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            alt="service image"
                        />
                        <div className='text-center font-semibold text-white bg-sky-900 py-6'>
                            <p className='text-2xl  '>Sophia Taylor</p>
                            <p className=' text-yellow-500 text-xl pt-2'>Lead Maid</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide}`}>
                    <div >
                        <Image
                            src={image8}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            alt="service image"
                        />
                        <div className='text-center font-semibold text-white bg-sky-900 py-6'>
                            <p className='text-2xl  '>Grace Wilson</p>
                            <p className=' text-yellow-500 text-xl pt-2'>Kitchen Cleaner</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide}`}>
                    <div >
                        <Image
                            src={image9}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            alt="service image"
                        />
                        <div className='text-center font-semibold text-white bg-sky-900 py-6'>
                            <p className='text-2xl  '>Chloe Miller</p>
                            <p className=' text-yellow-500 text-xl pt-2'>Housekeeper</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FeaturedServices;