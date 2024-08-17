import { authApi } from "../api-service";

const jobServicesApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    example: build.query({
      query: () => "test",
    }),
  }),
  
});

export const { useExampleQuery } = jobServicesApi;
