import { authApi } from "../api-service";

const companyServicesApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    example: build.query({
      query: () => "test",
    }),
  }),
});

export const { useExampleQuery } = companyServicesApi;
