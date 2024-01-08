import { api } from "../../api/apiSlice";

const feedbackApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getFeedbacks: builder.query({
            query: () => "reviews",
            providesTags: ["feedback"],
        }),
        addFeedback: builder.mutation({
            query: ({ data }) => ({
                url: "/review",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["feedback"],
        }),
        deleteFeedback: builder.mutation({
            query: ({ id }) => ({
                url: `review/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["feedback"],
        }),
    }),
});

export const {
    useAddFeedbackMutation,
    useGetFeedbacksQuery,
    useDeleteFeedbackMutation
} = feedbackApi;
