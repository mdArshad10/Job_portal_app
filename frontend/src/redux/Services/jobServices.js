import { authApi } from "../api-service";
import { JOB_GET, APPLICANT_CREATE } from "../../constant.js";

const jobServicesApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    createJob: build.mutation({
      query: (id) => ({
        url: `${APPLICANT_CREATE}/${id}`,
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
    getJob: build.query({
      query: (id) => ({
        url: `${JOB_GET}/${id}`,
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

export const { useCreateJobMutation, useGetAllJobsQuery, useGetJobQuery } =
  jobServicesApi;
