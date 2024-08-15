import FilterCard from "@/components/FilterCard";
import Job from "@/components/Job";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const jobArray =[1,2,3,4,6,5,7,9]

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-[20%]">
            <FilterCard />
          </div>
          {jobArray.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[90vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {jobArray.map((index) => {
                  return (
                    <React.Fragment key={index}>
                      <Job />
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
