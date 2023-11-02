'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import styles from '../../styles/Featured.module.css'
import Image from 'next/image';
import { Avatar, Button } from 'antd';
import { useRouter } from 'next/navigation';

const FeaturedServices = ({ services }) => {
    const router = useRouter()
    return (
        <div className='bg-sky-900 pb-12'>
            <div>
                <p className="lg:text-6xl md:text-5xl text-4xl pt-16 bg-sky-900 text-center text-white font-semibold">Explore Our <span className='text-yellow-500'>Services</span></p>
            </div>
            <Swiper
                className="flex justify-center items-center mySwiper bg-sky-900 p-16"
                slidesPerView={1}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
            >
                {
                    services.map(service => (
                        <SwiperSlide key={service.id} className="rounded bg-white">
                            <div className='flex flex-col justify-center items-center p-3'>
                                <Avatar size={250} src={service?.image} shape="square" />
                                <p className='text-xl font-semibold my-3'>{service.title}</p>
                                <p className="text-xl text-yellow-500 font-bold ">{service?.pricing}</p>
                                <p className='text-center my-3 h-14'>{service.description}</p>
                                <Button type='primary' className='mb-4 ' onClick={() => router.push(`/services/${service._id}`)}
                                >View Details</Button>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default FeaturedServices;