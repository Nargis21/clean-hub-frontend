'use client'
import { Button } from "antd";
import { RightCircleTwoTone } from "@ant-design/icons"

const Package = () => {
    return (
        <div className="bg-sky-900">
            <div className="lg:text-6xl md:text-5xl text-4xl py-24 text-center text-white font-semibold">
                <p data-aos="zoom-in">Choose Your <span className='text-yellow-500'>Plan</span></p>
            </div>
            <div className="px-12 pb-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">

                <div className="lg:mt-12 flex flex-col items-center justify-between shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all bg-white pb-4 rounded-tr-none rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">

                    <div className="rounded-tl-3xl py-8 bg-blue-950 w-full flex flex-col items-center  font-semibold text-white">
                        <p className="text-5xl ">$59 <span className="text-xl">/mo</span></p>
                        <p className="p-3 mt-6 bg-yellow-500 text-xl w-[50%] rounded-full text-center">Commercial Plan</p>
                    </div>
                    <div className="text-center">
                        <p className="py-4 font-semibold text-gray-500">4 Bedrooms Cleaning</p>
                        <p className="py-4 font-semibold text-gray-500">Vacuming</p>
                        <p className="py-4 font-semibold text-gray-500">2 Bathroom Cleaning</p>
                        <p className="py-4 font-semibold text-gray-500">Window Cleaning</p>
                        <p className="py-4 font-semibold text-gray-500">2 Livingroom Cleaning</p>
                    </div>

                    <Button type='primary' block size='large' className="my-4 w-[50%]"
                    >
                        <div className='flex items-center gap-1 justify-center'>
                            <p >Book Now</p> <RightCircleTwoTone className='text-xl' />
                        </div>
                    </Button>
                </div>
                <div className="lg:mb-12 flex flex-col items-center justify-between shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all bg-white pb-4 rounded-tr-none rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">
                    <p className="rounded-tl-3xl p-4 font-semibold text-white bg-yellow-500 text-2xl w-full text-center">Standard Plan</p>
                    <div className="py-8 bg-blue-950 w-full flex flex-col items-center  ">
                        <div className=" mb-[-100px]">
                            <p className='flex justify-center items-center text-5xl font-bold text-white rounded-full bg-yellow-500 h-36 w-36'>$39 <span className="text-xl">/mo</span></p>
                        </div>
                    </div>
                    <div className="text-center mt-16">
                        <p className="py-4 font-semibold text-gray-500">2 Bedrooms Cleaning</p>
                        <p className="py-4 font-semibold text-gray-500">Vacuming</p>
                        <p className="py-4 font-semibold text-gray-500">2 Bathroom Cleaning</p>
                        <p className="py-4 font-semibold text-gray-500">Window Cleaning</p>
                        <p className="py-4 font-semibold text-gray-500">1 Livingroom Cleaning</p>
                    </div>

                    <Button type='primary' block size='large' className="my-4 w-[50%]"
                    >
                        <div className='flex items-center gap-1 justify-center'>
                            <p >Book Now</p> <RightCircleTwoTone className='text-xl' />
                        </div>
                    </Button>
                </div>
                <div className="lg:mt-12 flex flex-col items-center justify-between shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all bg-white pb-4 rounded-tr-none rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">

                    <div className=" rounded-tl-3xl py-8 bg-blue-950 w-full flex flex-col items-center  font-semibold text-white">
                        <p className="text-5xl ">$89 <span className="text-xl">/mo</span></p>
                        <p className="p-3 mt-6 bg-yellow-500 text-xl w-[50%] rounded-full text-center">Residential Plan</p>
                    </div>
                    <div className="text-center">
                        <p className="py-4 font-semibold text-gray-500">6 Bedrooms Cleaning</p>
                        <p className="py-4 font-semibold text-gray-500">Vacuming</p>
                        <p className="py-4 font-semibold text-gray-500">3 Bathroom Cleaning</p>
                        <p className="py-4 font-semibold text-gray-500">Window Cleaning</p>
                        <p className="py-4 font-semibold text-gray-500">2 Livingroom Cleaning</p>
                    </div>

                    <Button type='primary' block size='large' className="my-4 w-[50%]"
                    >
                        <div className='flex items-center gap-1 justify-center'>
                            <p >Book Now</p> <RightCircleTwoTone className='text-xl' />
                        </div>
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default Package;