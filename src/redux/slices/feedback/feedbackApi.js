import { api } from "../../api/apiSlice";

const feedbackApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addFeedback: builder.mutation({
            query: ({ data }) => ({
                url: "/review",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const {
    useAddFeedbackMutation,
} = feedbackApi;
