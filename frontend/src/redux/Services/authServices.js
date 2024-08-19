import { authApi } from "../api-service";
import { USER_REGISTER,USER_LOGIN } from "../../constant.js";

const authServicesApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (data) => ({
        url: `${USER_REGISTER}`,
        method: "POST",
        body: data,
      }),
    }),
    login: build.mutation({
      query: (data) => ({
        url: `${USER_LOGIN}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation,useLoginMutation } = authServicesApi;
