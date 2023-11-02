"use client";

import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useAddFeedbackMutation } from "../../redux/slices/feedback/feedbackApi";
import { toast } from "react-toastify";
import TextArea from "antd/es/input/TextArea";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.auth";

const AddFeedbackForm = () => {
    const [user] = useAuthState(auth)
    const router = useRouter()
    const [addFeedback, data] = useAddFeedbackMutation()

    const onFinish = async (values) => {
        const options = {
            data: { ...values },
        };
        addFeedback(options);
    };

    useEffect(() => {
        if (data?.isSuccess) {
            toast.success(`Thanks For Your Feedback!`);
            router.push(`/user/my-review/${user?.email}`)
        }
    }, [data, router, user])

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (

        <div className="flex justify-center py-12">
            <div className="lg:w-[60%] md:[70%] w-[90%] shadow-xl bg-white text-white">
                <h1 className="text-center text-2xl py-6 bg-blue-950">Feedback Form</h1>
                <Form
                    layout="vertical"
                    name="basic"
                    // labelCol={{ span: 8 }}
                    // wrapperCol={{ span: 18 }}
                    initialValues={{ fullName: user?.displayName, email: user?.email }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className="p-5"
                >
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                    >
                        <Input type="text" size="large" disabled className="text-black" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input type="email" size="large" disabled className="text-black" />
                    </Form.Item>
                    <Form.Item
                        label="Rating (Out of 5)"
                        name="rating"
                        rules={[{ required: true, message: "Please input Rating!" }]}
                    >
                        <Input type="number" size="large" />
                    </Form.Item>
                    <Form.Item
                        label="Your Feedback"
                        name="title"
                        rules={[{ required: true, message: "Please add your Feedback!" }]}
                    >
                        <TextArea type="text" style={{ height: 120 }} />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" block size="large">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
};

export default AddFeedbackForm;
