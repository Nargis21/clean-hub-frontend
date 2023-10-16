import MyReview from "../../../../../components/ui/MyReview"
const MyReviewPage = async ({ params }) => {

    const res = await fetch(`http://localhost:5000/review/${params.email}`, {
        cache: "no-cache",
    });
    const reviews = await res.json();

    return (
        <div>
            <MyReview reviews={reviews}></MyReview>
        </div>
    );
};

export default MyReviewPage;