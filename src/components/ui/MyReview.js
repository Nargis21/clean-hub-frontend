'use client'
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import StarRating from './StarRating';


const MyReview = ({ reviews }) => {
    const router = useRouter()
    console.log(reviews);
    return (
        <div>
            {
                reviews.length > 0 ?
                    (
                        <div>
                            <div className="text-center py-6">
                                <Button type="primary" size="large" onClick={() => router.push('/user/add-review')}>Add Feedback</Button>
                            </div>
                            <div className="p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 bg-blue-950 ">
                                {reviews?.map((review) => (
                                    <div key={review._id} className="rounded-lg flex flex-col items-center justify-between p-5 shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all bg-white text-black underline-none">

                                        <p className="text-xl font-semibold my-3 flex items-start w-full">{review?.title}</p>

                                        <div className='flex justify-between w-full items-center mb-2'>
                                            <p className="text-xl text-indigo-500 font-bold">{review?.pricing}</p>
                                            <StarRating rating={review?.rating} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center gap-5 items-center h-screen">
                            <p className="lg:text-5xl md:text-3xl text-2xl font-semibold">
                                You have no feedback yet!.
                            </p>
                            <Button type="primary" size="large" onClick={() => router.push('/user/add-review')}>Add Feedback</Button>
                        </div>
                    )
            }

        </div>
    );
};

export default MyReview;