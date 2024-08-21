import { authApi } from "../api-service";
import {
  USER_REGISTER,
  USER_LOGIN,
  USER_PROFILE_UPDATE,
  USER_LOGOUT,
} from "../../constant.js";
import { data } from "autoprefixer";

const authServicesApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (data) => ({
        url: `${USER_REGISTER}`,
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    login: build.mutation({
      query: (data) => ({
        url: `${USER_LOGIN}`,
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: `${USER_LOGOUT}`,
        method: "POST",
      }),
    }),
    updateProfile: build.mutation({
      query: (data) => ({
        url: `${USER_PROFILE_UPDATE}`,
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
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useUpdateProfileMutation,
} = authServicesApi;
