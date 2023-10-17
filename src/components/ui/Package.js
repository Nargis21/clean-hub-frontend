'use client'
import { Button } from "antd";
import { RightCircleTwoTone } from "@ant-design/icons"

const Package = () => {
    return (
        <div>
            <div>
                <p className="lg:text-6xl md:text-5xl text-4xl py-20 bg-blue-950 text-center text-white font-semibold">Choose Your <span className='text-yellow-500'>Plan</span></p>
            </div>
            <div className="px-10 py-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 bg-gray-200 ">

                <div className="rounded-lg flex flex-col items-center justify-between shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all bg-white">

                    <div className="py-8 rounded-lg bg-sky-900 w-full flex flex-col items-center  font-semibold text-white">
                        <p className="text-5xl ">$39 <span className="text-xl">/mo</span></p>
                        <p className="p-3 mt-6 bg-yellow-500 text-xl w-[50%] rounded-full text-center">Standard Plan</p>
                    </div>
                    <div className="text-center">
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
                <div className="rounded-lg flex flex-col items-center justify-between shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all bg-white">

                    <div className="py-8 rounded-lg bg-sky-900 w-full flex flex-col items-center  font-semibold text-white">
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
                <div className="rounded-lg flex flex-col items-center justify-between shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all bg-white">

                    <div className="py-8 rounded-lg bg-sky-900 w-full flex flex-col items-center  font-semibold text-white">
                        <p className="text-5xl ">$89 <span className="text-xl">/mo</span></p>
                        <p className="p-3 mt-6 bg-yellow-500 text-xl w-[50%] rounded-full text-center">Standard Plan</p>
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