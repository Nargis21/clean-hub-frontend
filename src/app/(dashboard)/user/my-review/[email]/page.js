import MyReview from "../../../../../components/ui/MyReview"
const MyReviewPage = async ({ params }) => {

    const res = await fetch(`https://clean-hub-backend.vercel.app/review/${params.email}`,
        {
            cache: 'no-store'
        }
    );
    const reviews = await res.json();

    return (
        <div>
            <MyReview reviews={reviews}></MyReview>
        </div>
    );
};

export default MyReviewPage;