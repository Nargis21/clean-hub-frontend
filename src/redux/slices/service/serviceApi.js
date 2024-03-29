import { api } from "../../api/apiSlice";

const serviceApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getServices: builder.query({
            query: () => "services",
            providesTags: ["service"],
        }),
        addService: builder.mutation({
            query: ({ data }) => ({
                url: "/services",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["service"],
        }),

        editService: builder.mutation({
            query: ({ id }) => ({
                url: `services/${id}`,
                method: "PATCH"
            }),
            invalidatesTags: ["service"],
        }),
        deleteService: builder.mutation({
            query: ({ id }) => ({
                url: `services/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["service"],
        }),
    }),
});

export const {
    useAddServiceMutation,
    useEditServiceMutation,
    useDeleteServiceMutation,
    useGetServicesQuery
} = serviceApi;
