import { authApi } from "../api-service";

const applicationServicesApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    createJobApplication: build.mutation({
      query: (data) => ({
        url: ``,
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),

    getAllJobs: build.query({
      query: () => ({
        url: ``,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),

    getApplicants: build.query({
      query: () => ({
        url: ``,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),

    updateJobStatus: build.mutation({
      query: (data) => ({
        url: ``,
        method: "PUT",
        body: data,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
  }),
});

export const {
  useCreateJobApplicationMutation,
  useGetAllJobsQuery,
  useGetApplicantsQuery,
  useUpdateJobStatusMutation,
} = applicationServicesApi;
