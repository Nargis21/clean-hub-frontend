/* eslint-disable react/no-unescaped-entities */
'use client'
import { FileDoneOutlined, MailOutlined, SmileOutlined } from "@ant-design/icons"

const Booking = () => {
    return (
        <div>
            <div className="lg:text-6xl md:text-5xl text-4xl py-20 bg-sky-900 text-center text-white font-semibold">
                <p data-aos="zoom-in">Our Working <span className='text-yellow-500'>Process</span></p>
            </div>
            <div className="px-10 py-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6  bg-sky-900" >

                <div className=" flex flex-col items-center">
                    <div className="p-16 hover:scale-[102%] transition-all bg-white hover:bg-yellow-500 rotate-45 hover:rotate-0 rounded shadow-xl hover:shadow-2xl">
                        <FileDoneOutlined className="text-5xl" />
                    </div>
                    <p className="pt-12 text-2xl font-semibold text-yellow-500">Book Online Form</p>
                    <p className="py-4 text-white text-center">Start by filling out our simple online booking form, where you can select the cleaning service you need, specify your preferences, and choose a date and time that suits your schedule.</p>

                </div>
                <div className=" flex flex-col items-center">
                    <div className="p-16 hover:scale-[102%] transition-all bg-white hover:bg-yellow-500  rotate-45 hover:rotate-0 rounded shadow-xl hover:shadow-2xl">
                        <MailOutlined className="text-5xl" />
                    </div>
                    <p className="pt-12 text-2xl font-semibold text-yellow-500">Get Confirmation</p>
                    <p className="py-4 text-white text-center">Once you have submitted your booking, you will receive an email confirmation with all the details of your appointment. Our team will arrive as scheduled</p>
                </div>
                <div className=" flex flex-col items-center">
                    <div className="p-16 hover:scale-[102%] transition-all bg-white hover:bg-yellow-500  rotate-45 hover:rotate-0 rounded shadow-xl hover:shadow-2xl">
                        <SmileOutlined className="text-5xl" />
                    </div>
                    <p className="pt-12 text-2xl font-semibold text-yellow-500">Let's Enjoy</p>
                    <p className="py-4 text-white text-center">After the cleaning is complete, you can relax and enjoy your fresh and pristine space, knowing that your cleaning needs have been expertly taken care of by our team.</p>
                </div>


            </div>
        </div>
    );
};

export default Booking;