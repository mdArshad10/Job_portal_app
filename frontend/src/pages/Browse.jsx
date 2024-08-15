import Job from "@/components/Job";
import Navbar from "@/components/shared/Navbar";

const randomJob = [1, 3, 2, 4];
const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">Search Results ({randomJob.length})</h1>
        <div className="grid grid-cols-3 gap-4">
          {randomJob.map((item, index) => {
            return (
              <div key={index}>
                <Job />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
