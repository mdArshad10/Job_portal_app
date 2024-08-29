import { authApi } from "../api-service";
import { COMPANY_CREATE, COMPANY_GET } from "@/constant.js";

const companyServicesApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    createCompany: build.mutation({
      query: (data) => ({
        url: `${COMPANY_CREATE}`,
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
        url: `${COMPANY_GET}/66d06cdc374460f08c09ca24`,
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
