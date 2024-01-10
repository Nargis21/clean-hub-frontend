'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import StarRating from './StarRating';
import { useRouter } from 'next/navigation';
import { Avatar, Button, Tooltip } from 'antd';
import { DoubleRightOutlined, RightCircleTwoTone } from '@ant-design/icons';
import { FaLocationDot } from "react-icons/fa6";


const Services = ({ services }) => {
    const router = useRouter()
    return (
        <div className="p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 bg-sky-900 ">
            {services?.map((service) => (

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
            ))}
        </div>
    );
};

export default Services;
