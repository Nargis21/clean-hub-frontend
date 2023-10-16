import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        // addBooking: builder.mutation({
        //     query: ({ data }) => ({
        //         url: "/bookings",
        //         method: "POST",
        //         body: data,
        //     }),
        //     invalidatesTags: ["booking"],
        // }),

        // editBook: builder.mutation({
        //     query: ({ id, data }) => ({
        //         url: `books/${id}`,
        //         method: "PATCH",
        //         body: data,
        //     }),
        //     invalidatesTags: ["book"],
        // }),
        deleteUser: builder.mutation({
            query: ({ id }) => ({
                url: `user/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["user"],
        }),
    }),
});

export const {
    useDeleteUserMutation,
} = userApi;
