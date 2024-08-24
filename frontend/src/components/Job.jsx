import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { salaryPackage } from "./LatestJobCard";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createAt = new Date(mongodbTime);
    const now = new Date();
    const timeDifference = now.getDay() - createAt.getDay();

    return timeDifference;
  };

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200 ">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) == 0
            ? "Recently Added"
            : daysAgoFunction(job?.createdAt)}
          day ago
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage
              src={
                !job?.company?.logo
                  ? "https://i.pinimg.com/564x/1d/b9/9d/1db99daa9371bf0989f05a0bc12e2b9e.jpg"
                  : job?.company?.logo
              }
            />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-600">{job?.location}</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
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
      <div className="flex items-center gap-4 mt-5">
        <Button
          onClick={() => navigate(`/job/description/${job?._id}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#7289b7]">Save for Later</Button>
      </div>
    </div>
  );
};

export default Job;
