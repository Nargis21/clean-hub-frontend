'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Avatar, Button, Image, Tooltip } from 'antd';
import Link from 'next/link';
import { RightCircleTwoTone, } from '@ant-design/icons'
import StarRating from './StarRating';
import { FaLocationDot } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';


const FeaturedServices = ({ services }) => {
    const router = useRouter()
    return (
        <div className='bg-sky-900 pb-12'>
            <div className="lg:text-6xl md:text-5xl text-4xl pt-16 bg-sky-900 text-center text-white font-semibold">
                <p data-aos="zoom-in">Explore Our <span className='text-yellow-500'>Services</span></p>
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
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
            >
                {
                    services.map(service => (
                        <SwiperSlide key={service.id} className="">
                            <div key={service._id} className="flex flex-col items-center justify-between p-5 shadow-md hover:shadow-2xl hover:scale-[102%] transition-all text-black underline-none bg-white rounded">
                                <Tooltip title={service?.availabilityInfo} color='gold'>
                                    <div className='flex justify-between gap-4'>
                                        <div>
                                            <p className='text-xl font-semibold mb-2 text-blue-950'>{service?.title}</p>
                                            <p className='font-semibold text-sm'>{service?.description}</p>

                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-1'>
                                            <p className='flex justify-center items-center text-xl font-bold text-blue-950 rounded-full bg-yellow-500 h-20 w-20'>{service?.pricing}</p>
                                            <StarRating rating={service?.rating} />
                                        </div>
                                    </div>
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
                                    <div className='flex justify-between w-full items-center mb-4'>
                                        <p className='text-yellow-500 flex justify-center gap-2'><FaLocationDot /> <span className='text-black font-semibold'>{service?.location}</span></p>

                                        <Link href={`/services/${service._id}`}>
                                            <Button type='link' className='font-bold'>View Details</Button>
                                        </Link>
                                    </div>
                                    <Button type='primary' size='large' block onClick={() => router.push(`/booking/${service._id}`)}
                                    ><div className='flex items-center justify-center gap-1'>
                                            <p >Book Now</p> <RightCircleTwoTone className='text-xl' />
                                        </div>
                                    </Button>

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