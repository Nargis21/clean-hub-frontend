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

        editUser: builder.mutation({
            query: ({ email, data }) => ({
                url: `user/update/${email}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["user"],
        }),
        getUsers: builder.query({
            query: () => "users",
            providesTags: ["user"],
        }),
        getUser: builder.query({
            query: ({ email }) => `user/${email}`,
            providesTags: ["user"],
        }),
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
    useGetUserQuery,
    useGetUsersQuery,
    useEditUserMutation
} = userApi;
