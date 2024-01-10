'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import StarRating from './StarRating';
import { useRouter } from 'next/navigation';
import { Avatar, Button, Tooltip } from 'antd';
import { RightCircleTwoTone } from '@ant-design/icons';
import { FaLocationDot } from "react-icons/fa6";


const Services = ({ services }) => {
    const router = useRouter()
    return (
        <div className="p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 bg-sky-900 ">
            {services?.map((service) => (

                <div key={service._id} className="flex flex-col items-center justify-between p-8 pt-10 shadow-md hover:shadow-2xl hover:scale-[102%] transition-all text-black underline-none bg-white rounded">
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
            ))}
        </div>
    );
};

export default Services;
