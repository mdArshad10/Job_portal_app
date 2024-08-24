import { authApi } from "../api-service";

const companyServicesApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    CreateCompany: build.mutation({
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
    getCompanyById: build.query({
      query: (id) => ({
        url: ``,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
    getCompanyByUserId: build.query({
      query: () => ({
        url: ``,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
    updateCompanyDetail: build.mutation({
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
  useCreateCompanyMutation,
  useGetCompanyByIdQuery,
  useGetCompanyByUserIdQuery,
  useUpdateCompanyDetailMutation,
} = companyServicesApi;
