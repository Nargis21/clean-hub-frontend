import { api } from "../../api/apiSlice";

const feedbackApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getFeedbacks: builder.query({
            query: () => "reviews",
            providesTags: ["feedback"],
        }),
        getIndividualFeedbacks: builder.query({
            query: ({ email }) => `reviews/${email}`,
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
        editFeedback: builder.mutation({
            query: ({ id }) => ({
                url: `review/${id}`,
                method: "PATCH"
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
    useDeleteFeedbackMutation,
    useEditFeedbackMutation,
    useGetIndividualFeedbacksQuery
} = feedbackApi;
