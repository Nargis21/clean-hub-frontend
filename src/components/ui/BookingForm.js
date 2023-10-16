"use client";

import { Button, Checkbox, DatePicker, Form, Input } from "antd";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.auth";
import moment from "moment/moment";
import { useState } from "react";
import Link from 'next/link'


const BookingForm = ({ service }) => {

    const [agreed, setAgreed] = useState(false);
    const handleAgreedChange = (e) => {
        setAgreed(e.target.checked);
    };

    const user = useAuthState(auth)
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    if (!accessToken) {
        console.error('Access token not found in localStorage');
        return;
    }
    const onFinish = async (values) => {
        const res = await fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify(values),
            cache: "no-cache"
        });
        const { data: bookingData } = await res.json();
        console.log(bookingData);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="flex justify-center py-12">
            <Form
                layout="vertical"
                name="basic"
                // labelCol={{ span: 8 }}
                // wrapperCol={{ span: 18 }}
                initialValues={{ fullName: user[0]?.displayName, email: user[0]?.email, serviceName: service.title, servicePricing: service.pricing }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className=" lg:w-[40%] md:[60%] w-[90%] shadow-lg rounded p-5"
            >
                <Form.Item
                    label="Service Name"
                    name="serviceName"
                >
                    <Input type="text" disabled className="text-black" />
                </Form.Item>
                <Form.Item
                    label="Service Pricing"
                    name="servicePricing"
                >
                    <Input type="text" disabled className="text-black" />
                </Form.Item>
                <Form.Item
                    label="Full Name"
                    name="fullName"
                >
                    <Input type="text" disabled className="text-black" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                >
                    <Input type="email" disabled className="text-black" />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[{ required: true, message: "Please input your Phone Number!" }]}
                >
                    <Input type="text" />
                </Form.Item>

                <Form.Item
                    label='Date'
                    name='date'
                    rules={[{ required: true, message: "Please select your desired date!" }]}
                    getValueFromEvent={(onChange) => moment(onChange).format('YYYY-MM-DD')}
                    getValueProps={(i) => moment(i)}
                >
                    <DatePicker format='YYYY-MM-DD' style={{ width: '100%' }} />
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
                        Book Now
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default BookingForm;
