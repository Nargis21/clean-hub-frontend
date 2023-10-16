'use client'
import Image from "next/image";
import StarRating from "./StarRating";
import { Button } from "antd";
import { useRouter } from 'next/navigation';

const ServiceDetails = ({ service }) => {
    const router = useRouter()
    return (
        <div className="lg:flex mx-auto items-center gap-10 border-b border-gray-300 lg:w-[80%] md:w-[90%] w-[95%] pt-12">
            <div className="lg:w-[50%]">
                <Image
                    src={service?.image}
                    width={500}
                    height={200}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    responsive
                    alt="service image"
                />
            </div>
            <div className="lg:w-[50%] space-y-2">
                <h1 className="text-3xl ">{service?.title}</h1>
                <p className="text-xl text-indigo-500 font-bold">{service?.pricing}</p>
                <p><span className="font-bold">Location: </span>{service?.location}</p>
                <p><span className="font-bold">Status: </span>{service?.availabilityInfo}</p>
                <p><span className="font-bold">Description: </span>{service?.description}</p>
                <p><span className="font-bold">Additional Details: </span>{service?.additionalDetails}</p>
                <div className="flex items-center gap-2"><span className="font-bold">Ratings: </span><StarRating rating={service?.rating} /></div>
                <Button type='primary' size='large' onClick={() => router.push(`/booking/${service._id}`)}
                >Book Now</Button>
            </div>
        </div>
    );
};

export default ServiceDetails;
