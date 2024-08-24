import FilterCard from "@/components/FilterCard";
import Job from "@/components/Job";
import React from "react";
import { useSelector } from "react-redux";

const Jobs = () => {
  const jobs = useSelector((store) => store.jobs.allJobs);
  console.log(jobs);
  
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-[20%]">
            <FilterCard />
          </div>
          {jobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[90vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {jobs.map((job) => {
                  return (
                    <React.Fragment key={job._id}>
                      <Job job={job} />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
