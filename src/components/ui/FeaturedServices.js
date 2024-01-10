'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Avatar, Button, Image, Tooltip } from 'antd';
import Link from 'next/link';
import { DoubleRightOutlined, RightCircleTwoTone, } from '@ant-design/icons'
import StarRating from './StarRating';
import { FaLocationDot } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';


const FeaturedServices = ({ services }) => {
    const router = useRouter()
    return (
        <div className='bg-sky-900 pb-12'>
            <div className="lg:text-6xl md:text-5xl text-4xl pt-20 bg-sky-900 text-center text-white font-semibold">
                <p data-aos="zoom-in">Explore Our <span className='text-yellow-500'>Services</span></p>
            </div>
            <Swiper
                className="flex justify-center items-center mySwiper bg-sky-900 px-16 py-20"
                slidesPerView={1}
                spaceBetween={5}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
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
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination, Autoplay]}
            >
                {
                    services.map(service => (
                        <SwiperSlide key={service.id} className="">
                            <div key={service._id} className="flex flex-col items-center justify-between  shadow-md hover:shadow-2xl hover:scale-[102%] transition-all text-black underline-none bg-white rounded">
                                <Tooltip title={service?.availabilityInfo} color='gold'>
                                    <div className='flex justify-between items-center gap-4 bg-blue-950 text-white p-6'>
                                        <div>
                                            <p className='text-2xl font-semibold mb-2 '>{service?.title}</p>
                                            <p className='text-yellow-500 flex gap-2'><FaLocationDot /> <span className='font-semibold'>{service?.location}</span></p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-1'>
                                            <p className='flex justify-center items-center text-xl font-bold text-blue-950 rounded-full bg-yellow-500 h-20 w-20'>{service?.pricing}</p>
                                            <StarRating rating={service?.rating} />
                                        </div>
                                    </div>
                                    <div className='p-6'>

                                        <div className='w-full text-center my-4'>
                                            <Image
                                                onClick={() => router.push(`services/${service._id}`)}
                                                src={service?.image}
                                                width={300}
                                                height={200}
                                                responsive
                                                alt="service image"
                                                className='cursor-pointer rounded'
                                            />
                                        </div>
                                        <div className='my-6 text-center'>

                                            <p className='font-semibold text-sm'>{service?.description} <Link href={`/services/${service._id}`} className='ml-0'>
                                                <span className='font-bold underline-none'>View more</span>
                                            </Link></p>

                                        </div>
                                        <Link href={`/booking/${service._id}`} className='no-underline'>
                                            <div className='flex items-center justify-center gap-1 text-white px-4 py-3 hover:bg-yellow-500 bg-blue-500 rounded'>
                                                <p >Book Now</p> <DoubleRightOutlined className='text-xl' />
                                            </div>
                                        </Link>

                                    </div>
                                </Tooltip>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default FeaturedServices;