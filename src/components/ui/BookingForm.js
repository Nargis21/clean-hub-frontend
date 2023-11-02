"use client";

import { Button, Checkbox, DatePicker, Form, Input } from "antd";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.auth";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import Link from 'next/link'
import { useAddBookingMutation } from "../../redux/slices/booking/bookingApi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


const BookingForm = ({ service }) => {
    const router = useRouter()
    const [agreed, setAgreed] = useState(false);
    const handleAgreedChange = (e) => {
        setAgreed(e.target.checked);
    };

    const [user] = useAuthState(auth)
    const [addBooking, data] = useAddBookingMutation()

    const onFinish = async (values) => {
        const options = {
            data: { ...values },
        };
        addBooking(options);
    };

    useEffect(() => {
        if (data?.isSuccess) {
            toast.success(`Booking Successful!`);
            router.push(`/user/my-booking/${user?.email}`)
        }
    }, [data, router, user])

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="flex justify-center py-12 bg-sky-900">
            <div className="lg:w-[50%] md:[60%] w-[90%] shadow-xl bg-white">
                <h1 className="text-center text-xl py-6 bg-blue-950 text-white">Booking Confirmation Form</h1>
                <Form
                    layout="vertical"
                    name="basic"
                    // labelCol={{ span: 8 }}
                    // wrapperCol={{ span: 18 }}
                    initialValues={{ fullName: user?.displayName, email: user?.email, serviceName: service.title, servicePricing: service.pricing, status: 'Pending' }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className="p-5"
                >

                    <Form.Item
                        label="Service Name"
                        name="serviceName"
                    >
                        <Input type="text" size="large" disabled className="text-black" />
                    </Form.Item>
                    <Form.Item
                        label="Service Pricing"
                        name="servicePricing"
                    >
                        <Input type="text" size="large" disabled className="text-black" />
                    </Form.Item>
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
                        label="Phone Number"
                        name="phoneNumber"
                        rules={[{ required: true, message: "Please input your Phone Number!" }]}
                    >
                        <Input type="text" size="large" />
                    </Form.Item>

                    <Form.Item
                        label='Date'
                        name='date'
                        rules={[{ required: true, message: "Please select your desired date!" }]}
                        getValueFromEvent={(onChange) => moment(onChange).format('YYYY-MM-DD')}
                        getValueProps={(i) => moment(i)}
                    >
                        <DatePicker size="large" format='YYYY-MM-DD' style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        className="hidden"
                        name='status'
                    >
                        <Input type="hidden" size="large" />
                    </Form.Item>

                    <Checkbox
                        checked={agreed}
                        onChange={handleAgreedChange}
                        className='mb-4'
                    >
                        I agree to the <Link href='/' className="underline">Cancellation Policy</Link>
                    </Checkbox>

                    <Form.Item >
                        <Button type="primary" disabled={!agreed} htmlType="submit" block size="large">
                            Confirm Now
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
};

export default BookingForm;
