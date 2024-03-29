import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    tagTypes: ["service", "booking", "user", 'feedback'],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://clean-hub-backend.vercel.app/",
        prepareHeaders: (headers) => {
            const accessToken = localStorage.getItem("accessToken");

            if (accessToken) {
                headers.set("Authorization", `Bearer ${accessToken}`);
            }

            return headers;
        },
    }),
    endpoints: () => ({}),
});
