import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId ="jhad;jad;fajdldljfdajf"

  // const daysAgoFunction = (mongodbTime)=>{
  //   const createAt = new Date(mongodbTime);
  //   const now = new Date();
  //   const timeDifference = createAt.getDay() - now.getDay();
  //   return timeDifference;
  // }
  const daysAgoFunction = 2;
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200 ">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{daysAgoFunction} day ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          repellat sapiente non eos voluptas dicta ipsa iure fugiat, laborum
          dolorum eveniet nemo, in hic suscipit ratione eum explicabo!
          Inventore, deserunt?
        </p>
      </div>
      <div className="flex items-center gap2 mt-4">
        <Badge variant="ghost" className="text-blue-700 font-bold">
          12 Positions
        </Badge>
        <Badge variant="ghost" className="text-[#F83002] font-bold">
          Part Time
        </Badge>
        <Badge variant="ghost" className="text-[#7289b7] font-bold">
          24 LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-5">
        <Button
          onClick={() => navigate(`/job/description/${jobId}`)}
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
