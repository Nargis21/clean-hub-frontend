"use client";

import { Button, Checkbox, Form, Input } from "antd";

const BookingForm = () => {
    //   const router = useRouter();
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
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className=" lg:w-[40%] md:[60%] w-[90%] shadow-lg rounded p-5"
            >
                <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[{ required: true, message: "Please input your Full Name!" }]}
                >
                    <Input type="text" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Please input your email!" }]}
                >
                    <Input type="email" />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[{ required: true, message: "Please input your Phone Number!" }]}
                >
                    <Input type="text" />
                </Form.Item>

                <Form.Item
                    label="Role"
                    name="role"
                    rules={[{ required: true, message: "Please input your Role!" }]}
                >
                    <Input type="text" />
                </Form.Item>

                <Form.Item
                    label="Qualification"
                    name="qualification"
                    rules={[
                        { required: true, message: "Please input your Qualification!" },
                    ]}
                >
                    <Input type="text" />
                </Form.Item>

                <Form.Item
                    label="Specialization Id"
                    name="specializationId"
                    rules={[
                        { required: true, message: "Please input your Specialization Id!" },
                    ]}
                >
                    <Input type="text" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input your password!" }]}
                >
                    <Input.Password />
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
