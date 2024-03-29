'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import avatar1 from '../../assets/images/image1.jpg'
import avatar2 from '../../assets/images/avatar2.jpg'
import avatar3 from '../../assets/images/avatar3.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Avatar } from 'antd';
import { StarFilled } from "@ant-design/icons"
import { useGetFeedbacksQuery } from '../../redux/slices/feedback/feedbackApi';
import Loading from '../shared/Loading';
import StarRating from './StarRating';


const Testimonial = () => {
    const { data: reviews, isLoading } = useGetFeedbacksQuery()
    console.log(reviews);
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='bg-blue-950 pb-12'>
            <div className="lg:text-6xl md:text-5xl text-4xl py-16 bg-blue-950 text-center text-white font-semibold">
                <p data-aos="zoom-in">Our Customer <span className='text-yellow-500'>Feedback</span></p>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-full h-full bg-blue-950 pb-12"
            >
                {
                    reviews?.map(review => (
                        <SwiperSlide key={review?.id} className='flex justify-center items-center p-16  '>
                            <div className='flex flex-col items-center lg:gap-0 gap-10 lg:flex-row lg:px-36 md:px-6 px-2 '>
                                <div className='w-full text-center'>
                                    <Avatar src={review?.img} size={300} />

                                </div>
                                <div className='w-full text-center font-semibold lg:text-left'>
                                    <p className='mb-4  text-gray-500 font-italic text-xl'>{review?.comment}</p>

                                    <StarRating rating={review?.rating} />

                                    <h1 className='text-3xl my-3 text-white'>{review?.fullName}</h1>

                                </div>

                            </div>
                        </SwiperSlide>
                    ))
                }
                {/* <SwiperSlide className='flex justify-center items-center p-16  '>
                    <div className='flex flex-col items-center lg:gap-0 gap-10 lg:flex-row lg:px-36 md:px-6 px-2 '>
                        <div className='w-full text-center'>
                            <Avatar src="https://img.freepik.com/free-photo/amazing-cheerful-business-woman-standing-with-arms-crossed_171337-8487.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697500800&semt=ais" size={300} />

                        </div>
                        <div className='w-full text-center font-semibold lg:text-left'>
                            <p className='mb-4  text-gray-500 font-italic text-xl'>I recently hired Sarah and her team for a deep cleaning of my home. They were outstanding! Emily, the office cleaning specialist, ensured every nook and cranny was spotless. I was thoroughly impressed with their professionalism and attention to detail. I highly recommend them!</p>
                            <div className='flex gap-1 text-yellow-500'>
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                            </div>
                            <h1 className='text-3xl my-3 text-white'> Jane Robinson</h1>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center p-16 '>
                    <div className='flex flex-col items-center lg:gap-0 gap-10 lg:flex-row lg:px-36 md:px-6 px-2 '>
                        <div className='w-full text-center'>
                            <Avatar src="https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg" size={300} />

                        </div>
                        <div className='w-full text-center font-semibold lg:text-left'>
                            <p className='mb-4 text-gray-500 font-italic text-xl'>Olivia, the glass cleaner, did a fantastic job on our office windows. The difference was remarkable! The team was punctual, efficient, and left our workplace sparkling. I will definitely be using their services regularly.</p>
                            <div className='flex gap-1 text-yellow-500'>
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                            </div>
                            <h1 className='text-3xl my-3 text-white'> Mark Stevens</h1>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center p-16 '>
                    <div className='flex flex-col items-center lg:gap-0 gap-10 lg:flex-row lg:px-36 md:px-6 px-2 '>
                        <div className='w-full text-center'>
                            <Avatar src="https://img.freepik.com/free-photo/confident-pretty-business-woman-with-arms-crossed_1262-2992.jpg" size={300} />

                        </div>
                        <div className='w-full text-center font-semibold lg:text-left'>
                            <p className='mb-4 text-gray-500 font-italic text-xl'>Mia, the deep cleaning expert, transformed my apartment before my move-out. She left it in pristine condition. Ava and her carpet cleaning expertise also worked wonders. The whole team was reliable, and the results were amazing. Thanks for making my move stress-free!</p>
                            <div className='flex gap-1 text-yellow-500'>
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                            </div>
                            <h1 className='text-3xl my-3 text-white'>  Lisa Harrison</h1>

                        </div>

                    </div>
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default Testimonial;