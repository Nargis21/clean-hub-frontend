'use client'
import { Button } from 'antd';
import { PlayCircleTwoTone } from '@ant-design/icons'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-blue-800'>This is home page</h1>
      <Button type="primary">Primary Button</Button>
      <PlayCircleTwoTone />
    </div>
  );
};

export default HomePage;