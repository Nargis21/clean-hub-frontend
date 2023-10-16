'use client'
import { Button } from 'antd';
import { useRouter } from 'next/navigation';


const MyReview = () => {
    const router = useRouter()
    return (
        <div>
            <div className="text-center py-6">
                <Button type="primary" size="large" onClick={() => router.push('/add-review')}>Add Feedback</Button>
            </div>

        </div>
    );
};

export default MyReview;