'use client'
import { Button, Col, Divider, Row } from 'antd';
import React from 'react';
import loginImage from '../../assets/images/login.png'
import Image from 'next/image';
import FormInput from '../../components/forms/FormInput';
import Form from '../../components/forms/Form';


const onSubmit = (data) => {
    try {
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}

const LoginPage = () => {
    return (
        <Row justify="center" align='middle' style={{ minHeight: '100vh' }}>
            <Col sm={24} md={12} lg={10}>
                <Image src={loginImage} alt='login Image' sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }} />
            </Col>
            <Col sm={24} md={10} lg={8}>
                <h1 style={{ margin: '15px 0' }}>First Login Your Account</h1>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div>
                            <FormInput name='id' type='text' size='large' label='User Id' />
                        </div>
                        <div style={{ margin: '15px 0px' }}>
                            <FormInput name='password' type='password' size='large' label='User Password' />
                        </div>
                        <Button type='primary' block size='large' htmlType='submit'>Submit</Button>
                        <Divider plain>or</Divider>
                        <Button type='primary' block size='large' htmlType='submit' className='flex items-center justify-center gap-2 font-semibold w-full' ghost>
                            <Image
                                src='https://cdn-icons-png.flaticon.com/512/2965/2965278.png'
                                sizes="100vw"
                                width={30}
                                height={30}
                                alt="product image"
                            />
                            <p>Continue With Google</p>
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};

export default LoginPage;