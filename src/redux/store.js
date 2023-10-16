import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './slices/sidebarSlice'
import bookingReducer from './slices/booking/bookingApi'
import { api } from './api/apiSlice'

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        booking: bookingReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})