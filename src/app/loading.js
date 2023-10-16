import { Spin } from "antd";
import React from "react";

const Loader = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <Spin size="large" />
        </div>
    );
};

export default Loader;
