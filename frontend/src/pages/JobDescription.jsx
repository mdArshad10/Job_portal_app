import { salaryPackage } from "@/components/LatestJobCard";
import Loader from "@/components/shared/Loader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCreateJobMutation, useGetJobQuery } from "@/redux/Services/jobServices";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const JobDescription = () => {
  const { jobId } = useParams();

  const [
    createJob,
    {
      isLoading: loadingForCreateJob,
      data: createJobData,
      isError: errorForCreateJob,
      isSuccess: successForCreateJob,
    },
  ] = useCreateJobMutation();
  const { data: jobDetail, isError, isLoading, error } = useGetJobQuery(jobId);

  if (isLoading) {
    return <Loader />;
  }

  const applyJobHunter = async () => {
    try {
      const response = await createJob(jobId).unwrap();
      if (successForCreateJob) {
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.message || "some things wrong with creating job"
      );
    }
  };

  const isApplied = true;
  return (
    <>
      <div className="max-w-7xl mx-auto my-10 ">
        <h1 className="font-bold text-xl">{jobDetail?.data?.title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap2 mt-4">
            <Badge variant="ghost" className="text-blue-700 font-bold">
              {jobDetail.data?.position} Positions
            </Badge>
            <Badge variant="ghost" className="text-[#F83002] font-bold">
              {jobDetail.data?.jobType}
            </Badge>
            <Badge variant="ghost" className="text-[#7289b7] font-bold">
              {salaryPackage(jobDetail.data?.salary)} LPA
            </Badge>
          </div>
          <Button
            onClick={isApplied ? null : applyJobHunter}
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
            Description
          </h1>
          <div className="my-4">
            <h1 className="font-bold my-1">
              Role:
              <span className="pl-4 font-normal text-gray-800">
                {jobDetail.data?.requirements.map((requirement) => requirement)}
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Location:
              <span className="pl-4 font-normal text-gray-800">
                {jobDetail.data?.location}
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Description:
              <span className="pl-4 font-normal text-gray-800">
                {jobDetail.data?.description}
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Experience:
              <span className="pl-4 font-normal text-gray-800">
                {jobDetail.data?.experienceLevel} Yrs
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Salary:
              <span className="pl-4 font-normal text-gray-800">
                {salaryPackage(jobDetail.data?.salary)} LPA
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Total Application:
              <span className="pl-4 font-normal text-gray-800">
                {jobDetail.data?.applications?.length}
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Posted Job:
              <span className="pl-4 font-normal text-gray-800">
                {jobDetail.data?.createdAt.split("T")[0]}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDescription;
