"use client";

import { Button, Checkbox, DatePicker, Form, Input } from "antd";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.auth";
import moment from "moment/moment";

const BookingForm = () => {
    const user = useAuthState(auth)
    const onFinish = async (values) => {
        console.log(values, "values");
        // await createDoctor({
        //     ...values,
        // });
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
                initialValues={{ fullName: user[0]?.displayName, email: user[0]?.email }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className=" lg:w-[40%] md:[60%] w-[90%] shadow-lg rounded p-5"
            >
                <Form.Item
                    label="Full Name"
                    name="fullName"
                >
                    <Input type="text" disabled />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                >
                    <Input type="email" disabled />
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

                <Form.Item
                    label="Is Password Reset"
                    valuePropName="checked"
                    rules={[
                        { required: true, message: "Please input your Is Password Reset!" },
                    ]}
                >
                    <Checkbox>Password Reset</Checkbox>
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit" block size="large">
                        Book Now
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default BookingForm;
