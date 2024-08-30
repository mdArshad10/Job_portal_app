import React, { useEffect } from "react";
import LatestJobCard from "./LatestJobCard";
import { useGetAllJobsQuery } from "../redux/Services/jobServices";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../redux/Slice/jobSlice";
import { toast } from "sonner";

const LatestJobs = () => {
  const jobs = useSelector((store) => store.jobs.allJobs);
  const dispatch = useDispatch();
  const {
    data: allJobs,
    isFetching,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllJobsQuery();

  if (isLoading && isFetching) {
    return <div>Loading...</div>;
  }
  if (isSuccess) {
    dispatch(getAllJobs(allJobs.data));
  }

  if (isError && error) {
    toast.error(error.message);
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top</span> Job Opening
      </h1>
      <div className="grid grid-cols-3 gap-4 my-2">
        {jobs.length == 0 ? (
          <span>No Job is opening</span>
        ) : (
          jobs.map((job) => {
            return (
              <React.Fragment key={job._id}>
                <LatestJobCard job={job} />
              </React.Fragment>
            );
          })
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
