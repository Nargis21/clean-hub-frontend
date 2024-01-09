'use client'
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import StarRating from './StarRating';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.auth';
import { useGetIndividualFeedbacksQuery } from '../../redux/slices/feedback/feedbackApi';
import Loading from '../shared/Loading';

const MyReview = () => {
    const router = useRouter()
    const [user] = useAuthState(auth)
    const { data: reviews, isLoading } = useGetIndividualFeedbacksQuery({ email: user?.email })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="bg-gray-900 lg:p-6 md:p-6 p-4 rounded-xl text-white lg:h-screen">
            <h1 className="text-2xl pb-4">
                My Reviews
            </h1>
            <hr />
            {
                reviews?.length > 0 ?
                    (

                        <div className="my-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 ">
                            {reviews?.map((review) => (
                                <div key={review._id} className="rounded-lg p-5 hover:shadow-2xl hover:scale-[102%] transition-all bg-gray-800 text-white">

                                    <p className="text-sm italic">{review?.comment}</p>

                                    <div className='flex justify-between w-full items-center mt-4'>
                                        <StarRating rating={review?.rating} />
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    ) : (
                        <div className="flex flex-col justify-center gap-5 items-center h-screen">
                            <p className="lg:text-4xl md:text-3xl text-2xl font-semibold">
                                You have no feedback yet!.
                            </p>
                            <Button type="primary" size="large" onClick={() => router.push('/feedback')}>Add Feedback</Button>
                        </div>
                    )
            }

        </div>
    );
};

export default MyReview;