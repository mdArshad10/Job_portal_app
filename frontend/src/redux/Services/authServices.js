import { authApi } from "../api-service";

const authServicesApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    example: build.query({
      query: () => "test",
    }),
  }),
});

export const { useExampleQuery } = authServicesApi;
