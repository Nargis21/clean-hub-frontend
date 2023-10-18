"use client";

import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useAddServiceMutation } from "../../redux/slices/service/serviceApi";
import { toast } from "react-toastify";
import TextArea from "antd/es/input/TextArea";
import { useRouter } from "next/navigation";


const AddServiceForm = () => {
    const router = useRouter()
    const [addBooking, data] = useAddServiceMutation()

    const onFinish = async (values) => {
        const options = {
            data: { ...values },
        };
        addBooking(options);
    };

    useEffect(() => {
        if (data?.isSuccess) {
            toast.success(`Service Added Successfully!`);
            router.push('/admin/manage-service')
        }
    }, [data, router])

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="flex justify-center py-12">
            <div className="lg:w-[50%] md:[60%] w-[90%] shadow-xl rounded bg-white">
                <h1 className="text-center text-xl py-4 bg-blue-400 rounded">Add Service</h1>
                <Form
                    layout="vertical"
                    name="basic"
                    // labelCol={{ span: 8 }}
                    // wrapperCol={{ span: 18 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className="p-5"
                >

                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: "Please input Title!" }]}
                    >
                        <Input type="text" size="large" />
                    </Form.Item>
                    <Form.Item
                        label="Pricing"
                        name="pricing"
                        rules={[{ required: true, message: "Please input Pricing!" }]}
                    >
                        <Input type="text" size="large" />
                    </Form.Item>
                    <Form.Item
                        label="Location"
                        name="location"
                        rules={[{ required: true, message: "Please input Location!" }]}
                    >
                        <Input type="text" size="large" />
                    </Form.Item>

                    <Form.Item
                        label="Rating (Out of 5)"
                        name="rating"
                        rules={[{ required: true, message: "Please input Rating!" }]}
                    >
                        <Input type="number" size="large" />
                    </Form.Item>

                    <Form.Item
                        label="Availability Info"
                        name="availabilityInfo"
                        rules={[{ required: true, message: "Please input Availability Info!" }]}
                    >
                        <Input type="text" size="large" />
                    </Form.Item>
                    <Form.Item
                        label="Additional Details"
                        name="additionalDetails"
                        rules={[{ required: true, message: "Please input Additional Details!" }]}
                    >
                        <Input type="text" size="large" />
                    </Form.Item>
                    <Form.Item
                        label="Image URL"
                        name="image"
                        rules={[{ required: true, message: "Please input Image URL!" }]}
                    >
                        <Input type="text" size="large" />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: "Please input Description!" }]}
                    >
                        <TextArea type="text" size="large" />
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit" block size="large">
                            Add Now
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
};

export default AddServiceForm;
