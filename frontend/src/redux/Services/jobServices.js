import { authApi } from "../api-service";
import { JOB_GET } from "../../constant.js";

const jobServicesApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    createJob: build.mutation({
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
    getJob: build.query({
      query: () => ({
        url: ``,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
    getAllJobs: build.query({
      query: () => ({
        url: `${JOB_GET}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
  }),
});

export const { useCreateJobMutation,useGetAllJobsQuery,useGetJobQuery } = jobServicesApi;
