'use client'

import { store } from '../redux/store';
import { Provider } from 'react-redux'
import StyledComponentsRegistry from './AntdRegistry';

export const Providers = ({ children }) => {
    return <Provider store={store}>
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
    </Provider>
};

