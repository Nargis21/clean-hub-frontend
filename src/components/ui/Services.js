'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import StarRating from './StarRating';
import { useRouter } from 'next/navigation';
import { Button } from 'antd';

const Services = ({ services }) => {
    const router = useRouter()
    return (
        <div className="p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 bg-gray-200 ">
            {services?.map((service) => (
                <div key={service._id} className="rounded-lg flex flex-col items-center justify-between p-5 shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all bg-white text-black underline-none">
                    <Image
                        onClick={() => router.push(`services/${service._id}`)}
                        src={service?.image}
                        width={300}
                        height={200}
                        responsive
                        alt="service image"
                        className='cursor-pointer'
                    />
                    <p className="text-xl font-semibold my-3 flex items-start w-full">{service?.title}</p>

                    <div className='flex justify-between w-full items-center mb-2'>
                        <p className="text-xl text-indigo-500 font-bold">{service?.pricing}</p>
                        <StarRating rating={service?.rating} />
                    </div>
                    <div className='flex justify-between w-full items-center mb-4'>
                        <p>Location: <span className='font-semibold'>{service?.location}</span></p>
                        <Link className='text-sky-500' href={`/services/${service._id}`}>View Details</Link>
                    </div>
                    <p className='px-4 py-2 rounded-full bg-indigo-300 font-semibold mb-4'>{service?.availabilityInfo}</p>
                    <Button type='primary' size='large' block onClick={() => router.push(`/booking/${service._id}`)}
                    >Book Now</Button>
                </div>
            ))}
        </div>
    );
};

export default Services;
