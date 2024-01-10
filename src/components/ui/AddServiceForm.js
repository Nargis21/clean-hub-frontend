"use client";

import { Button, Form, Input, Rate } from "antd";
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
        <div className="bg-gray-900 lg:p-6 md:p-6 p-4 rounded-xl text-white lg:min-h-screen">
            <h1 className="text-2xl pb-4">
                Add Service
            </h1>
            <hr />
            <div className="flex justify-center">
                <div className="lg:w-[70%] md:[80%] w-[98%] shadow-xl bg-white mt-4 rounded">
                    <Form
                        layout="vertical"
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        className="p-5"
                    >
                        <div className="flex lg:flex-row flex-col gap-2 justify-center items-center">
                            <Form.Item
                                label="Title"
                                name="title"
                                rules={[{ required: true, message: "Please input Title!" }]}
                                className="w-full"
                            >
                                <Input type="text" size="large" />
                            </Form.Item>
                            <Form.Item
                                label="Pricing"
                                name="pricing"
                                rules={[{ required: true, message: "Please input Pricing!" }]}
                                className="w-full"
                            >
                                <Input type="text" size="large" />
                            </Form.Item>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-2 justify-center items-center">
                            <Form.Item
                                label="Location"
                                name="location"
                                rules={[{ required: true, message: "Please input Location!" }]}
                                className="w-full"
                            >
                                <Input type="text" size="large" />
                            </Form.Item>

                            <Form.Item
                                label="Availability Info"
                                name="availabilityInfo"
                                rules={[{ required: true, message: "Please input Availability Info!" }]}
                                className="w-full"
                            >
                                <Input type="text" size="large" />
                            </Form.Item>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-2 justify-center items-center">
                            <Form.Item
                                label="Additional Details"
                                name="additionalDetails"
                                rules={[{ required: true, message: "Please input Additional Details!" }]}
                                className="w-full"
                            >
                                <Input type="text" size="large" />
                            </Form.Item>
                            <Form.Item
                                label="Image URL"
                                name="image"
                                rules={[{ required: true, message: "Please input Image URL!" }]}
                                className="w-full"
                            >
                                <Input type="text" size="large" />
                            </Form.Item>
                        </div>
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[{ required: true, message: "Please input Description!" }]}
                        >
                            <TextArea type="text" style={{ height: 150 }} />
                        </Form.Item>
                        <Form.Item
                            label="Ratings"
                            name="rating"
                            rules={[{ required: true, message: "Please input Rating!" }]}
                        >
                            <Rate allowClear />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" block size="large">
                                Add Now
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddServiceForm;
