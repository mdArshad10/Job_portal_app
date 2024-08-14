import React from "react";
import LatestJobCard from "./LatestJobCard";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
  return (
    <div className="mx-auto max-w-7xl my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top</span> Job Opening
      </h1>
      <div className="grid grid-cols-3 gap-4 my-2">
        {randomJobs.slice(0, 6).map((item, index) => {
          return (
            <React.Fragment key={index}>
              <LatestJobCard />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default LatestJobs;
