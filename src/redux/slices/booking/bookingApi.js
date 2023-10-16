import { api } from "../../api/apiSlice";

const bookingApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addBooking: builder.mutation({
            query: ({ data }) => ({
                url: "/bookings",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["booking"],
        }),

        // editBook: builder.mutation({
        //     query: ({ id, data }) => ({
        //         url: `books/${id}`,
        //         method: "PATCH",
        //         body: data,
        //     }),
        //     invalidatesTags: ["book"],
        // }),
        // deleteBook: builder.mutation({
        //     query: ({ id }) => ({
        //         url: `books/${id}`,
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: ["book"],
        // }),
    }),
});

export const {
    useAddBookingMutation,
} = bookingApi;
