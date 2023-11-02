'use client'
import React from 'react';
import { ScrollToTop } from 'react-simple-scroll-up';

const BackToTop = () => {
    return (
        <div>
            <ScrollToTop
                size={60}
                className="z-50"
                strokeFillColor="#0C4A6E"
                bgColor="#fff"
                symbolSize={30}
                symbolColor="#0C4A6E"
            />
        </div>
    );
};

export default BackToTop;