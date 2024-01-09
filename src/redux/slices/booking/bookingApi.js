import { api } from "../../api/apiSlice";

const bookingApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBookings: builder.query({
            query: () => "bookings",
            providesTags: ["booking"],
        }),
        getIndividualBookings: builder.query({
            query: ({ email }) => `booking/${email}`,
            providesTags: ["booking"],
        }),
        addBooking: builder.mutation({
            query: ({ data }) => ({
                url: "/bookings",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["booking"],
        }),

        editBooking: builder.mutation({
            query: ({ id }) => ({
                url: `bookings/${id}`,
                method: "PATCH"
            }),
            invalidatesTags: ["booking"],
        }),
        deleteBooking: builder.mutation({
            query: ({ id }) => ({
                url: `bookings/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["booking"],
        }),
    }),
});

export const {
    useAddBookingMutation,
    useEditBookingMutation,
    useDeleteBookingMutation,
    useGetBookingsQuery,
    useGetIndividualBookingsQuery
} = bookingApi;
