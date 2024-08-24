import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const JobDescription = () => {
  const isApplied = true;
  return (
    <>
      <div className="max-w-7xl mx-auto my-10 ">
        <h1 className="font-bold text-xl">Frontend Developer</h1>
        <div className="flex items-center justify-between">
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
          <Button
            disable={isApplied}
            className={`rounded-xl ${
              isApplied
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-800 hover:text-white"
            }`}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>
        <div>
          <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
            Job Description
          </h1>
          <div className="my-4">
            <h1 className="font-bold my-1">
              Role:
              <span className="pl-4 font-normal text-gray-800">
                Frontend Developer
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Location:
              <span className="pl-4 font-normal text-gray-800">Kolkata</span>
            </h1>
            <h1 className="font-bold my-1">
              Description:
              <span className="pl-4 font-normal text-gray-800">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores dignissimos necessitatibus eaque iste voluptas magni
                veritatis ab enim, voluptatum aperiam totam quasi error quisquam
                quidem eos possimus dolore a voluptatem.
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Experience: 
              <span className="pl-4 font-normal text-gray-800">2 Yrs</span>
            </h1>
            <h1 className="font-bold my-1">
              Salary:
              <span className="pl-4 font-normal text-gray-800">12 LPA</span>
            </h1>
            <h1 className="font-bold my-1">
              Total Application:
              <span className="pl-4 font-normal text-gray-800">13</span>
            </h1>
            <h1 className="font-bold my-1">
              Posted Job:
              <span className="pl-4 font-normal text-gray-800">17-07-2024</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDescription;
