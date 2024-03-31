import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Job = {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: any;
  perksAndBenefits: any;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
};
export const JobApi = createApi({
  reducerPath: "jobApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://akil-backend.onrender.com/",
  }),
  endpoints: (builder) => ({
    getJobs: builder.query<Job[], null>({
      query: () => "opportunities/search",
    }),
    getJobById: builder.query<Job, string>({
      query: (id) => `opportunities/${id}`,
      transformResponse: (response: any) => {
        // Assuming response is an array and the job is the first item
        // You may need to adjust this based on the actual response structure
        const job = response.data;
        return job
      },
    }),
  }),
});

export const { useGetJobsQuery, useGetJobByIdQuery } = JobApi;
