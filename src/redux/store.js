import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './slices/sidebarSlice'
import bookingReducer from './slices/booking/bookingApi'
import userReducer from './slices/user/userApi'
import serviceReducer from './slices/service/serviceApi'
import { api } from './api/apiSlice'

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        booking: bookingReducer,
        user: serviceReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})