'use client'

import store from '../redux/store';
import { Provider } from 'react-redux'
import StyledComponentsRegistry from './AntdRegistry';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Providers = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
    return <Provider store={store}>
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
    </Provider>
};

