import { Badge } from "./ui/badge";

const LatestJobCard = ({ job }) => {
  const salaryPackage = (salary) => {
    return (salary * 12) / 100;
  };

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div>
        <h1 className="font-medium text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">{job?.location}</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text">{job?.description} </p>
      </div>
      <div className="flex items-center gap2 mt-4">
        <Badge variant="ghost" className="text-blue-700 font-bold">
          {job?.position} Positions
        </Badge>
        <Badge variant="ghost" className="text-[#F83002] font-bold">
          {job?.jobType}
        </Badge>
        <Badge variant="ghost" className="text-[#7289b7] font-bold">
          {salaryPackage(job?.salary)} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCard;
